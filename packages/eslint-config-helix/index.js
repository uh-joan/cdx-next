'use strict';

const templatePluginImport = require('@angular-eslint/eslint-plugin-template');
const templateParserImport = require('@angular-eslint/template-parser');

const templatePlugin = templatePluginImport.default ?? templatePluginImport;
const templateParser = templateParserImport.default ?? templateParserImport;

/**
 * Shared ESLint (flat-config) accessibility rules for Angular templates in apps
 * consuming the Helix design system. It turns on the angular-eslint template a11y
 * rules the design-system review and the AI-output measurement care about:
 * real interactive elements (not clickable `div`s), labelled controls, valid
 * ARIA, meaningful content, and no autofocus / positive tabindex.
 *
 * It is the accessibility companion to `@hlx/stylelint-config-helix`.
 *
 * Usage (app `eslint.config.mjs`), spread AFTER your Angular template config:
 *   import helixA11y from '@hlx/eslint-config-helix';
 *   export default [ ...baseConfig, ...nx.configs['flat/angular-template'], ...helixA11y ];
 */
module.exports = [
  {
    files: ['**/*.html'],
    languageOptions: {
      parser: templateParser,
    },
    plugins: {
      '@angular-eslint/template': templatePlugin,
    },
    rules: {
      '@angular-eslint/template/click-events-have-key-events': 'error',
      '@angular-eslint/template/interactive-supports-focus': 'error',
      '@angular-eslint/template/mouse-events-have-key-events': 'error',
      '@angular-eslint/template/label-has-associated-control': 'error',
      '@angular-eslint/template/alt-text': 'error',
      '@angular-eslint/template/elements-content': 'error',
      '@angular-eslint/template/role-has-required-aria': 'error',
      '@angular-eslint/template/valid-aria': 'error',
      '@angular-eslint/template/no-positive-tabindex': 'error',
      '@angular-eslint/template/table-scope': 'error',
      '@angular-eslint/template/no-autofocus': 'warn',
    },
  },
];
