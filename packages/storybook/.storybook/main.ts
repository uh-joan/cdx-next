import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import type { StorybookConfig } from '@analogjs/storybook-angular';
import { mergeConfig, type UserConfig } from 'vite';

const configDir = fileURLToPath(new URL('.', import.meta.url));
const packagesDir = resolve(configDir, '../..');

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.ts'],
  core: { disableTelemetry: true },
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y'],
  framework: {
    name: '@analogjs/storybook-angular',
    options: {},
  },
  async viteFinal(viteConfig: UserConfig) {
    return mergeConfig(viteConfig, {
      resolve: {
        // Use library sources so stories don't depend on a prior build.
        alias: [
          {
            find: /^@hlx\/ngx-branding$/,
            replacement: resolve(packagesDir, 'ngx-branding/src/index.ts'),
          },
          {
            find: /^@hlx\/theme-highcharts$/,
            replacement: resolve(packagesDir, 'theme-highcharts/src/index.ts'),
          },
          {
            find: /^@hlx\/theme-angular-material$/,
            replacement: resolve(
              packagesDir,
              'theme-angular-material/src/index.ts',
            ),
          },
        ],
      },
      // Pre-bundling highcharts-angular with esbuild strips the Angular input
      // metadata off its standalone component (NG0303 on [Highcharts]); let the
      // Angular Vite plugin process it as source instead.
      optimizeDeps: {
        exclude: ['highcharts-angular'],
      },
    });
  },
};

export default config;
