#!/usr/bin/env node
/**
 * Single source → many outputs for Helix patterns.
 *
 * Each pattern is authored once as `*.guide.md` next to its docs page, with a
 * YAML front-matter contract (id, rules, components, hlx-classes, examples, …)
 * and prose below. This script:
 *   1. reads every guide,
 *   2. validates it against the live theme (every hlx-* class it names must be
 *      defined in overrides.scss) and against the repo (components, examples),
 *   3. generates the AI skill at .github/skills/helix-patterns/ from the guides.
 *
 * Run with `--check` in CI: it regenerates into memory and fails if the
 * committed skill is stale or any guide fails validation. No file is written in
 * check mode.
 *
 * Usage:
 *   node tools/patterns/generate-pattern-ai.mjs          # write
 *   node tools/patterns/generate-pattern-ai.mjs --check  # verify, exit 1 on drift
 */
import {
  readFileSync,
  writeFileSync,
  readdirSync,
  existsSync,
  mkdirSync,
  rmSync,
} from 'node:fs';
import { join, dirname, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';
import prettier from 'prettier';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, '..', '..');
const patternsDir = join(
  repoRoot,
  'packages/docs-website/src/app/pages/patterns',
);
const overridesScss = join(
  repoRoot,
  'packages/theme-angular-material/styles/theme/helix/overrides.scss',
);
// This repo commits its skills under .github/skills (because .claude/ is
// gitignored, so a skill there wouldn't be shared). Dogfood the generated skill
// there alongside the hand-authored siblings. The same skill content is bundled
// into the @cdx/helix-ai payload; its `sync` CLI writes it into a consumer's
// .claude/skills/helix-patterns (where Claude Code discovers it), plus the
// committed AGENTS.md and Copilot instructions.
const skillsRoot = join(repoRoot, '.github/skills');
const skillDir = join(skillsRoot, 'helix-patterns');
// Hand-authored skills mirrored into the @cdx/helix-ai payload verbatim, so the
// CLI ships the whole Helix skill set (patterns + components + project setup).
const siblingSkills = ['helix-components', 'helix-project-setup'];
const agentsFile = join(repoRoot, 'AGENTS.md');
const copilotFile = join(
  repoRoot,
  '.github/instructions/helix-patterns.instructions.md',
);
const payloadDir = join(repoRoot, 'packages/helix-ai/payload');
const cliSource = join(repoRoot, 'packages/helix-ai/src/cli.mjs');
const guidanceVersion = JSON.parse(
  readFileSync(join(repoRoot, 'packages/helix-ai/package.json'), 'utf8'),
).version;

/**
 * Scrub internal specifics from content destined for the PUBLIC standalone repo.
 * The private cdx-next skill/docs keep the full detail; the exported bundle drops
 * internal infra endpoints and the names of internal app repos so nothing
 * company-internal is attributed in public. Applied only in `--export`.
 */
function sanitizeForPublic(s) {
  return (
    s
      // Internal infra endpoints → generic placeholders.
      .replaceAll(
        'https://repo.clarivate.io/artifactory/api/npm/npm-central/',
        '<your-org npm registry>',
      )
      .replace(
        /https:\/\/cdn\.digital-experience\.clarivate\.io[^\s")'`]*/g,
        '<your brand font CDN>',
      )
      // Internal app repo names → unattributed.
      .replace(/\b(?:cortellis-reg-ai-app|off-x-ui|cmc-gui-docker)\b/g, 'an app')
  );
}

const isCheck = process.argv.includes('--check');
// `--export <dir>` emits the standalone helix-skills bundle (skills + AGENTS +
// Copilot + a copy of the sync CLI) to <dir>, decoupled from @cdx/* — for the
// public helix-skills repo. It does not touch this repo's files.
const exportIdx = process.argv.indexOf('--export');
const exportDir =
  exportIdx !== -1 ? resolve(repoRoot, process.argv[exportIdx + 1] ?? '') : null;
const errors = [];

/** Parse `---\n<yaml>\n---\n<body>` into { data, body }. */
function parseFrontMatter(raw, file) {
  if (!raw.startsWith('---')) {
    errors.push(`${file}: missing front-matter`);
    return { data: {}, body: raw };
  }
  const end = raw.indexOf('\n---', 3);
  if (end === -1) {
    errors.push(`${file}: unterminated front-matter`);
    return { data: {}, body: raw };
  }
  const fm = raw.slice(3, end);
  const body = raw.slice(end + 4).replace(/^\n+/, '');
  let data = {};
  try {
    data = yaml.load(fm) ?? {};
  } catch (e) {
    errors.push(`${file}: invalid YAML front-matter — ${e.message}`);
  }
  return { data, body };
}

/** Every `.hlx-foo` class defined in the theme overrides. */
function themeHlxClasses() {
  const css = readFileSync(overridesScss, 'utf8');
  const set = new Set();
  for (const m of css.matchAll(/\.(hlx-[a-z0-9-]+)/g)) set.add(m[1]);
  return set;
}

/** Find every `*.guide.md` under the patterns tree. */
function findGuides(dir) {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...findGuides(full));
    else if (entry.name.endsWith('.guide.md')) out.push(full);
  }
  return out;
}

/** List every file under `dir`, relative to it. */
function listFilesRec(dir, base = dir) {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listFilesRec(full, base));
    else out.push(relative(base, full));
  }
  return out;
}

function validate(guide, data, dir) {
  const where = relative(repoRoot, guide);
  const required = ['id', 'title', 'layer', 'status', 'summary'];
  for (const key of required) {
    if (!data[key]) errors.push(`${where}: missing required field "${key}"`);
  }
  const classes = themeHlxClasses();
  for (const cls of data['hlx-classes'] ?? []) {
    if (!classes.has(cls)) {
      errors.push(
        `${where}: hlx-classes names "${cls}", which overrides.scss does not define`,
      );
    }
  }
  const exampleDir = join(dir, 'examples');
  for (const ex of data.examples ?? []) {
    const file = join(exampleDir, `${data.id}-${ex}.example.ts`);
    const alt = join(exampleDir, `${ex}.example.ts`);
    if (!existsSync(file) && !existsSync(alt)) {
      errors.push(`${where}: example "${ex}" has no matching *.example.ts`);
    }
  }
  const allowedStatus = ['draft', 'beta', 'stable', 'deprecated'];
  if (data.status && !allowedStatus.includes(data.status)) {
    errors.push(`${where}: status "${data.status}" is not one of ${allowedStatus.join(', ')}`);
  }
}

/** Render one pattern's reference markdown for the AI skill. */
function renderReference(data, body) {
  const lines = [];
  lines.push(`# Pattern: ${data.title}`);
  lines.push('');
  lines.push(`- **id**: ${data.id}`);
  lines.push(`- **status**: ${data.status}`);
  lines.push(`- **use when**: ${data['use-when'] ?? '—'}`);
  lines.push(`- **avoid when**: ${data['avoid-when'] ?? '—'}`);
  if (data.components?.length)
    lines.push(`- **components**: ${data.components.join(', ')}`);
  if (data['hlx-classes']?.length)
    lines.push(`- **hlx classes**: ${data['hlx-classes'].join(', ')}`);
  if (data.tokens?.length) lines.push(`- **tokens**: ${data.tokens.join(', ')}`);
  lines.push('');
  if (data.rules?.length) {
    lines.push('## Rules');
    for (const r of data.rules) lines.push(`- ${r.text ?? r}`);
    lines.push('');
  }
  if (data['anti-patterns']?.length) {
    lines.push('## Anti-patterns (do not do)');
    for (const a of data['anti-patterns']) lines.push(`- ${a.text ?? a}`);
    lines.push('');
  }
  lines.push('## Guidance');
  lines.push(body.trim());
  lines.push('');
  return lines.join('\n');
}

function renderSkill(patterns) {
  const rows = patterns
    .map(
      (p) =>
        `| ${p.data.title} | ${p.data.status} | ${p.data.summary.replace(/\s+/g, ' ').trim()} | [${p.data.id}](./references/${p.data.id}.md) |`,
    )
    .join('\n');
  return `---
name: helix-patterns
description: >-
  GENERATED — do not edit by hand. Use when building a page or composition with
  the Helix design system (Angular 22 / Material 3): page states
  (loading/empty/error), and other documented patterns. Source of truth is each
  pattern's *.guide.md under packages/docs-website; regenerate with
  tools/patterns/generate-pattern-ai.mjs.
---

# Helix Patterns

Compositions of Helix + Angular Material components that solve one UI problem.
Each pattern is authored once as a \`*.guide.md\` beside its docs page and
generated into this skill. **Do not edit these files by hand** — edit the guide
and run \`node tools/patterns/generate-pattern-ai.mjs\`.

Prefer a documented pattern over inventing a composition. If a pattern names an
\`hlx-*\` class, it exists in the theme (CI checks this). Follow your repo's
Angular baseline (\`AGENTS.md\` / \`.github/copilot-instructions.md\`): standalone,
signals, \`@if\`/\`@for\`/\`@switch\`, \`inject()\`, no \`*ngIf\`, no new NgModule.

## Catalog

| Pattern | Status | Summary | Reference |
|---|---|---|---|
${rows}

## How to use

1. Find the pattern that matches the problem (a loading/empty/error region →
   **Page states**).
2. Open its reference for the rules, the components to use, and the anti-patterns
   to avoid.
3. Copy from the live examples in
   \`packages/docs-website/src/app/pages/patterns/<id>/examples/\` — they compile
   and are the canonical code.
`;
}

/** Lean catalog rows (title | use-when | summary) for always-on formats. */
function catalogRows(patterns) {
  return patterns
    .map((p) => {
      const useWhen = (p.data['use-when'] ?? '—').replace(/\s+/g, ' ').trim();
      const summary = p.data.summary.replace(/\s+/g, ' ').trim();
      return `| ${p.data.title} | ${useWhen} | ${summary} |`;
    })
    .join('\n');
}

/**
 * The AGENTS.md section — the portable, always-on layer read by Cursor, the
 * Copilot coding agent, Codex, Claude and others. Kept lean (a catalog + a
 * pointer to the full skill references) to limit the always-on token cost.
 */
function renderAgentsSection(patterns) {
  return `## Helix design-system patterns

<!-- Generated by @cdx/helix-ai@${guidanceVersion} — do not edit by hand. -->

When building UI with the Helix design system (Angular + Material 3), prefer a
documented pattern over inventing a composition, and follow this repo's Angular
baseline. The full reference for each pattern (rules, components, anti-patterns,
example code) is in \`.claude/skills/helix-patterns/references/<id>.md\`.

| Pattern | Use when | Summary |
|---|---|---|
${catalogRows(patterns)}
`;
}

/** The Copilot path-specific instructions file (applies to Angular sources). */
function renderCopilotInstructions(patterns) {
  return `---
description: 'Helix design-system patterns (Angular / Material 3). Generated by @cdx/helix-ai@${guidanceVersion} — do not edit.'
applyTo: '**/*.ts,**/*.html,**/*.scss'
---

# Helix design-system patterns

When building UI with the Helix design system, prefer a documented pattern over
inventing a composition. Full reference for each is in
\`.claude/skills/helix-patterns/references/<id>.md\`.

| Pattern | Use when | Summary |
|---|---|---|
${catalogRows(patterns)}
`;
}

/** A full AGENTS.md for this repo (dogfood): header + the managed section. */
function renderAgentsFile(patterns) {
  return `# AGENTS.md

Guidance for AI coding agents in this repository.

<!-- helix-patterns:start -->
${renderAgentsSection(patterns).trim()}
<!-- helix-patterns:end -->
`;
}

/** README for the standalone helix-skills distribution repo. */
function renderStandaloneReadme(patterns) {
  return `# helix-skills

AI coding guidance for the **Helix** design system (Angular / Material 3): Agent
Skills, an \`AGENTS.md\` block and GitHub Copilot instructions, so Claude Code,
Cursor and Copilot write correct, on-brand Helix code.

> **Generated — do not edit by hand.** Built from the Helix design-system source
> (one \`*.guide.md\` per pattern) and refreshed by re-running the exporter. This
> repo is a distribution mirror; it carries guidance only, no package source.

## What's here

- \`skills/helix-project-setup\` — install and theme a new app
- \`skills/helix-components\` — component variants and tokens
- \`skills/helix-patterns\` — ${patterns.length} composed UI patterns
- \`agents-section.md\` — the cross-tool \`AGENTS.md\` block
- \`copilot-instructions.md\` — GitHub Copilot path instructions
- \`src/cli.mjs\` — a zero-dependency sync CLI

## Use it in your repo

Run the bundled sync CLI (writes the skills to \`.claude/skills\`, merges the
\`AGENTS.md\` block, and writes the Copilot file):

\`\`\`bash
npx github:uh-joan/helix-skills sync      # or: node /path/to/helix-skills/src/cli.mjs sync
\`\`\`

Or pull just the skills with the Agent Skills CLI:

\`\`\`bash
npx skills add uh-joan/helix-skills
\`\`\`

## Using it with Claude (and other AI tools)

After \`sync\`, the guidance is where each tool looks — no extra config:

- **Claude Code / Claude** — the skills land in \`.claude/skills/\` and
  **auto-trigger by description**. Just ask for the UI and the relevant skill
  loads; Claude follows the pattern and uses the real \`@cdx/*\` components. e.g.:
  > Build a list page with filters and a Helix data grid, with loading and empty states.

  Claude picks up \`helix-patterns\` (list-with-filters, data-grid, page-states) and
  composes them. \`helix-project-setup\` walks a brand-new app through installing and
  theming Helix; \`helix-components\` covers variants and tokens.
- **Cursor / Codex / other agents** — read the \`AGENTS.md\` block merged into the repo.
- **GitHub Copilot** — reads \`.github/instructions/helix-patterns.instructions.md\`.

## Versioning

The guidance tracks a Helix major. Pin by **git tag** (e.g. \`v22\`) rather than
an npm version:

\`\`\`bash
npx github:uh-joan/helix-skills#v22 sync
\`\`\`

The CLI warns if the \`@cdx/*\` version installed in your target repo doesn't
match; pass \`--strict\` to make that a hard stop.

## Requirements

This is **guidance, not the components.** The skills themselves are just markdown
plus a zero-dependency CLI (Node only). To actually build, your app installs the
real \`@cdx/*\` Helix packages, which come from their own npm registry and require
access to it — the skills just tell the agent how to compose them.

## Ownership

Helix is **Clarivate's** design system; this repository contains AI coding
guidance derived from it, for use with the Helix (\`@cdx/*\`) packages. It is **not
open-source** — all rights reserved. © Clarivate.
`;
}

// ---- run -------------------------------------------------------------------

const guides = findGuides(patternsDir).sort();
const patterns = [];
for (const guide of guides) {
  const { data, body } = parseFrontMatter(readFileSync(guide, 'utf8'), relative(repoRoot, guide));
  validate(guide, data, dirname(guide));
  patterns.push({ guide, data, body });
}

if (errors.length) {
  console.error('Pattern validation failed:\n' + errors.map((e) => `  ✗ ${e}`).join('\n'));
  process.exit(1);
}

// Format generated markdown with the repo's Prettier config, so the committed
// files are byte-for-byte what `prettier --write` (the lint-staged hook and CI)
// would produce. Otherwise the drift check would fail the moment the hook runs.
async function formatMd(content, file) {
  const options = (await prettier.resolveConfig(file)) ?? {};
  return prettier.format(content, { ...options, parser: 'markdown' });
}

// Render the skill once (SKILL.md + one reference per pattern); it is emitted
// both to this repo's .github/skills (dogfood) and to the @cdx/helix-ai payload.
const skillSkillMd = await formatMd(
  renderSkill(patterns),
  join(skillDir, 'SKILL.md'),
);
const skillRefs = new Map();
for (const p of patterns) {
  skillRefs.set(
    `references/${p.data.id}.md`,
    await formatMd(
      renderReference(p.data, p.body),
      join(skillDir, 'references', `${p.data.id}.md`),
    ),
  );
}
const agentsSection = await formatMd(
  renderAgentsSection(patterns),
  join(payloadDir, 'agents-section.md'),
);
const agentsFileContent = await formatMd(renderAgentsFile(patterns), agentsFile);
const copilotContent = await formatMd(
  renderCopilotInstructions(patterns),
  copilotFile,
);

const files = new Map();
// 1) Dogfood: this repo's own discoverable skill + AGENTS.md + Copilot file.
files.set(join(skillDir, 'SKILL.md'), skillSkillMd);
for (const [rel, content] of skillRefs) files.set(join(skillDir, rel), content);
files.set(agentsFile, agentsFileContent);
files.set(copilotFile, copilotContent);
// 2) Distributable payload bundled into @cdx/helix-ai (written by its sync CLI).
// All three Helix skills ship, under payload/skills/<name>/.
const payloadSkills = join(payloadDir, 'skills');
files.set(join(payloadSkills, 'helix-patterns', 'SKILL.md'), skillSkillMd);
for (const [rel, content] of skillRefs) {
  files.set(join(payloadSkills, 'helix-patterns', rel), content);
}
for (const name of siblingSkills) {
  const dir = join(skillsRoot, name);
  if (!existsSync(dir)) {
    console.error(
      `✗ sibling skill "${name}" not found at ${relative(repoRoot, dir)}`,
    );
    process.exit(1);
  }
  for (const rel of listFilesRec(dir)) {
    // Mirror hand-authored skills byte-for-byte (no reformat).
    files.set(join(payloadSkills, name, rel), readFileSync(join(dir, rel), 'utf8'));
  }
}
files.set(join(payloadDir, 'agents-section.md'), agentsSection);
files.set(join(payloadDir, 'copilot-instructions.md'), copilotContent);

// ---- standalone export (helix-skills repo) ---------------------------------
if (exportDir) {
  const bundle = new Map();
  // Skills at the repo root so `npx skills add <repo>` discovers them, and so the
  // shared CLI (which falls back to the repo root when there's no payload/) reads
  // them. helix-patterns is generated; the siblings are mirrored verbatim.
  bundle.set(join(exportDir, 'skills/helix-patterns/SKILL.md'), skillSkillMd);
  for (const [rel, content] of skillRefs) {
    bundle.set(join(exportDir, 'skills/helix-patterns', rel), content);
  }
  for (const name of siblingSkills) {
    const dir = join(skillsRoot, name);
    for (const rel of listFilesRec(dir)) {
      bundle.set(
        join(exportDir, 'skills', name, rel),
        readFileSync(join(dir, rel), 'utf8'),
      );
    }
  }
  bundle.set(join(exportDir, 'agents-section.md'), agentsSection);
  bundle.set(join(exportDir, 'copilot-instructions.md'), copilotContent);
  bundle.set(join(exportDir, 'src/cli.mjs'), readFileSync(cliSource, 'utf8'));
  bundle.set(
    join(exportDir, 'package.json'),
    JSON.stringify(
      {
        name: 'helix-skills',
        version: guidanceVersion,
        description:
          'Helix design-system AI coding guidance (Agent Skills + AGENTS.md + Copilot instructions). Generated from cdx-next; distributed independently of @cdx/*.',
        type: 'module',
        bin: { 'helix-skills': 'src/cli.mjs' },
        files: [
          'src',
          'skills',
          'agents-section.md',
          'copilot-instructions.md',
          'README.md',
        ],
      },
      null,
      2,
    ) + '\n',
  );
  bundle.set(
    join(exportDir, 'README.md'),
    await formatMd(renderStandaloneReadme(patterns), join(exportDir, 'README.md')),
  );

  // Rewrite the bundle's own tree (keep a user .git if present) so renames/removals
  // don't linger, then write — scrubbing internal specifics for the public repo.
  for (const sub of ['skills', 'src']) {
    const p = join(exportDir, sub);
    if (existsSync(p)) rmSync(p, { recursive: true });
  }
  for (const [file, content] of bundle) {
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, sanitizeForPublic(content));
  }
  console.log(
    `✓ exported helix-skills bundle (${patterns.length} patterns + 2 skills) to ${relative(repoRoot, exportDir) || exportDir}`,
  );
  process.exit(0);
}

if (isCheck) {
  let stale = false;
  for (const [file, content] of files) {
    const current = existsSync(file) ? readFileSync(file, 'utf8') : null;
    if (current !== content) {
      stale = true;
      console.error(`  ✗ stale: ${relative(repoRoot, file)}`);
    }
  }
  // Flag any orphaned payload files (e.g. a removed skill/reference) so the
  // shipped payload never drifts from the source.
  if (existsSync(payloadDir)) {
    const wanted = new Set([...files.keys()]);
    for (const rel of listFilesRec(payloadDir)) {
      const full = join(payloadDir, rel);
      if (!wanted.has(full)) {
        stale = true;
        console.error(`  ✗ orphan payload file: ${relative(repoRoot, full)}`);
      }
    }
  }
  if (stale) {
    console.error(
      '\nGenerated Helix guidance files are out of date.\n' +
        'Run: node tools/patterns/generate-pattern-ai.mjs',
    );
    process.exit(1);
  }
  console.log(
    `✓ ${patterns.length} pattern(s) in sync (skills + AGENTS.md + Copilot + payload), all hlx-* classes valid.`,
  );
} else {
  // Rewrite the payload from scratch so renamed/removed files don't linger.
  if (existsSync(payloadDir)) rmSync(payloadDir, { recursive: true });
  for (const [file, content] of files) {
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, content);
    console.log(`  wrote ${relative(repoRoot, file)}`);
  }
  console.log(
    `✓ generated guidance from ${patterns.length} pattern(s): 3 skills, AGENTS.md, Copilot instructions, and @cdx/helix-ai payload.`,
  );
}
