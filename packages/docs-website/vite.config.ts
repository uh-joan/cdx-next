import angular from '@analogjs/vite-plugin-angular';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: resolve(__dirname, 'src'),
  base: '/',
  publicDir: resolve(__dirname, 'src/assets'),
  build: {
    outDir: resolve(__dirname, '../../dist/packages/docs-website'),
    emptyOutDir: true,
  },
  plugins: [
    angular({
      tsconfig: resolve(__dirname, 'tsconfig.app.json'),
      inlineStylesExtension: 'scss',
    }),
    nxViteTsPaths(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: [resolve(__dirname, '../../node_modules')],
      },
    },
  },
});
