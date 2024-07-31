import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  core: { builder: '@storybook/builder-webpack5' },

  stories: [
    '../src/lib/**/*.stories.@(js|jsx|ts|tsx)',
    // '../../ngx-notification/src/lib/**/*.stories.@(js|jsx|ts|tsx)',
    '../../ngx-authentication/src/lib/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  docs: {
    docsMode: true,
    autodocs: true,
  },
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false,
      },
    },
  ],
};

export default config;
