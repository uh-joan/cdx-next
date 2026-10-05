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

| Pattern           | Status | Summary                                                                                                                                                                                                                 | Reference                                              |
| ----------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| AI assistant      | beta   | A conversational assistant: a thread of user and assistant message cards, a streaming answer announced to assistive technology, per-answer feedback, and a docked composer — built on the Helix AI avatar and gradient. | [ai-assistant](./references/ai-assistant.md)           |
| App shell         | beta   | The standard page chrome — Helix header with product name, primary navigation and global actions, a routed content area, and the footer — assembled once and driven by typed route data.                                | [app-shell](./references/app-shell.md)                 |
| Charts            | beta   | Build charts with the Helix Highcharts styled-mode theme so colour, type and axes come from the design system — never a hardcoded palette — and keep them accessible and readable.                                      | [charts](./references/charts.md)                       |
| Data grid wrapper | stable | One place to set up AG Grid the Helix way — modules and licence registered once, a Theming-API theme built from Helix tokens, shared column defaults, and column-state persistence.                                     | [data-grid](./references/data-grid.md)                 |
| Dialogs           | stable | A modal for one decision or one short task. Open it through a named size preset, structure the body with the Material dialog slots, and put the primary action on the right.                                            | [dialogs](./references/dialogs.md)                     |
| Entity detail     | beta   | A record page: an entity header, a summary card of the key facts, then an accordion of sections that load lazily and are disabled when they have nothing to show.                                                       | [entity-detail](./references/entity-detail.md)         |
| Export            | beta   | An export action: pick a format, then give asynchronous feedback through snackbars — preparing, then ready (or failed with retry) — so the user isn't left staring at a frozen button.                                  | [export](./references/export.md)                       |
| Form layout       | beta   | A single-column form of Material fields grouped into sections, with inline validation on blur, a required/optional convention, and a docked action bar — laid out with Helix spacing tokens.                            | [forms](./references/forms.md)                         |
| List with filters | beta   | A results page: a toolbar with search and filters, the applied filters shown as removable chips, and a results table that handles its own loading, empty and error states.                                              | [list-with-filters](./references/list-with-filters.md) |
| Page states       | beta   | Every region that loads data has four states — loading, loaded, empty and error. Design all four from the start so a screen never shows a blank box or a frozen spinner.                                                | [page-states](./references/page-states.md)             |

## How to use

1. Find the pattern that matches the problem (a loading/empty/error region →
   **Page states**).
2. Open its reference for the rules, the components to use, and the
   anti-patterns to avoid.
3. Copy from the live examples in
   `packages/docs-website/src/app/pages/patterns/<id>/examples/` — they compile
   and are the canonical code.
