const rootMain = require('../../../.storybook/main-react');

module.exports = {
  ...rootMain,

  core: { builder: 'webpack5' },

  stories: [
    {
      directory: '../src/lib/',
      files: '**/*.stories.@(js|jsx|ts|tsx)',
    },
    {
      directory: '../../rcx-branding/src/lib/',
      files: '**/*.stories.@(js|jsx|ts|tsx)',
    },
  ],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false,
      },
    },
    '@nrwl/react/plugins/storybook',
  ],
  webpackFinal: async (config, { configType }) => {
    // apply any global webpack configs that might have been specified in .storybook/main.js
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, { configType });
    }

    // add your own webpack tweaks if needed

    return config;
  },

  staticDirs: ['../../rcx-demo-app/src'],
};
