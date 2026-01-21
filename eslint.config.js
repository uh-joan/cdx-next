// eslint.config.js
const nxPlugin = require('@nx/eslint-plugin');
const angularPlugin = require('@angular-eslint/eslint-plugin');
const angularTemplatePlugin = require('@angular-eslint/eslint-plugin-template');
const typescriptPlugin = require('@typescript-eslint/eslint-plugin');
const typescriptParser = require('@typescript-eslint/parser');
const importPlugin = require('eslint-plugin-import');
const simpleImportSortPlugin = require('eslint-plugin-simple-import-sort');
const angularTemplateParser = require('@angular-eslint/template-parser');

module.exports = [
  {
    ignores: [
      '!**/*',
      '**/dist',
      '**/node_modules',
      '**/coverage',
      '**/.angular',
    ],
  },
  {
    files: ['**/*.js', '**/*.mjs', '**/*.cjs'],
    plugins: {
      '@nx': nxPlugin,
      import: importPlugin,
      'simple-import-sort': simpleImportSortPlugin,
    },
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
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
  {
    files: ['**/*.ts'],
    plugins: {
      '@nx': nxPlugin,
      '@angular-eslint': angularPlugin,
      '@typescript-eslint': typescriptPlugin,
      import: importPlugin,
      'simple-import-sort': simpleImportSortPlugin,
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: ['./tsconfig.base.json'],
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      ...nxPlugin.configs.angular.rules,
      ...typescriptPlugin.configs.recommended.rules,
      ...angularPlugin.configs.recommended.rules,
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
          prefix: ['cdx', 'hlx', 'web', 'app'],
          style: 'camelCase',
          type: 'attribute',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  },
  {
    files: ['**/*.html'],
    plugins: {
      '@nx': nxPlugin,
      '@angular-eslint/template': angularTemplatePlugin,
    },
    languageOptions: {
      parser: angularTemplateParser,
    },
    rules: {
      ...nxPlugin.configs['angular-template'].rules,
      ...angularTemplatePlugin.configs.recommended.rules,
      ...angularTemplatePlugin.configs.accessibility.rules,
    },
  },
];
