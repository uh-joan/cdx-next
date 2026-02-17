import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import baseConfig from '../../eslint.config.mjs';

const compat = new FlatCompat({
  baseDirectory: dirname(fileURLToPath(import.meta.url)),
  recommendedConfig: js.configs.recommended,
});

export default [
  {
    files: [
      'src/lib/header/header.component.ts',
      'src/lib/footer/footer.component.ts',
      'src/lib/helix/header/helix-header.component.ts',
      'src/lib/helix/footer/helix-footer.component.ts',
    ],
    rules: {
      '@angular-eslint/component-selector': 'off',
    },
  },
  {
    ignores: ['**/dist'],
  },
  ...baseConfig,
  ...compat
    .config({
      extends: [
        'plugin:@nx/angular',
        'plugin:@angular-eslint/template/process-inline-templates',
      ],
    })
    .map((config) => ({
      ...config,
      files: ['**/*.ts'],
      rules: {
        ...config.rules,
        '@angular-eslint/component-selector': [
          'error',
          {
            prefix: ['cdx', 'web', 'app', 'hlx'],
            style: 'kebab-case',
            type: 'element',
          },
        ],
        '@angular-eslint/directive-selector': [
          'error',
          {
            prefix: ['cdx', 'web', 'app', 'hlx'],
            style: 'camelCase',
            type: 'attribute',
          },
        ],
        '@angular-eslint/prefer-standalone': 'off',
      },
    })),
  ...compat
    .config({
      extends: ['plugin:@nx/angular-template'],
    })
    .map((config) => ({
      ...config,
      files: ['**/*.html'],
      rules: {
        ...config.rules,
      },
    })),
];
