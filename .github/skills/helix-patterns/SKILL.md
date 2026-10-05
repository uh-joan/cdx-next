---
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
Each pattern is authored once as a `*.guide.md` beside its docs page and
generated into this skill. **Do not edit these files by hand** — edit the guide
and run `node tools/patterns/generate-pattern-ai.mjs`.

Prefer a documented pattern over inventing a composition. If a pattern names an
`hlx-*` class, it exists in the theme (CI checks this). Follow the Angular 22
baseline in [copilot-instructions](../../copilot-instructions.md): standalone,
signals, `@if`/`@for`/`@switch`, `inject()`, no `*ngIf`, no new NgModule.

## Catalog

| Pattern     | Status | Summary                                                                                                                                                                      | Reference                                  |
| ----------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| Dialogs     | stable | A modal for one decision or one short task. Open it through a named size preset, structure the body with the Material dialog slots, and put the primary action on the right. | [dialogs](./references/dialogs.md)         |
| Page states | beta   | Every region that loads data has four states — loading, loaded, empty and error. Design all four from the start so a screen never shows a blank box or a frozen spinner.     | [page-states](./references/page-states.md) |

## How to use

1. Find the pattern that matches the problem (a loading/empty/error region →
   **Page states**).
2. Open its reference for the rules, the components to use, and the
   anti-patterns to avoid.
3. Copy from the live examples in
   `packages/docs-website/src/app/pages/patterns/<id>/examples/` — they compile
   and are the canonical code.
