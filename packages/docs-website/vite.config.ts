import angular from '@analogjs/vite-plugin-angular';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: resolve(__dirname, 'src'),
  plugins: [
    angular({
      tsconfig: resolve(__dirname, 'tsconfig.app.json'),
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
