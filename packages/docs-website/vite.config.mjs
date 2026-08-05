import angular from '@analogjs/vite-plugin-angular';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const rootDir = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  root: resolve(rootDir, 'src'),
  base: '/',
  publicDir: resolve(rootDir, 'src/assets'),
  resolve: {
    tsconfigPaths: true,
  },
  build: {
    outDir: resolve(rootDir, '../../dist/packages/docs-website'),
    emptyOutDir: true,
    rolldownOptions: {
      input: resolve(rootDir, 'src/index.html'),
    },
  },
  plugins: [
    angular({
      tsconfig: resolve(rootDir, 'tsconfig.app.json'),
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: [resolve(rootDir, '../../node_modules')],
      },
    },
  },
});
