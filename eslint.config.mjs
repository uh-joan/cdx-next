import { fixupPluginRules } from '@eslint/compat';
import angularEslint from '@angular-eslint/eslint-plugin';
import nx from '@nx/eslint-plugin';
import { defineConfig, globalIgnores } from 'eslint/config';
import _import from 'eslint-plugin-import';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default defineConfig([
  globalIgnores(['**/node_modules']),
  {
    plugins: {
      '@nx': nx,
      '@angular-eslint': angularEslint,
      import: fixupPluginRules(_import),
      'simple-import-sort': simpleImportSort,
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],

    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          allow: [],

          depConstraints: [
            {
              onlyDependOnLibsWithTags: ['*'],
              sourceTag: '*',
            },
          ],

          enforceBuildableLibDependency: true,
        },
      ],

      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error',
    },
  },
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    files: ['**/*.ts'],

    rules: {
      '@angular-eslint/prefer-standalone': 'off',
      '@angular-eslint/component-selector': [
        'error',
        { type: 'element', prefix: 'cdx', style: 'kebab-case' },
      ],
      '@angular-eslint/directive-selector': [
        'error',
        { type: 'attribute', prefix: ['cdx', 'hlx'], style: 'kebab-case' },
      ],
    },
  },
]);
