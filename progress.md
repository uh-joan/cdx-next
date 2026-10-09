# progress.md — `@cdx` → `@hlx` scope swap

Live state. On resumption, read [graph.md](graph.md) and this file first. All work
is on branch `hlx/scope-migration`; `main` is untouched (`8a15a9e7`) and is the
recoverable version.

## Graph — COMPLETE (all nodes passed)

- **Tier 0 leaves:** N1 colors, N2 clarivate-font*, N3 shared-branding, N4
  helix-icons, N5 ngx-translations, N7 oti-snippet, N8 theme-snackbar*, N9
  theme-highcharts*, N10 theme-ag-grid*, N11 theme-xng-breadcrumb, N12
  eslint-config-helix, N13 stylelint-config-helix, N14 helix-ai* — all done.
- **Tier 1:** N15 theme-angular-material — done.
- **Tier 2:** N16 ngx-branding*, N17 ngx-authentication — done.
- **Tier 2.5:** N6 ngx-session-activity (corrected edge, waited on N17) — done.
- **Tier 3:** N18 ngx-analytics — done.
- **Tier 4 (private/build-only):** N19 docs-website*, N20 ngx-reference-app*, N21
  ngx-demo-app* (scope-clean; see note), N22 storybook — done.
- **Prep / tooling / docs:** N0 (stale alias removed), N23 (tools + README +
  AGENTS + hidden `.github/**` guidance tree) — done.

`*` = carries only frozen infra strings (CDN `deploy:cdn` / registry) excluded
from the rg gate. **All 18 publishable packages + both consumer apps + storybook
are on `@hlx`.** See [checks.md](checks.md) for per-node gate evidence.

## Font: self-hosted, fully broken away from the @cdx CDN

The Clarivate brand font no longer loads from the `@cdx` CDN. `@hlx/clarivate-font`
now vendors the 4 web-font binaries (`fonts/*.woff2|.woff`) with local `@font-face`
`src`, and every app/storybook bundles it via `@import
'@hlx/clarivate-font/css/clarivate-font.css'` in `styles.scss` (CDN `<link>`s and
preconnects removed). helix-check and all setup guidance updated to the bundled
approach. Verified: Vite + Angular builds emit the fonts as hashed assets with
rebased `url()`.

## Branch commits (26 package/prep + font + docs on top of the graph doc)

Libraries N1–N18 (one per package), N0 prep, N19–N22 consumers, N23 tools/docs,
the lockfile relink, then the `.github` hidden-tree swap and the font self-host
commit, plus this docs refresh. `git log main..hlx/scope-migration` is the
record.

## npm install was run (permitted — build needed it)

The docs-website/storybook Vite+Sass builds resolve `@hlx/*` via node_modules
`loadPaths`, so the workspace had to be re-linked from `@cdx/*` to `@hlx/*`
(`node_modules/@cdx` now empty; `node_modules/@hlx` holds all packages). Lockfile
relink committed. No publish/registry/network-registry changes.

## Decisions / learnings

- **Pure scope swap only** for the npm specifier; selectors / `prefix: cdx` /
  `Cdx*` identifiers remain a separate breaking step (graph.md Open-Q 4).
- **ngx-session-activity is not a leaf** — undeclared `@cdx/ngx-authentication`
  import; node N6 waited on N17.
- **rg misses two things** the gates must account for:
  1. **Hidden dirs** — `rg` skips dotfiles/dot-dirs by default, so the entire
     `.github/**` guidance tree (and `.npmrc`, `.prettierignore`) were invisible
     to `rg '@cdx/'`. Use `rg --hidden` or `git grep`.
  2. **Escaped-slash alias regexes** — `/^@cdx\/x$/` in `vite.config.mjs`,
     `vitest.config.mjs`, `.storybook/main.ts` do not contain the literal
     substring `@cdx/`. Found with `rg '@cdx\\/'`.
- **ngx-demo-app build** has pre-existing TS2551 API-drift failures unrelated to
  the swap (demo code vs current service APIs); identical on main. Its scope gate
  is rg-zero + every `@hlx/*` import resolving (zero TS2307).
- **Font self-host supersedes the CDN font URL** half of Open-Q 3: the
  clarivate-font CDN `<link>` is gone everywhere. The `deploy:cdn` publish scripts
  + Jenkins stage remain (CI/AWS hard stop) and are now dead for the font.

## Open issues (human-gated — see graph.md Open questions)

- **Registry (Open-Q 1):** `.npmrc` + `@cdx:registry` guidance lines still on
  `@cdx` (where `@hlx` publishes, `npm-cdx` vs `npm-central`). HARD STOP.
- **Publish strategy (Open-Q 2):** transition window vs flag-day; `npm publish` /
  `deprecate` / dual-publish — HARD STOPS.
- **CDN/AWS/Jenkins (Open-Q 3):** the `deploy:cdn` scripts (clarivate-font,
  theme-snackbar, theme-highcharts, theme-ag-grid) + Jenkinsfile `-s @cdx` + IAM.
  The font's CDN link is retired by self-hosting; the publish scripts/Jenkins are
  dead for the font and should be removed together by infra. HARD STOP.
- **Selectors / prefix / identifiers (Open-Q 4):** separate breaking step.
- **Cross-product:** `@cdx/rcx-analytics` (a React sibling package, not in this
  repo) left as-is in a docs example — out of scope for this repo's swap.

## Next action

The in-repo `@cdx` → `@hlx` migration is complete and self-consistent (builds
pass; `main` clean). Remaining `@cdx` strings are all human-gated infra/registry
(Open-Q 1–3), a cross-product example, or historical changelog/ADR text. Hand
off the Open questions for the publish + infra decisions.
