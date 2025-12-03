// eslint.config.js
const nxPlugin = require('@nx/eslint-plugin');
const angularPlugin = require('@angular-eslint/eslint-plugin');
const angularTemplatePlugin = require('@angular-eslint/eslint-plugin-template');
const importPlugin = require('eslint-plugin-import');
const simpleImportSortPlugin = require('eslint-plugin-simple-import-sort');

module.exports = [
  {
    ignores: ['!**/*'],
  },

  // TypeScript + Angular files
  {
    files: ['**/*.ts'],
    plugins: {
      '@nx': nxPlugin,
      '@angular-eslint': angularPlugin,
      import: importPlugin,
      'simple-import-sort': simpleImportSortPlugin,
    },
    languageOptions: {
      parser: require('@typescript-eslint/parser'),
    },
    rules: {
      // Nx preset rules
      ...nxPlugin.configs.angular.rules,

      // Angular preset rules
      ...angularPlugin.configs.recommended.rules,

      // Your custom rules
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
        { prefix: 'cdx', style: 'kebab-case' },
      ],
      '@angular-eslint/directive-selector': [
        'error',
        { prefix: 'cdx', style: 'kebab-case' },
      ],
    },
  },

  // Angular HTML templates
  {
    files: ['**/*.html'],
    plugins: {
      '@nx': nxPlugin,
      '@angular-eslint/template': angularTemplatePlugin,
    },
    languageOptions: {
      parser: require('@angular-eslint/template-parser'),
    },
    rules: {
      ...nxPlugin.configs['angular-template'].rules,
      ...angularTemplatePlugin.configs.recommended.rules,
    },
  },
];
