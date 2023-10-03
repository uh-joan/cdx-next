const rootMain = require('../../../.storybook/main-angular');

module.exports = {
  ...rootMain,

  core: { builder: 'webpack5' },

  stories: ['../src/lib/**/*.stories.@(js|jsx|ts|tsx)'],
  webpackFinal: async (config, { configType }) => {
    // apply any global webpack configs that might have been specified in .storybook/main.js
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, { configType });
    }

    return config;
  },
};
