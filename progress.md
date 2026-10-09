# progress.md — `@cdx` → `@hlx` scope swap

Live state. On resumption, read [graph.md](graph.md) and this file first, then
continue from **Next action**. All work is on branch `hlx/scope-migration`; `main`
is untouched and is the recoverable version.

## Graph
- **Done:** N1 (colors), N3 (shared-branding), N7 (oti-snippet) — renamed, gated, committed.
- **Running:** none.
- **Blocked:** none hard. N2/N8/N9/N10 held on the CDN hard stop (their `package.json` `deploy:cdn` carries a `@cdx/...` string that must not be edited — Open-Q 3).
- **Ready (not started):** the rest of Tier 0 leaves — N2*, N4, N5, N11, N13→N12, N14 (* = CDN carve-out). Then N15 (theme-angular-material, its only dep N1 is done), then N16/N17, N6, N18, then the Tier 4 consumers.

## Outputs
- `graph.md`, `checks.md`, `progress.md` — written on branch, kept current.
- Branch `hlx/scope-migration` created off clean `main`.
- Commits (one per package):
  - `99e9d5ca` refactor(colors): `@cdx/colors` → `@hlx/colors`
  - `fee991ca` refactor(shared-branding): `@cdx/shared-branding` → `@hlx/shared-branding`
  - `60dfc371` refactor(oti-snippet): `@cdx/oti-snippet` → `@hlx/oti-snippet` (+ tsconfig alias)

## Gate evidence (this run)
- N1: `rg -l '@cdx/' packages/colors` → exit 1 (zero); manifest valid JSON, name `@hlx/colors`.
- N3: `rg -l '@cdx/' packages/shared-branding` → exit 1 (zero); manifest valid JSON, name `@hlx/shared-branding`.
- N7: `rg -l '@cdx/' packages/oti-snippet` → exit 1 (zero); `nx build oti-snippet` → exit 0.

## Decisions / learnings
- **Pure scope swap only.** Nodes change `@cdx/` specifiers (name, deps, `@use`, imports, tsconfig alias). Selectors / `prefix: cdx` / `Cdx*` identifiers are a separate later breaking step and are not gated here.
- **ngx-session-activity is not a leaf** (graph.md Tier 2.5 / learning edge): its `header-global-session-management.directive.ts` imports `@cdx/ngx-authentication` — an **undeclared** dependency (absent from its `package.json`). Its node (N6) must wait on N17 and its build needs `@hlx/ngx-authentication`.
- **CDN `deploy:cdn` strings are frozen** (HARD STOP): the `rg` gate excludes them; N2/N8/N9/N10 cannot reach a clean rg-zero without an infra decision.
- Build tooling was available (`node_modules/` + `nx`/`tsc`); no `npm install` needed; `tsc --noEmit` fallback not used.
- Sass-only leaves have no compile target → manifest-JSON validity is their gate (b).

## Open issues (human-gated — see graph.md Open questions)
- Registry mismatch (`npm-cdx` vs `npm-central`) + `@hlx` registry home — blocks publish, not rename.
- Transition window vs flag-day; `npm publish` / `npm deprecate` / dual-publish — all HARD STOPS.
- CDN / AWS / IAM + Jenkinsfile `@cdx` strings — HARD STOP; the `deploy:cdn` carve-out above depends on this.
- Selector / prefix / identifier retirement — separate breaking step.

## Next action
Continue Tier 0 on `hlx/scope-migration`: **N4 (helix-icons)** — `name` + self-ref
in `provide-helix-icons.ts` + `tsconfig.base.json` alias; gate `rg`-zero +
`nx build helix-icons`. Then **N5 (ngx-translations)**, **N11
(theme-xng-breadcrumb)**, **N13 → N12** (stylelint- then eslint-config), **N14
(helix-ai)**. Hold N2/N8/N9/N10 until the CDN hard stop is cleared. Then **N15
(theme-angular-material)** — all its deps (N1) are done. Cap each run at its node
budget; one commit per package; keep `main` clean.
