# @cdx/stylelint-config-helix

Shared [Stylelint](https://stylelint.io) config for apps consuming the Helix
design system. It extends `stylelint-config-standard-scss` and adds the rules the
design-system review found teams most often break:

- **`color-no-hex`** — use the Helix tokens (`var(--hlx-*)`) instead of hardcoded
  colours. Allowed only in token-definition files (`**/variables/**`, `*tokens*`,
  `*primitives*`, `*colors*`, `*palet*`, `css-vars*`).
- **`declaration-no-important`** — no `!important`.
- **`selector-disallowed-list`** — no `::ng-deep`, `.mat-mdc-*` or `.mdc-*`. Reach
  Material internals through `mat.*-overrides` or an `hlx-*` variant.

## Usage

```bash
npm i -D @cdx/stylelint-config-helix stylelint
```

```jsonc
// .stylelintrc.json
{
  "extends": ["@cdx/stylelint-config-helix"]
}
```

Override per file where a rule legitimately does not apply, e.g. a file that
defines design tokens:

```jsonc
{
  "extends": ["@cdx/stylelint-config-helix"],
  "overrides": [
    { "files": ["src/styles/tokens.scss"], "rules": { "color-no-hex": null } }
  ]
}
```

## Why these rules

They are the lint-enforceable findings from the Helix pattern work: across the
audited apps, hardcoded hex, `!important` and Material-internal overrides were the
most common divergences from the design system, and an AI-output measurement
showed these are exactly the rules a linter should hold both people and agents to.
Accessibility rules (labelled icon buttons, `aria-live`, real buttons over
clickable `div`s) belong in the companion ESLint/angular-eslint config.
