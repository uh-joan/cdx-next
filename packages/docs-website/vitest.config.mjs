import angular from '@analogjs/vite-plugin-angular';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

const projectRoot = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  root: projectRoot,
  resolve: {
    conditions: ['default'],
    tsconfigPaths: true,
    // The library package.json only declares sass subpath exports, so node
    // resolution has no "." entry — point the bare specifier at the sources.
    alias: [
      {
        find: /^@hlx\/ngx-branding$/,
        replacement: resolve(projectRoot, '../ngx-branding/src/index.ts'),
      },
      {
        find: /^@hlx\/helix-icons$/,
        replacement: resolve(projectRoot, '../helix-icons/src/index.ts'),
      },
      // Resolve from sources so tests don't depend on a prior library build.
      {
        find: /^@hlx\/theme-highcharts$/,
        replacement: resolve(projectRoot, '../theme-highcharts/src/index.ts'),
      },
    ],
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
