const { fixupPluginRules } = require('@eslint/compat');
const angularEslintImport = require('@angular-eslint/eslint-plugin');
const nxImport = require('@nx/eslint-plugin');
const { defineConfig, globalIgnores } = require('eslint/config');
const importPluginImport = require('eslint-plugin-import');
const simpleImportSortImport = require('eslint-plugin-simple-import-sort');

const angularEslint = angularEslintImport.default ?? angularEslintImport;
const nx = nxImport.default ?? nxImport;
const importPlugin = importPluginImport.default ?? importPluginImport;
const simpleImportSort =
  simpleImportSortImport.default ?? simpleImportSortImport;

module.exports = defineConfig([
  globalIgnores(['**/node_modules']),
  {
    plugins: {
      '@nx': nx,
      '@angular-eslint': angularEslint,
      import: fixupPluginRules(importPlugin),
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
