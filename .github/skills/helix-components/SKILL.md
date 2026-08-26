---
name: helix-components
description: 'Use when writing or reviewing Angular templates/SCSS that consume the Helix design system on top of Angular Material (buttons, chips, badges, tabs, icons, table, header/footer, notifications, form fields). Provides the correct hlx-* variant/density/color classes, Material component API (matButton, appearance, color), and helix theme tokens, sourced from the docs-website component examples. Use for "which class do I use for a primary/accent/negative button", "how do I make a component small/large", "is this the right helix pattern", or before adding new custom CSS for an existing Material component.'
---

# Helix Components

Helix is a theme/utility layer on top of Angular Material. Components are still
plain Material components (`<button matButton>`, `<mat-chip>`, `mat-form-field`,
etc.) — Helix only adds **variant classes** (color), **density classes**
(size), and a **theme** (design tokens) on top. Never invent new component
markup or write bespoke CSS colors when a Helix class already exists.

## When to Use

- Choosing the right class/attribute for a color variant (primary, accent,
  negative/warn, invert) on a Material component.
- Choosing the right density/size variant (xsmall, small, default, large).
- Reviewing a PR/template for hardcoded colors or custom CSS that duplicates
  an existing Helix token or class.
- Adding a new example or usage of a component that already exists in
  `packages/docs-website`.

## Ground Truth: the docs-website examples

Before writing or reviewing helix/Material usage, check the live, working
examples — they are the canonical source of truth, not memory:

```
packages/docs-website/src/app/pages/components/<component>/examples/*.example.ts
```

Each example exports `htmlCode`/`tsCode`/`styleCode` strings actually rendered
in the doc site, so they are guaranteed to compile against the current theme.
If a pattern isn't demonstrated there, don't assume it exists — check
[helix.scss](../../../packages/theme-angular-material/styles/theme/helix/helix.scss)
and [tokens.scss](../../../packages/theme-angular-material/styles/theme/helix/variables/tokens.scss)
or ask before inventing new classes.

## Procedure

1. Identify the Material component involved (button, chip, tabs, icon, table, …).
2. Open `packages/docs-website/src/app/pages/components/<component>/examples/` and
   find the example matching the desired variant (color, size, state).
3. Reuse the exact class names/attributes from that example — see
   [variant-classes.md](./references/variant-classes.md) for the full catalog
   extracted from all examples.
4. For color/spacing tokens (not component classes), check
   [theme-tokens.md](./references/theme-tokens.md) instead of hardcoding hex
   values.
5. Follow the [good practices](#good-practices) below and the repo's Angular
   guidelines (signals, standalone, `inject()`, no `CommonModule`).

## Core Concepts

### Color variants (`hlx-*`)

Material components default to the theme's primary look. Helix adds a class
to switch the color variant — the class naming is **not consistent across
components** (this is a known quirk), so always confirm against
[variant-classes.md](./references/variant-classes.md):

- Buttons: `hlx-btn-accent`, `hlx-btn-negative` (default/no class = primary)
- Chips: `hlx-primary-chip`, `hlx-accent-chip`, `hlx-negative-chip`, `hlx-warn-chip`
- Icons: `hlx-icon-primary`, `hlx-icon-accent`
- Tabs: `hlx-tab-invert`
- Snackbar action button: `hlx-button-invert`
- Badge: `hlx-badge-primary`

### Density / size variants

Size is controlled by a **wrapper class** around the group of components, not
a per-button modifier:

- `hlx-btn-xsmall`, `hlx-btn-small`, `hlx-btn-large` on a container div around
  `<button matButton>` elements (no class = default size).
- `hlx-chip-small` on the `<mat-chip-set>` for compact chips.
- These are **optional utilities** — the consuming application decides
  whether to opt into a non-default density; don't force one.

### Material native API (still required)

Helix does not replace Material's own API — combine both:

- Buttons use `matButton="filled"` or `matButton="outlined"` (not the legacy
  `mat-raised-button`/`mat-stroked-button` directives).
- Form fields use `appearance="fill"` or `appearance="outline"` on
  `<mat-form-field>`.
- Icon position uses `iconPositionEnd` attribute on `<mat-icon>`.

### Theme tokens

The active theme is built once in
[helix.scss](../../../packages/theme-angular-material/styles/theme/helix/helix.scss)
via `mat.define-theme(...)` with variants: `$helix-theme` (light),
`$helix-dark-theme` (dark), `$helix-error-theme`, `$helix-success-theme`,
`$helix-invert-theme`. Raw design values (colors, surfaces, borders, icons)
live as SCSS variables in
[tokens.scss](../../../packages/theme-angular-material/styles/theme/helix/variables/tokens.scss)
(built from `primitives.scss`). See
[theme-tokens.md](./references/theme-tokens.md) for the categorized list.

Structural/branded components (`<header hlx-header>`, `<footer hlx-footer>`,
`<hlx-notification>`) are Helix components, not Material — use their inputs
(`branded()`, `branded(false)`, link groups) instead of custom markup.

## Good Practices

- Prefer an existing `hlx-*` variant class over new custom CSS for
  color/state changes.
- Prefer Material's native attribute API (`matButton`, `appearance`, `color`)
  over deprecated directives.
- Never hardcode hex/rgb colors in component styles — reference a token from
  `tokens.scss` or a Helix class instead.
- When adding a new docs-website example, follow the existing example file
  shape (`htmlCode`, `tsCode`, `InputViewerComponent` export) so it stays a
  reliable source of truth for this skill.
- If no example demonstrates the variant you need, say so explicitly rather
  than guessing a class name.

## Anti-patterns

- ❌ Writing `background-color: #6b21a8` instead of using `hlx-btn-accent` /
  an accent token.
- ❌ Using `mat-raised-button`/`mat-flat-button` directives instead of
  `matButton="filled"`.
- ❌ Applying a size class per-element (e.g. `class="hlx-btn-small"` on a
  single `<button>`) instead of wrapping the group in the container class.
- ❌ Inventing an `hlx-*` class name that doesn't appear in
  [variant-classes.md](./references/variant-classes.md) or the codebase.
