# Author Helix patterns once; generate AI guidance and check it in CI

- Status: proposed
- Deciders: Helix / CDX team
- Date: 2026-10-05
- Tags: documentation, patterns, ai, docs-website

Technical Story: Establish best-practice patterns and templates for Helix so
both developers and AI agents produce high-quality, consistent code.

## Context and Problem Statement

A review of three production Clarivate apps (`cortellis-reg-ai-app`, `off-x-ui`,
`cmc-gui-docker`) found each team independently rebuilding the same compositions
— app shell, page heading, filters, dialogs, loading/empty/error states, data
grids, export flows and an AI assistant — and working around the same gaps in
Helix (no CSS custom properties for tokens, no breakpoint tokens, no layout or
state components). Helix documents components but not the compositions, and the
AI guidance that exists (`copilot-instructions.md`, the `helix-ui-builder` agent,
two skills, and `tools/prompt-api-context/`) maintains the same class catalog by
hand in three places, which has already drifted from the theme.

How should we document patterns and templates so that the guidance a developer
reads and the guidance an AI agent applies come from one source and cannot drift?

## Decision Drivers

- One source of truth for humans and agents.
- Examples that compile and cannot silently rot.
- Guidance that stays matched to the installed theme version.
- Drift caught automatically, not by review.

## Considered Options

- A. Hand-written docs pages plus separately hand-written AI instruction files.
- B. Author each pattern once as a structured `*.guide.md`; the docs site renders
  it, and a generator produces the AI skill(s) from it; CI checks for drift.
- C. Keep AI guidance only in a design tool / external site, separate from code.

## Decision Outcome

Chosen option: **B**. Each pattern lives in one folder under
`packages/docs-website/src/app/pages/patterns/<id>/`:

- `<id>.guide.md` — YAML front-matter contract (id, status, use/avoid, rules,
  components, `hlx-classes`, tokens, examples, anti-patterns, evidence) plus prose.
- `<id>.ts` / `.html` — the docs page (Overview + Code tabs).
- `examples/*.example.ts` — real, compiled Angular examples rendered by the site.

`tools/patterns/generate-pattern-ai.mjs` reads every guide, validates it against
the live theme and repo, and generates `.github/skills/helix-patterns/`. Run with
`--check` (wired into `npm run lint` as `lint:patterns`) it fails when the
generated skill is stale or a guide names an `hlx-*` class that
`overrides.scss` does not define.

The pilot is the **Page states** pattern (loading / empty / error), which also
introduces one new component, `HelixEmptyStateComponent` in `@cdx/ngx-branding`.

### Positive Consequences

- Developers and agents read the same rules; the examples are compiled.
- CI rejects drift and invalid `hlx-*` references (it already catches the
  `hlx-breadcrumb-home` / `--hlx-surface-*` / `hlx-page` references in existing
  guidance).
- The format extends to templates (app shell, list+filters+grid, AI assistant).

### Negative Consequences

- Authors must keep front-matter accurate; the check enforces this but adds a step.
- Generated files are committed, so a regeneration must accompany each guide change.
- Shipping guidance inside the npm packages (an `ai/` folder) is deferred; until
  then consumer repos read guidance from this repo.

## Links

- Supersedes the hand-maintained catalogs in `tools/prompt-api-context/` and the
  `helix-components` skill (to be generated in a later phase).
- Related: `packages/docs-website/HELIX_DOCS_PARITY.md` (add a "Phase 7").
