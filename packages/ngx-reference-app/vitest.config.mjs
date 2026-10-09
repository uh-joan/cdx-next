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
      '@hlx/ngx-analytics': resolve(
        workspaceRoot,
        'packages/ngx-analytics/src/index.ts',
      ),
      '@hlx/ngx-authentication': resolve(
        workspaceRoot,
        'packages/ngx-authentication/src/index.ts',
      ),
      '@hlx/ngx-branding': resolve(
        workspaceRoot,
        'packages/ngx-branding/src/index.ts',
      ),
      '@hlx/ngx-session-activity': resolve(
        workspaceRoot,
        'packages/ngx-session-activity/src/index.ts',
      ),
      '@hlx/ngx-translations': resolve(
        workspaceRoot,
        'packages/ngx-translations/src/index.ts',
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
    setupFiles: [`${projectRoot}/src/test-setup.ts`],
    include: ['src/**/*.spec.ts', 'src/**/*.test.ts'],
    server: { deps: { inline: true } },
  },
});
