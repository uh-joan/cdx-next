# graph.md — `@cdx` → `@hlx` scope swap (cdx-next)

Operating graph for executing the npm-scope migration described in
[CDX-TO-HLX-MIGRATION.md](CDX-TO-HLX-MIGRATION.md). Structure follows the same
loops-and-graphs method as the helix-cli build: bounded nodes, edges only where one
node consumes another's output, a deterministic gate on every node, capped
correction edges. Status lives in [progress.md](progress.md); gate results in
[checks.md](checks.md).

> **State: COMPLETE.** Branch `hlx/scope-migration`; `main` untouched (`8a15a9e7`),
> the recoverable version. All nodes N0–N23 passed (see progress.md / checks.md):
> every one of the 18 publishable packages, both consumer apps, and storybook are
> on `@hlx`. Scope is a **pure swap** (`@cdx/x` → `@hlx/x`; `helix` binary
> unchanged). The Clarivate brand font was additionally **self-hosted** in
> `@hlx/clarivate-font` and bundled by every app, retiring the `@cdx` CDN `<link>`.
> Remaining `@cdx` strings are human-gated infra/registry (Open-Q 1–3), a
> cross-product example, and historical changelog/ADR text.
>
> **Gate gotchas (learning edges):** `rg` skips hidden dirs by default — the whole
> `.github/**` guidance tree was missed until re-scanned with `git grep` /
> `rg --hidden`; and escaped-slash alias regexes `/^@cdx\/x$/` (vite/vitest/
> storybook configs) don't contain the substring `@cdx/`.

## Inputs

| Field | Value |
|---|---|
| **TASK** | Swap the npm scope `@cdx` → `@hlx` across the cdx-next monorepo, one publishable package at a time, bottom-up by the dependency graph, so no `@hlx` package is built before its `@hlx` deps exist. |
| **OUTPUT** | Every `@cdx/*` package re-homed under `@hlx/*` — `package.json` `name`, intra-repo dep/peer keys, `ng-package.json` allow-lists, Sass `@use` specifiers, TS/JS imports, and `tsconfig.base.json` path aliases — with `main` clean and every change on `hlx/scope-migration`, one commit per package. graph.md / checks.md / progress.md kept current. |
| **CHECKS** | Per node: `rg -l '@cdx/' packages/<pkg>` returns **zero** across the publishable surface (excluding the frozen `deploy:cdn` CDN string — see Open questions) **AND** the package type-checks/builds (`nx build <pkg>`, or `tsc --noEmit` if an install is unavailable; Sass-only packages substitute manifest-JSON validity). Evidence recorded in checks.md. |
| **SOURCES** | `CDX-TO-HLX-MIGRATION.md` (the plan; §1.5 dependency graph, §2.2 old→new table, §3.2 order, §4 mechanics); the repo at `main` / `22.0.0-alpha.1`; `tsconfig.base.json` aliases; each `packages/*/package.json`, `project.json`, `ng-package.json`. |
| **SCOPE** | This repo only. Mechanical scope find-replace per package (name, imports, `@use`, dep keys, tsconfig alias). Do **not** touch consumer-app repos, `.npmrc`/registry, `Jenkinsfile`/CI, CDN/AWS/IAM, or `npm publish`/`deprecate` — those are human-gated (Open questions + HARD STOPS). Selector/`prefix`/`Cdx*`-identifier renames are a **separate** breaking step (§4.3) and are out of this graph's scope. |
| **LIMIT** | Stop at the node budget for this run (≈2–4 leaf nodes), at the first blocker, or when a gate cannot be made green without weakening it. |

## Principles applied

- **Bottom-up, reversible:** leaves first; a package node is enabled only once every package it imports is already on `@hlx`. Each node is one local commit on a branch; `main` stays recoverable.
- **One deterministic gate per node:** `rg`-zero (static) + build/type-check (mechanical). No model call decides a gate.
- **Deterministic steps are code, not model calls** (see Code nodes): the scope find-replace is pure text/AST substitution.
- **Pure scope swap:** sub-names, `hlx-*` classes, `--hlx-*` tokens, the `helix` binary, and `cdx-*` selectors are all left alone here; only the `@cdx/` specifier changes.
- **Fewer nodes:** one node per publishable package + one prep node + the private/build-only consumers, not a node per file.

## Nodes

Each node is one bounded job on one package: input (the package + its `@cdx/*`
refs), output (the same package on `@hlx`), one gate. Edges mean "consumes the
output of" = "waits on the `@hlx` rename of". The `files` count is
`rg -l '@cdx/' packages/<pkg>` at `main`.

### N0 — Prep: noise cleanup (deterministic, in-repo)
- **Does:** delete the stale `@cdx/demo` alias in `tsconfig.base.json` (points at a non-existent `packages/demo`); fix the `@cdx/rcx-analytics` example string in `docs-website/.../analytics.text-highlighted.ts`. No scope swap, no network.
- **Output:** a repo with no phantom `@cdx` aliases/strings to confuse the per-node `rg` gates.
- **Gate:** `rg -n '@cdx/demo' tsconfig.base.json` → 0; `rg -n '@cdx/rcx-analytics' packages/docs-website` → 0; `nx` graph still loads.
- **Edges in:** none. **Enables:** cleaner gates on N5/N18/N19 (not a hard dependency).

### Tier 0 — leaves (no intra-repo `@cdx` dep; any order)

Each: `name` `@cdx/x`→`@hlx/x`, rewrite any self-referential `@cdx/x` in source/docs, update its `tsconfig.base.json` alias if present.

- **N1 — colors** (files 1: `name`). Sass-only, published as raw `.scss`, no tsconfig alias. **Enables:** N15. **DONE.**
- **N2 — clarivate-font** (files 1: `name`; also a `deploy:cdn` `@cdx/...` CDN string → **frozen**, Open-Q 3). Sass/CDN leaf.
- **N3 — shared-branding** (files 1: `name`). Sass-only, no alias. **Enables:** N16. **DONE.**
- **N4 — helix-icons** (files 3: `name`, self-ref in `provide-helix-icons.ts`, README). tsconfig alias present.
- **N5 — ngx-translations** (files 1: `name`). tsconfig alias present. (`prefix: cdx` is selector work, out of scope.)
- **N7 — oti-snippet** (files 1: `name`). tsconfig alias present; real `@nx/js:tsc` build. **DONE.**
- **N8 — theme-snackbar** (files 1: `name`; `deploy:cdn` CDN string → **frozen**).
- **N9 — theme-highcharts** (files 1: `name`; `deploy:cdn` → **frozen**). tsconfig alias present.
- **N10 — theme-ag-grid** (files 1: `name`; `deploy:cdn` → **frozen**). tsconfig alias points at `dist/theme-ag-grid.mjs`.
- **N11 — theme-xng-breadcrumb** (files 1: `name`). tsconfig alias present. (`prefix: cdx`, `CdxBreadcrumbModule` → selector step, out of scope.)
- **N12 — eslint-config-helix** (files 3: `name`, `index.js` self + `@cdx/stylelint-config-helix` peer, README). **Edges in:** N13 (its stylelint peer).
- **N13 — stylelint-config-helix** (files 3: `name`, `index.js` self, README). **Enables:** N12.
- **N14 — helix-ai** (files 15: `cli.mjs` installed-major check array `@cdx/{theme-angular-material,colors,ngx-branding}`, `package.json`, README, and `payload/skills/**` consumer-facing docs referencing most `@cdx/*` packages). Largest leaf surface; bin `helix-ai`.

### Tier 1

- **N15 — theme-angular-material** (files 6: `package.json` name + `@cdx/colors` dep, `ng-package.json` `allowedNonPeerDependencies: ["@cdx/colors"]`, 4 `styles/theme/*.scss` `@use '@cdx/colors'`). **Edges in:** N1.

### Tier 2

- **N16 — ngx-branding** (files 6: `package.json` name + `@cdx/shared-branding` + `@cdx/theme-angular-material`, `src/bin/helix-check.js` hard-coded list, 4 component `.ts` importing `@cdx/theme-angular-material`). bin `helix-check`. **Edges in:** N3, N15.
- **N17 — ngx-authentication** (files 1: `package.json` name + `@cdx/theme-angular-material`). **Edges in:** N15.

### Tier 2.5 — corrected edge (plan discrepancy)

- **N6 — ngx-session-activity** (files 2: `name` + `src/lib/header-global-session-management/header-global-session-management.directive.ts` imports `@cdx/ngx-authentication`). tsconfig alias present. The plan (§1.5) lists this as a dependency-free **leaf**, but its source imports `@cdx/ngx-authentication` (an **undeclared** dep — not in its `package.json`). So its build gate needs `@hlx/ngx-authentication`. **Edges in:** N17. (Moved out of Tier 0.)

### Tier 3

- **N18 — ngx-analytics** (files 5: `package.json` name + `@cdx/ngx-branding`, 3 `src/lib/*.ts`, `vitest.config.mjs`). **Edges in:** N16.

### Tier 4 — private / build-only consumers (last; not published)

- **N19 — docs-website** (files 77; private). Pattern source + examples; re-run pattern/story generators after. **Edges in:** N4, N5, N6, N9, N10, N11, N15, N16, N17, N18.
- **N20 — ngx-reference-app** (files 10; private). **Edges in:** N1, N5, N6, N15, N16, N17, N18.
- **N21 — ngx-demo-app** (files 8; build-only, consumes via tsconfig paths). **Edges in:** N1, N5, N6, N15, N16, N17.
- **N22 — storybook** (files 9; build-only). Renders `Components/*` + `Patterns/*`. **Edges in:** N9, N10, N11, N15, N16.

## Code nodes (deterministic — never a model call)

Per-package scope find-replace (`name`, dep/peer keys, `@use '@cdx/…'`, TS/JS
`from '@cdx/…'`, `tsconfig.base.json` alias key) · the `rg`-zero counter · the
`nx build` / `tsc --noEmit` invocation · manifest-JSON validity check. Each is a
mechanical text/AST substitution or a tool run, not a judgement. If an install is
unavailable for a build gate, fall back to `tsc --noEmit` + the static `rg`-zero
gate and name the blocker.

## Edges / parallelism

```
N0 (prep, independent)

Tier 0 leaves (parallel): N1 N2 N4 N5 N7 N8 N9 N10 N11 N14   N13 ── N12
         │                                                          
         └── N1 ── N15 ─┬── N16 ─┬── N18
   N3 ─────────────────┘         │
                       N15 ── N17 ┴── N6 (corrected: N6 waits on N17)
Tier 4 consumers wait on the library nodes they import:
   N19 ← {N4,N5,N6,N9,N10,N11,N15,N16,N17,N18}
   N20 ← {N1,N5,N6,N15,N16,N17,N18}
   N21 ← {N1,N5,N6,N15,N16,N17}
   N22 ← {N9,N10,N11,N15,N16}
```
Parallel sets: all Tier 0 leaves after start (N12 waits on N13) · N15 after N1 ·
{N16, N17} after N15 (N16 also after N3) · N6 after N17 · N18 after N16 ·
Tier 4 last, after all their library edges.

## Gates (loop)

Order on every gate: **deterministic check first, node report second, model
confidence last.** The deterministic check is the two-part gate in CHECKS
(`rg`-zero + build/type-check). A failed gate opens the correction edge; do not
weaken a gate to get a pass. Full table in [checks.md](checks.md).

## Return paths

- **Correction edge:** a failed gate returns the unit to the node that made it, with the reason, the evidence (the `rg` hit or build error), and scope "fix this package only". **Capped at 3 attempts**, then it becomes a blocker in progress.md.
- **Learning edge:** an accepted result writes its rule back here — e.g. "ngx-session-activity is not a leaf (undeclared `@cdx/ngx-authentication` import)"; "CDN `deploy:cdn` strings are frozen under the hard stop and excluded from the `rg` gate" — so the next node and any downstream repo start from it.

## Completion checklist (from CHECKS)

- [ ] Every publishable package node's `name` + intra-repo refs are on `@hlx` and its commit exists on `hlx/scope-migration`.
- [ ] Every gate ran against the saved change (checks.md rows `pass`): `rg`-zero in the publishable surface **and** build/type-check green.
- [ ] `tsconfig.base.json` aliases all `@hlx/*`; stale `@cdx/demo` removed.
- [ ] No `@hlx` package depends on a `@cdx` package (bottom-up order held).
- [ ] `main` is unchanged; all work is on `hlx/scope-migration`.
- [ ] graph.md and progress.md match the nodes that actually ran.

If the limit or a blocker stops the run, return a partial status with the exact
nodes left (progress.md › Next action).

## Open questions (carried from the plan — human-gated, not in this graph)

1. **Registry mismatch (blocks publish, not rename).** `.npmrc` maps `@cdx` → Artifactory `.../npm-cdx/`, but `helix-check.js` requires `@cdx` → `.../npm-central/`. Before `@hlx` publishes, decide the `@hlx` registry home (`npm-hlx` vs reuse) and reconcile `npm-cdx` vs `npm-central`. **HARD STOP:** no `.npmrc`/registry edits in this run.
2. **Transition window vs flag-day.** Plan recommends a dual-publish deprecation window (publish both scopes from one tree, `npm deprecate @cdx/*`). Dual-publish, `npm publish`, and `npm deprecate` are **HARD STOPS** here — the branch only re-homes source; publishing strategy is a human decision.
3. **CDN / AWS infra.** `deploy:cdn` scripts embed `@cdx/...` destinations and the `cdx-cdn.digital-experience.clarivate.io` bucket; `Jenkinsfile` has `cdx` IAM role ARNs. **HARD STOP** (CDN/AWS/IAM, Jenkins): these `@cdx/` strings are **frozen** and excluded from the `rg` gate until infra signs off. **Update:** the clarivate-font CDN **`<link>`** has been fully retired — `@hlx/clarivate-font` now self-hosts the web-font binaries and every app bundles the CSS, so no app, `helix-check`, or guidance references the CDN font URL any more. What remains frozen here is only the `deploy:cdn` **publish** scripts (clarivate-font, theme-snackbar, theme-highcharts, theme-ag-grid) + the Jenkins stage that calls them; they are now dead for the font and should be removed together by whoever owns CI.
4. **Selector / prefix / identifier retirement.** `prefix: "cdx"` (5 `project.json`), `cdx-*` selectors, and `Cdx*` identifiers are a **separate, later** breaking step (plan §4.3, §6.6) — not part of the scope swap and not gated here.
