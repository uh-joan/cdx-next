# checks.md — `@cdx` → `@hlx` scope-swap gates

One row per node gate. Verdict ∈ {pass, fail, unresolved}. Evidence must be a file
path or actual check output — deterministic check first, node report second, model
confidence last. A `fail` opens the correction edge (graph.md); do not weaken a
gate to reach `pass`. Each node's gate is two-part: **(a)** `rg -l '@cdx/'
packages/<pkg>` returns zero across the publishable surface (excluding the frozen
`deploy:cdn` CDN string and the clarivate-font CDN `<link>` URL — Open-Q 3), **and
(b)** the package builds/type-checks (`nx build <pkg>`; Sass/JS-config packages
with no compile target substitute manifest-JSON validity; private/build-only
consumers use their own target or `tsc --noEmit`). Rows for un-run nodes start
`unresolved`.

| node | package | gate (a) rg `@cdx/` = 0 | gate (b) build / type-check | verdict | evidence |
|---|---|---|---|---|---|
| N0 | (prep: stale alias / example string) | ✓ | n/a | **pass** | removed stale `@cdx/demo` alias from `tsconfig.base.json` (pointed at non-existent `packages/demo`); `rg '@cdx/' tsconfig.base.json` → exit 1. Left `@cdx/rcx-analytics` (cross-product React pkg). commit `f56090f5` |
| N1 | colors | ✓ | manifest valid (Sass-only) | **pass** | `rg -l '@cdx/' packages/colors` → exit 1; manifest valid, name=`@hlx/colors`; commit `99e9d5ca` |
| N2 | clarivate-font | ✓* | manifest valid (Sass/CDN leaf) | **pass** | *carve-out: only the frozen `deploy:cdn --destination @cdx/clarivate-font/...` remains (Open-Q 3). `name`=`@hlx/clarivate-font`; commit `c90b374e` |
| N3 | shared-branding | ✓ | manifest valid (Sass-only) | **pass** | `rg -l '@cdx/' packages/shared-branding` → exit 1; name=`@hlx/shared-branding`; commit `fee991ca` |
| N4 | helix-icons | ✓ | `nx build helix-icons` exit 0 | **pass** | `rg -l '@cdx/' packages/helix-icons` → exit 1; "Successfully ran target build"; name + README + provide-helix-icons.ts + tsconfig alias; commit `ce475edc` |
| N5 | ngx-translations | ✓ | `nx build ngx-translations` | **pass** | `rg` → exit 1; "Successfully ran target build"; name + tsconfig alias; commit `c6c9e00d` |
| N6 | ngx-session-activity | ✓ | `nx build ngx-session-activity` | **pass** | `rg` → exit 1; build pass (resolved undeclared `@hlx/ngx-authentication` import via N17); name + directive import + alias; commit `b340ab4a` |
| N7 | oti-snippet | ✓ | `nx build` exit 0 | **pass** | `rg` → exit 1; `nx build oti-snippet` exit 0; name + tsconfig alias; commit `60dfc371` |
| N8 | theme-snackbar | ✓* | manifest valid (Sass/CDN leaf) | **pass** | *carve-out: only frozen `deploy:cdn --destination @cdx/theme-snackbar/*` remains. name=`@hlx/theme-snackbar`; commit `40eb43ba` |
| N9 | theme-highcharts | ✓* | manifest valid (stylelint-only) | **pass** | *carve-out: only frozen `deploy:cdn @cdx/theme-highcharts/*`. name + tsconfig alias (→ dist/theme-highcharts.mjs); commit `53718503` |
| N10 | theme-ag-grid | ✓* | manifest valid (stylelint-only) | **pass** | *carve-out: only frozen `deploy:cdn @cdx/theme-ag-grid/*`. name + tsconfig alias (→ dist/theme-ag-grid.mjs); commit `fb4be756` |
| N11 | theme-xng-breadcrumb | ✓ | `nx build theme-xng-breadcrumb` | **pass** | `rg` → exit 1; "Successfully ran target build"; name + tsconfig alias; commit `263dc361` |
| N12 | eslint-config-helix | ✓ | manifest valid (JS config, no build) | **pass** | `rg` → exit 1; name=`@hlx/eslint-config-helix` + README + index.js + stylelint companion ref; commit `e3b8201e` |
| N13 | stylelint-config-helix | ✓ | manifest valid (JS config, no build) | **pass** | `rg` → exit 1; name + README + index.js; commit `93960bfd` |
| N14 | helix-ai | ✓* | manifest valid + `node --check src/cli.mjs` | **pass** | *carve-out: only the frozen clarivate-font CDN `<link>` in theme-setup.md remains. name + cli.mjs (incl. version-check array `@hlx/{theme-angular-material,colors,ngx-branding}`) + README + payload/skills/**; commit `b78d7e5e` |
| N15 | theme-angular-material | ✓ | `nx build` (fresh, `--skip-nx-cache`) | **pass** | `rg` → exit 1; build pass; name + `@hlx/colors` dep + ng-package.json allow-list + 4 theme `.scss` `@use` + alias; nx links `@hlx/colors`→packages/colors; commit `6293daf6` |
| N16 | ngx-branding | ✓* | `nx build ngx-branding` | **pass** | *carve-out: only frozen clarivate-font CDN `<link>` in helix-check.js remains. name + 2 deps + helix-check list + 4 component imports + alias; commit `87905178` |
| N17 | ngx-authentication | ✓ | `nx build ngx-authentication` | **pass** | `rg` → exit 1; build pass; name + `@hlx/theme-angular-material` dep + alias; commit `c5a5acd1` |
| N18 | ngx-analytics | ✓ | `nx build ngx-analytics` | **pass** | `rg` → exit 1; build pass; name + dep + 3 src imports + vitest alias + tsconfig alias; commit `cf8a1fa1` |
| N19 | docs-website (private) | ✓* | `nx build-site docs-website` (cascades storybook) | **pass** | *carve-out: frozen CDN `<link>`s + `@cdx:registry` instruction + cross-product `@cdx/rcx-analytics` left. Swapped imports/@use/deps + vite.config.mjs & vitest.config.mjs escaped-slash alias regexes; build pass; commit `644b1f3d` |
| N20 | ngx-reference-app (private) | ✓* | `tsc --noEmit -p tsconfig.app.json` (0 TS2307) | **pass** | *carve-out: frozen CDN `<link>`. Swapped deps/imports/@use + vitest alias; typecheck clean, zero module-resolution errors; commit `3ef02b47` |
| N21 | ngx-demo-app (build-only) | ✓* | all `@hlx/*` entry points resolve (0 TS2307) | **pass (scope)** | *carve-out: frozen CDN `<link>`. `nx build` has PRE-EXISTING TS2551 API-drift failures (demo code calls `TranslateService.translations` / `ThemeService.currentTheme$`), on untouched lines, identical on main; the scope swap itself resolves with zero TS2307. commit `5898159f` |
| N22 | storybook (build-only) | ✓ | `nx build-storybook storybook` | **pass** | `rg` → exit 1; build pass; swapped story imports + styles `@use` + tsconfig paths + `.storybook/main.ts` viteFinal escaped-slash alias regexes; commit `50c7a3ee` |
| N23 | tools + root docs | ✓* | peerUpdater `@hlx/` match; generator emits `@hlx/*` | **pass** | *carve-out: `@cdx:registry` lines + CDN URLs frozen. peerUpdater.js, generate-pattern-ai.mjs, prompt-api-context docs, README.md, AGENTS.md; commit `910f4aa7` |

## Notes

- **Gate (a) convention:** `rg -l` exit **1** = zero matching files = pass. The
  publishable surface excludes two frozen string classes: the `deploy:cdn`
  npm-script `--destination @cdx/...` CDN path, and the hard-coded clarivate-font
  CDN `<link>` URL `cdn.digital-experience.clarivate.io/@cdx/clarivate-font/...`.
  Both are infra-controlled (CDN/AWS, Open-Q 3), not npm specifiers, and must not
  be edited until infra mirrors the bucket. Rows marked `✓*` reached zero npm
  specifiers with only those frozen strings remaining.
- **Escaped-slash aliases:** `vite.config.mjs`, `vitest.config.mjs`, and
  `.storybook/main.ts` carry resolve-alias regexes of the form `/^@cdx\/x$/`.
  The literal `@cdx\/` does **not** contain the substring `@cdx/`, so a plain
  `rg '@cdx/'` gate misses them — they were found with `rg '@cdx\\/'` and swapped.
  Learning edge recorded in graph.md.
- **Gate (b) for Sass/JS-config packages:** manifest-JSON validity stands in where
  there is no compile target (the published artifact is raw `.scss`/`.js` +
  `package.json`).
- **npm install was run** this session (permitted — a build needed it): the
  docs-website/storybook Vite+Sass builds resolve `@hlx/*` via node_modules
  `loadPaths`, which required re-linking the workspace from `@cdx/*` to `@hlx/*`.
  `node_modules/@cdx` is now empty; `node_modules/@hlx` holds all 18 + the two
  apps. Lockfile relink committed as `33ce6765`.
