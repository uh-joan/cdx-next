---
id: data-grid
title: Data grid wrapper
layer: pattern
status: stable
summary: >-
  One place to set up AG Grid the Helix way — modules and licence registered
  once, a Theming-API theme built from Helix tokens, shared column defaults, and
  column-state persistence.
use-when: >-
  Large, sortable, filterable or column-managed datasets — the results grid in a
  list page, an analytics table, anything beyond a simple mat-table.
avoid-when: >-
  A short, read-mostly list — use mat-table (see the List with filters pattern).
components:
  - AgGridAngular
  - matButton
hlx-classes: []
tokens:
  - surface-primary
  - surface-minimal
  - text-primary
  - text-secondary
  - border-secondary
  - icon-accent
  - border-radius-default
related-foundations: []
rules:
  - id: register-once
    text: >-
      Register AG Grid modules (and set the licence) once at bootstrap through a
      single provider — provideHelixAgGrid() — never ModuleRegistry.registerModules
      scattered across features.
  - id: theming-api
    text: >-
      Use the AG Grid v36 Theming API theme (helixGridTheme) bound with [theme],
      built from the --hlx-* custom properties so the grid follows the app theme.
      Do not ship the legacy CSS theme for new grids.
  - id: shared-defaults
    text: >-
      Use the shared HELIX_DEFAULT_COL_DEF for sort/resize/filter/flex defaults;
      set per-column overrides on the column, not by re-declaring the defaults.
  - id: persist-columns
    text: >-
      Persist column state (order, width, sort) per grid to localStorage — save on
      stateUpdated, restore on gridReady — with a Reset columns action.
  - id: compose-around
    text: >-
      The toolbar, applied-filter chips and loading/empty/error states around the
      grid come from the List with filters and Page states patterns; the grid is
      just the results surface.
anti-patterns:
  - id: register-scattered
    text: Repeating ModuleRegistry.registerModules / the licence key in several files.
  - id: legacy-css-theme
    text: Using the legacy ag-theme CSS override for a new grid instead of the Theming API.
  - id: css-override-theme
    text: Styling the grid with bespoke .ag-* CSS overrides instead of theme params.
  - id: no-persistence
    text: A column-managed grid that forgets the user's layout on reload.
examples:
  - helix
evidence:
  - off-x-ui: 846-line declarative data-grid directive with 12+ feature flags (too much); module + licence repeated
  - cmc-gui-docker: grid-persistence service + shared defaults + 13 cell renderers (the good parts) but a 145-line CSS theme override
  - cdx-next: ag-theme-helix.css is the AG Grid 32 theme-builder output while the repo is on AG Grid 36 (Theming API)
---

## Overview

AG Grid is the right tool for large, sortable, filterable, column-managed data.
The apps we audited each wired it up differently — off-x-ui grew an 846-line
grid directive with a dozen feature flags, both repeated module and licence
registration, and the theme is a legacy CSS override from the AG Grid 32 builder
while the repo is on v36. This pattern is the one Helix setup.

For a short, read-mostly list use a `mat-table` instead (see
[List with filters](/patterns/list-with-filters)); the toolbar, chips and
[Page states](/patterns/page-states) around the grid are the same either way.

## One setup, shared

```ts
// provideHelixAgGrid() — registered once in app.config.ts
import { provideHelixAgGrid } from '@cdx/theme-ag-grid';

export const appConfig: ApplicationConfig = {
  providers: [provideHelixAgGrid()],
};
```

```ts
// helixGridTheme is an AG Grid v36 Theming-API theme built from --hlx-* tokens
import { HELIX_DEFAULT_COL_DEF, helixGridTheme } from '@cdx/theme-ag-grid';

@Component({
  template: `
    <ag-grid-angular
      [theme]="theme"
      [rowData]="rows"
      [columnDefs]="columns"
      [defaultColDef]="defaultColDef"
      (gridReady)="onGridReady($event)"
      (stateUpdated)="saveColumns()"
    />`,
})
export class TrialsGrid {
  readonly theme = helixGridTheme;
  readonly defaultColDef = HELIX_DEFAULT_COL_DEF;
}
```

`provideHelixAgGrid`, `helixGridTheme` and `HELIX_DEFAULT_COL_DEF` ship from
`@cdx/theme-ag-grid` (the Theming-API theme supersedes the package's legacy CSS
theme for new grids).

## Persist the user's layout

Save the column state on `stateUpdated` and restore it on `gridReady`, keyed per
grid, wrapped in try/catch (storage can be unavailable). Offer a **Reset
columns** action. The example does this in full.

## Do

- Register modules and the licence once, via `provideHelixAgGrid()`.
- Use the Theming-API `helixGridTheme` and `HELIX_DEFAULT_COL_DEF`.
- Persist and reset column state per grid.
- Build the toolbar, chips and states from the composing patterns.

## Don't

- Scatter `ModuleRegistry.registerModules` or the licence key.
- Use the legacy CSS theme, or bespoke `.ag-*` overrides, for a new grid.
- Grow one grid component with feature-flag booleans — use config or variants.
- Let a column-managed grid forget the user's layout.
