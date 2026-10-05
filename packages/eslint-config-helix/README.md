# @cdx/eslint-config-helix

Shared ESLint (flat-config) **accessibility** rules for Angular templates in apps
consuming the Helix design system. It is the a11y companion to
[`@cdx/stylelint-config-helix`](../stylelint-config-helix).

It turns on the `@angular-eslint/eslint-plugin-template` rules the design-system
review and the AI-output measurement care about:

- `click-events-have-key-events`, `interactive-supports-focus`,
  `mouse-events-have-key-events` — no clickable `div`s; interactive elements are
  real controls, keyboard-reachable.
- `label-has-associated-control`, `alt-text`, `elements-content` — labelled
  controls, alt text, meaningful content.
- `role-has-required-aria`, `valid-aria`, `table-scope` — correct ARIA.
- `no-positive-tabindex`, `no-autofocus` (warn).

## Usage

```bash
npm i -D @cdx/eslint-config-helix
```

```js
// eslint.config.mjs — spread AFTER your Angular template config
import helixA11y from '@cdx/eslint-config-helix';

export default [
  ...baseConfig,
  ...nx.configs['flat/angular'],
  ...nx.configs['flat/angular-template'],
  ...helixA11y,
];
```

## Why these rules

The AI-output measurement found that a strong model already gets most template
accessibility right — but the pattern of clickable `div`s, missing labels and
status in non-announced regions still showed up in the apps we audited. These
rules are the floor that holds both people and weaker/faster models to the
accessible contract the AI assistant and other patterns describe.
