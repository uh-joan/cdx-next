#!/usr/bin/env node
/**
 * Syncs the custom Helix icons and pictograms from the Helix (LS&H) Figma
 * library into packages/helix-icons.
 *
 * Icons that exist in Google's Material Symbols are skipped: apps get those
 * from the Material Symbols font. Only Clarivate's own icons are exported.
 *
 * Usage:
 *   node tools/scripts/sync-helix-icons.mjs
 *
 * FIGMA_TOKEN (a Figma personal access token) is read from the environment or
 * from the repo's .env file, which git ignores.
 *   node tools/scripts/sync-helix-icons.mjs --build-only
 *
 * --build-only skips Figma and regenerates the TypeScript from the SVGs
 * already in packages/helix-icons/svg.
 */
import { execFileSync } from 'node:child_process';
import { mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const FILE_KEY = 'pI4MbkwcVXdqrqFRi7YhLt';
const ICONS_PAGE = '4:12';
const PICTOGRAMS_PAGE = '3683:29570';
const MATERIAL_LISTS = [
  // Material Symbols, and the classic Material Icons they replaced

  'https://raw.githubusercontent.com/google/material-design-icons/master/variablefont/MaterialSymbolsOutlined%5BFILL%2CGRAD%2Copsz%2Cwght%5D.codepoints',
  'https://raw.githubusercontent.com/google/material-design-icons/master/font/MaterialIconsOutlined-Regular.codepoints',
];
// Figma working layers that are not real icons
const IGNORED_ICONS = new Set(['placeholder', 'placeholder2', 'Vector']);
const EXPORT_BATCH = 100;

const root = join(dirname(fileURLToPath(import.meta.url)), '../..');
const pkg = join(root, 'packages/helix-icons');
const iconsDir = join(pkg, 'svg/icons');
const pictogramsDir = join(pkg, 'svg/pictograms');

/** "AI compare" -> "ai-compare", "check_box_checked" -> "check-box-checked" */
export function iconName(figmaName) {
  return figmaName
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

/**
 * Number from the component name, theme from its Figma section, because the
 * component names are inconsistent: ("PI_pictogram-001_Light-theme",
 * "Light theme (Purple Blue)") -> "pictogram-001-light-purple-blue"
 */
export function pictogramName(figmaName, section = '') {
  const number = figmaName.match(/pictogram-(\d+)/i)?.[1];
  if (!number) return iconName(figmaName);
  const theme = iconName(section.replace(/\btheme\b/i, ''));
  return theme ? `pictogram-${number}-${theme}` : `pictogram-${number}`;
}

/** Single-colour icons follow the surrounding text colour. */
export function normalizeIcon(svg) {
  return svg
    .replace(/\s(width|height)="[^"]*"/g, (attr, name, offset) =>
      offset < svg.indexOf('>') ? '' : attr,
    )
    .replace(/(fill|stroke)="#2A2B2D"/gi, '$1="currentColor"')
    .replace(/\n\s*/g, '')
    .trim();
}

/** Prefixes ids so several pictograms can share a page. */
export function normalizePictogram(svg, name) {
  const ids = [...svg.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
  let out = svg.replace(/\s(width|height)="[^"]*"/g, (attr, _n, offset) =>
    offset < svg.indexOf('>') ? '' : attr,
  );
  for (const id of ids) {
    const escaped = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    out = out
      .replace(new RegExp(`id="${escaped}"`, 'g'), `id="${name}-${id}"`)
      .replace(new RegExp(`#${escaped}\\b`, 'g'), `#${name}-${id}`);
  }
  return out.replace(/\n\s*/g, '').trim();
}

async function figma(path) {
  const token = process.env.FIGMA_TOKEN;
  if (!token) {
    throw new Error(
      'Set FIGMA_TOKEN in .env or the environment to a Figma personal access token with read access to the Helix library.',
    );
  }
  const res = await fetch(`https://api.figma.com/v1/${path}`, {
    headers: { 'X-Figma-Token': token },
  });
  if (!res.ok) {
    throw new Error(`Figma ${res.status}: ${await res.text()}`);
  }
  return res.json();
}

function components(node, found = [], section = '') {
  if (node.type === 'COMPONENT') {
    found.push({ id: node.id, name: node.name, section });
    return found;
  }
  const inner = ['SECTION', 'FRAME'].includes(node.type) ? node.name : section;
  for (const child of node.children ?? []) components(child, found, inner);
  return found;
}

async function exportSvgs(nodes) {
  const svgs = new Map();
  for (let i = 0; i < nodes.length; i += EXPORT_BATCH) {
    const batch = nodes.slice(i, i + EXPORT_BATCH);
    const ids = batch.map((n) => n.id).join(',');
    const { images } = await figma(
      `images/${FILE_KEY}?ids=${encodeURIComponent(ids)}&format=svg&svg_include_id=false&svg_simplify_stroke=true`,
    );
    for (const node of batch) {
      const url = images[node.id];
      if (!url) throw new Error(`Figma returned no SVG for ${node.name}`);
      svgs.set(node, await (await fetch(url)).text());
    }
    console.log(
      `  exported ${Math.min(i + EXPORT_BATCH, nodes.length)}/${nodes.length}`,
    );
  }
  return svgs;
}

async function writeSvgs(dir, svgs, nameFn, normalize) {
  await rm(dir, { recursive: true, force: true });
  await mkdir(dir, { recursive: true });
  const names = new Set();
  for (const [node, svg] of svgs) {
    const name = nameFn(node.name, node.section);
    if (names.has(name))
      throw new Error(`Duplicate name "${name}" from "${node.name}"`);
    names.add(name);
    await writeFile(join(dir, `${name}.svg`), normalize(svg, name) + '\n');
  }
}

async function syncFromFigma() {
  console.log('Reading the Figma library…');
  const { nodes } = await figma(
    `files/${FILE_KEY}/nodes?ids=${ICONS_PAGE},${PICTOGRAMS_PAGE}`,
  );
  const material = new Set();
  for (const url of MATERIAL_LISTS) {
    for (const line of (await (await fetch(url)).text()).split('\n')) {
      if (line) material.add(line.split(' ')[0]);
    }
  }

  const icons = components(nodes[ICONS_PAGE].document).filter(
    (c) => !IGNORED_ICONS.has(c.name) && !material.has(c.name),
  );
  const pictograms = components(nodes[PICTOGRAMS_PAGE].document);
  console.log(`${icons.length} custom icons, ${pictograms.length} pictograms`);

  await writeSvgs(iconsDir, await exportSvgs(icons), iconName, normalizeIcon);
  await writeSvgs(
    pictogramsDir,
    await exportSvgs(pictograms),
    pictogramName,
    normalizePictogram,
  );
}

async function svgFiles(dir) {
  try {
    return (await readdir(dir)).filter((f) => f.endsWith('.svg')).sort();
  } catch {
    return [];
  }
}

const HEADER =
  '// Generated by tools/scripts/sync-helix-icons.mjs. Do not edit.\n\n';

const list = (lines) => (lines.length ? `\n${lines.join('\n')}\n` : '');

async function generateTypeScript() {
  const iconFiles = await svgFiles(iconsDir);
  const entries = [];
  for (const file of iconFiles) {
    const svg = (await readFile(join(iconsDir, file), 'utf8')).trim();
    if (/['\\\n]/.test(svg))
      throw new Error(`${file} can't be inlined as a string`);
    entries.push(`  '${file.slice(0, -4)}':\n    '${svg}',`);
  }
  await writeFile(
    join(pkg, 'src/lib/icons.generated.ts'),
    HEADER +
      `export const HELIX_ICONS = {${list(entries)}} as const;\n\n` +
      'export type HelixIconName = keyof typeof HELIX_ICONS;\n',
  );

  const pictograms = (await svgFiles(pictogramsDir)).map(
    (f) => `  '${f.slice(0, -4)}',`,
  );
  await writeFile(
    join(pkg, 'src/lib/pictograms.generated.ts'),
    HEADER +
      `export const HELIX_PICTOGRAMS = [${list(pictograms)}] as const;\n\n` +
      'export type HelixPictogramName = (typeof HELIX_PICTOGRAMS)[number];\n',
  );
  execFileSync(
    'npx',
    ['prettier', '--write', join(pkg, 'src/lib/*.generated.ts')],
    {
      cwd: root,
      stdio: 'ignore',
    },
  );
  console.log(
    `Generated ${iconFiles.length} icons and ${pictograms.length} pictograms.`,
  );
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  try {
    // Values already in the environment take precedence over .env
    process.loadEnvFile(join(root, '.env'));
  } catch {
    // No .env file
  }
  try {
    if (!process.argv.includes('--build-only')) await syncFromFigma();
    await generateTypeScript();
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}
