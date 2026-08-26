# Helix Theme Tokens

Source: `packages/theme-angular-material/styles/theme/helix/`

## Theme definitions (`helix.scss`)

Built with Angular Material's `mat.define-theme()`, combining a `theme-type`
(light/dark) with `primary`/`tertiary` (and sometimes `secondary`) palettes:

| SCSS variable | theme-type | primary palette | use case |
|---|---|---|---|
| `$helix-theme` | light | `paletes.$primary` | default app theme |
| `$helix-dark-theme` | dark | `paletes.$primary` | dark mode |
| `$helix-error-theme` | light | `paletes.$error` | error/negative states |
| `$helix-success-theme` | light | `paletes.$success` | success/positive states |
| `$helix-invert-theme` | light | `paletes.$secondary` (tertiary: `paletes.$primary`) | inverted surfaces (dark header/footer/tabs) |

Typography uses `use-system-variables: true` with `system-variables-prefix: sys`,
so components should reference `--mat-sys-*` CSS custom properties for type
scale rather than hardcoding font sizes.

## Design tokens (`variables/tokens.scss`, built on `primitives.scss`)

Group tokens by category — always prefer these over raw hex values:

- **Surface**: `$surface-primary`, `$surface-minimal`, `$surface-contrast`,
  `$surface-invert`, `$surface-info`, `$surface-positive`,
  `$surface-negative`, `$surface-warn`
- **Text**: `$text-primary`, `$text-secondary`, `$text-invert`
- **Border**: `$border-primary`, `$border-secondary`, `$border-contrast`,
  `$border-invert`, `$border-radius-default`
- **Icon**: `$icon-primary`, `$icon-secondary`, `$icon-invert`, `$icon-info`,
  `$icon-positive`, `$icon-negative`, `$icon-warn`, `$icon-accent`,
  `$icon-brand`, `$icon-disabled`
- **Component fills/states** (prefix `$components-*`): per-variant
  filled/outline/hover colors for primary, secondary, accent, negative,
  positive, info, warn, invert, and disabled states (e.g.
  `$components-accent-filled`, `$components-accent-filled-hover`,
  `$components-negative-outline`, `$components-disabled`).

## Guidance

- Use `tokens.scss` variables (or the `--mat-sys-*` runtime variables) in new
  SCSS — never hardcode a color that already has a token.
- Density/size is not a separate token set here; it's handled via the
  wrapper classes documented in
  [variant-classes.md](./variant-classes.md) (`hlx-btn-large`, `hlx-btn-small`,
  `hlx-btn-xsmall`, `hlx-chip-small`).
- When a component needs an inverted look (dark background), reach for
  `$helix-invert-theme` / the corresponding `hlx-*-invert` class rather than
  manually setting `$surface-invert`/`$text-invert` colors.
