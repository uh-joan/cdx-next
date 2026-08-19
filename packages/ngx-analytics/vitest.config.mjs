import angular from '@analogjs/vite-plugin-angular';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

const projectRoot = fileURLToPath(new URL('.', import.meta.url));
const workspaceRoot = resolve(projectRoot, '../..');

export default defineConfig({
  root: projectRoot,
  resolve: {
    alias: {
      '@cdx/ngx-branding': resolve(
        workspaceRoot,
        'packages/ngx-branding/src/index.ts',
      ),
    },
    conditions: ['default'],
    tsconfigPaths: true,
  },
  plugins: [
    angular({
      tsconfig: `${projectRoot}/tsconfig.spec.json`,
      inlineStylesExtension: 'scss',
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [`${projectRoot}/src/test-setup.mjs`],
    include: ['src/**/*.spec.ts', 'src/**/*.test.ts'],
    server: {
      deps: {
        inline: true,
      },
    },
  },
});
