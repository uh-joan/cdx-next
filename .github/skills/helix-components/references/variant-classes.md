# Helix Variant/Density Class Catalog

Extracted from
`packages/docs-website/src/app/pages/components/**/examples/*.example.ts`. Treat
this as a starting index — always confirm against the live example file before
using a class, since new components/variants may be added later.

| Component     | Class / attribute                                          | Purpose                                                     | Example file                                              |
| ------------- | ---------------------------------------------------------- | ----------------------------------------------------------- | --------------------------------------------------------- |
| Button        | `hlx-btn-accent`                                           | accent color variant                                        | `buttons/examples/buttons-flat-default.example.ts`        |
| Button        | `hlx-btn-negative`                                         | negative/destructive color variant                          | `buttons/examples/buttons-flat-default.example.ts`        |
| Button        | `hlx-btn-primary`                                          | explicit primary color variant                              | `dialog/examples/dialog.example.ts`                       |
| Button        | `hlx-btn-xsmall` (wrapper)                                 | xsmall density for a group of buttons                       | `buttons/examples/buttons-xsmall-size.example.ts`         |
| Button        | `hlx-btn-small` (wrapper)                                  | small density                                               | `buttons/examples/buttons-small-size.example.ts`          |
| Button        | `hlx-btn-large` (wrapper)                                  | large density                                               | `buttons/examples/buttons-large-size.example.ts`          |
| Button        | `matButton="filled"`                                       | Material filled button API                                  | `buttons/examples/buttons-flat-default.example.ts`        |
| Button        | `matButton="outlined"`                                     | Material outlined/stroked button API                        | `buttons/examples/buttons-stroked-default.example.ts`     |
| Badge         | `hlx-badge-primary`                                        | primary badge color                                         | `badge/examples/badges-color.example.ts`                  |
| Breadcrumbs   | `hlx-breadcrumb-home`                                      | home icon styling                                           | `breadcrumbs/examples/breadcrumbs.example.ts`             |
| Button toggle | `hlx-button-toggle-container`                              | wrapper for toggle group styling                            | `button-toggle/examples/button-toggle-default.example.ts` |
| Chips         | `hlx-primary-chip`                                         | primary chip color                                          | `chips/examples/chips-color.example.ts`                   |
| Chips         | `hlx-accent-chip`                                          | accent chip color                                           | `chips/examples/chips-color.example.ts`                   |
| Chips         | `hlx-negative-chip`                                        | negative chip color                                         | `chips/examples/chips-density.example.ts`                 |
| Chips         | `hlx-warn-chip`                                            | warn chip color                                             | `chips/examples/chips-density.example.ts`                 |
| Chips         | `hlx-chip-small` (on `mat-chip-set`)                       | compact density                                             | `chips/examples/chips-density.example.ts`                 |
| Footer        | `<footer hlx-footer>`                                      | Helix footer component (attribute selector, not a class)    | `footer/examples/footer-basic.example.ts`                 |
| Footer        | `branded` / `branded()`                                    | show/hide branded footer variant                            | `footer/examples/footer-branded.example.ts`               |
| Header        | `<header hlx-header>`                                      | Helix header component                                      | `header/examples/header-basic.example.ts`                 |
| Header        | `branded(false)`                                           | unbranded header variant                                    | `header/examples/header-unbranded.example.ts`             |
| Highcharts    | `highcharts.hlx-highcharts-styled-mode-theme` (SCSS mixin) | applies Helix styled-mode theme to charts                   | `highcharts/examples/highchart-styled.example.ts`         |
| Icons         | `hlx-icon-primary`                                         | primary icon color                                          | `icons/examples/icon-colors.example.ts`                   |
| Icons         | `hlx-icon-accent`                                          | accent icon color                                           | `icons/examples/icon-colors.example.ts`                   |
| Notifications | `<hlx-notification>`                                       | Helix notification component (not a class)                  | `notifications/examples/notification.example.ts`          |
| Snackbar      | `hlx-btn-invert`                                          | inverted button styling                                     | `snackbar/examples/snackbar.example.ts`                   |
| Table         | `hlx-table` (combine with `mat-elevation-z8`)              | Helix table styling on top of Material table                | `table/examples/table-simple.example.ts`                  |
| Tabs          | `hlx-tab-invert`                                           | inverted color tab variant                                  | `tabs/examples/tabs-inverted.color.example.ts`            |
| Form field    | `appearance="fill"` / `appearance="outline"`               | Material form-field appearance (no Helix override observed) | `form-field/examples/form-field-appearences.ts`           |

## Components with no Helix override (plain Material API only)

No `hlx-*` class or variant was found in these components' docs-website examples
— use standard Angular Material attributes/inputs (`color="primary"`,
`appearance="fill"`, etc.) and don't invent a Helix class for them:

`autocomplete`, `card`, `checkbox`, `data-grid`, `date-picker`, `divider`,
`expansion-panel`, `list`, `menu`, `paginator`, `progress-bar`,
`progress-spinner`, `radio-button`, `select`, `sidenav`, `skeleton-loader`,
`slide-toggle`, `slider`, `sort-header`, `stepper`, `text-area`, `text-input`,
`time-picker`, `toolbar`, `tooltips`, `tree`.

`dialog` has no dialog-specific Helix class either — its example only reuses the
button variant class (`hlx-btn-primary`) on its action button.

If a Helix variant is later added for one of these, update this list.

## Notes

- Color-variant class naming is inconsistent across components (`hlx-btn-accent`
  vs `hlx-accent-chip` vs `hlx-icon-accent`) — don't assume a pattern
  generalizes to a new component without checking its own examples.
- Density/size classes (`hlx-btn-*`, `hlx-chip-small`) are **optional
  utilities**, not a mandatory system: the consuming application decides whether
  to opt into a non-default density. They're applied to a wrapper element, not
  the individual component, in every example observed.
- `hlx-*` used as an element attribute (`hlx-footer`, `hlx-header`) or tag name
  (`hlx-notification`, `hlx-page`) denotes an actual Helix component/directive,
  not a utility class.
