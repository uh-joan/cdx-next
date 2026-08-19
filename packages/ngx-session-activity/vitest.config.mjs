import angular from '@analogjs/vite-plugin-angular';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

const projectRoot = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  root: projectRoot,
  resolve: { conditions: ['default'], tsconfigPaths: true },
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
