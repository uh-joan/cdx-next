# checks.md — `@cdx` → `@hlx` scope-swap gates

One row per node gate. Verdict ∈ {pass, fail, unresolved}. Evidence must be a file
path or actual check output — deterministic check first, node report second, model
confidence last. A `fail` opens the correction edge (graph.md); do not weaken a
gate to reach `pass`. Each node's gate is two-part: **(a)** `rg -l '@cdx/'
packages/<pkg>` returns zero across the publishable surface (excluding the frozen
`deploy:cdn` CDN string), **and (b)** the package builds/type-checks (`nx build
<pkg>`; Sass-only packages with no compile target substitute manifest-JSON
validity). Rows for un-run nodes start `unresolved`.

| node | package | gate (a) rg `@cdx/` = 0 | gate (b) build / type-check | verdict | evidence |
|---|---|---|---|---|---|
| N0 | (prep: stale alias / example string) | n/a | n/a | unresolved | — |
| N1 | colors | ✓ | manifest valid (Sass-only) | **pass** | `rg -l '@cdx/' packages/colors` → exit 1 (no match); `node -e JSON.parse` → valid, name=`@hlx/colors`; commit `99e9d5ca` |
| N2 | clarivate-font | — | — | unresolved | `deploy:cdn` CDN string frozen (Open-Q 3) |
| N3 | shared-branding | ✓ | manifest valid (Sass-only) | **pass** | `rg -l '@cdx/' packages/shared-branding` → exit 1; `node -e JSON.parse` → valid, name=`@hlx/shared-branding`; commit `fee991ca` |
| N4 | helix-icons | — | — | unresolved | — |
| N5 | ngx-translations | — | — | unresolved | — |
| N6 | ngx-session-activity | — | — | unresolved | waits on N17 (undeclared `@cdx/ngx-authentication` import — see graph.md Tier 2.5) |
| N7 | oti-snippet | ✓ | `nx build` exit 0 | **pass** | `rg -l '@cdx/' packages/oti-snippet` → exit 1; `nx build oti-snippet` → exit 0 ("Successfully ran target build"); name=`@hlx/oti-snippet` + tsconfig alias; commit `60dfc371` |
| N8 | theme-snackbar | — | — | unresolved | `deploy:cdn` CDN string frozen (Open-Q 3) |
| N9 | theme-highcharts | — | — | unresolved | `deploy:cdn` CDN string frozen (Open-Q 3) |
| N10 | theme-ag-grid | — | — | unresolved | `deploy:cdn` CDN string frozen (Open-Q 3) |
| N11 | theme-xng-breadcrumb | — | — | unresolved | — |
| N12 | eslint-config-helix | — | — | unresolved | waits on N13 |
| N13 | stylelint-config-helix | — | — | unresolved | — |
| N14 | helix-ai | — | — | unresolved | large doc/payload surface |
| N15 | theme-angular-material | — | — | unresolved | waits on N1 (done) |
| N16 | ngx-branding | — | — | unresolved | waits on N3 (done), N15 |
| N17 | ngx-authentication | — | — | unresolved | waits on N15 |
| N18 | ngx-analytics | — | — | unresolved | waits on N16 |
| N19 | docs-website (private) | — | — | unresolved | waits on its library edges; re-run pattern/story generators after |
| N20 | ngx-reference-app (private) | — | — | unresolved | waits on its library edges |
| N21 | ngx-demo-app (build-only) | — | — | unresolved | waits on its library edges |
| N22 | storybook (build-only) | — | — | unresolved | waits on its library edges |

## Notes

- **Gate (a) convention:** `rg -l` exit **1** = zero matching files = pass. The
  publishable surface excludes the `deploy:cdn` npm-script CDN destination string,
  which is frozen under the CDN/AWS hard stop (graph.md Open-Q 3). N2/N8/N9/N10 stay
  `unresolved` until that is resolved, because their `package.json` still carries a
  `@cdx/...` CDN path that must **not** be edited in this run.
- **Gate (b) for Sass-only packages** (colors, shared-branding, and the other
  `nx-stylelint:lint`-only leaves): no `tsc`/ng-packagr compile target exists; the
  manifest-JSON validity check stands in, since the published artifact is the raw
  `.scss` plus `package.json`.
- Build tooling **was** available this run: `node_modules/` present, `nx` and `tsc`
  on `.bin`; no `npm install` was needed, so the `tsc --noEmit` fallback was not
  used.
