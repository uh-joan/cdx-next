'use strict';

/**
 * Shared Stylelint config for apps consuming the Helix design system.
 *
 * Extends stylelint-config-standard-scss and adds the Helix rules that the
 * design-system review and the AI-output measurement found teams most often
 * break:
 *   - no hardcoded colours — use the Helix `--hlx-*` custom properties / tokens
 *     (allowed only in token-definition files, see overrides below);
 *   - no `!important`;
 *   - no reaching into Material internals (`::ng-deep`, `.mat-mdc-*`, `.mdc-*`)
 *     — use `mat.*-overrides` or an `hlx-*` variant instead.
 *
 * Usage (app `.stylelintrc.json`):
 *   { "extends": ["@hlx/stylelint-config-helix"] }
 */
module.exports = {
  extends: ['stylelint-config-standard-scss'],
  rules: {
    'color-no-hex': [
      true,
      {
        message:
          'Use a Helix token (var(--hlx-*)) instead of a hardcoded colour.',
      },
    ],
    'declaration-no-important': true,
    'selector-disallowed-list': [
      ['/::ng-deep/', '/\\.mat-mdc-/', '/\\.mdc-/'],
      {
        message:
          'Do not style Material internals (::ng-deep, .mat-mdc-*, .mdc-*). ' +
          'Use mat.*-overrides, an hlx-* variant, or a Helix token.',
      },
    ],
  },
  overrides: [
    {
      // Token-definition files are where raw colour values legitimately live.
      files: [
        '**/variables/**/*.scss',
        '**/*tokens*.scss',
        '**/*primitives*.scss',
        '**/*palet*.scss',
        '**/*colors*.scss',
        '**/css-vars*.scss',
      ],
      rules: {
        'color-no-hex': null,
      },
    },
  ],
};
