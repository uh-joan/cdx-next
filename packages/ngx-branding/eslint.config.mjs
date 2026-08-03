import nx from '@nx/eslint-plugin';

import baseConfig from '../../eslint.config.mjs';

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
  ...nx.configs['flat/angular'],
  ...nx.configs['flat/angular-template'],
  {
    files: ['**/*.ts'],
    rules: {
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
  },
];
