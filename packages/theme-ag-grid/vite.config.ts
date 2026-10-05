import { createRequire } from 'node:module';

import { copyFileSync, mkdirSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const dts = require('vite-plugin-dts');
const dtsPlugin = dts.default ?? dts;

export default defineConfig({
  build: {
    lib: {
      entry: './theme-ag-grid.ts',
      name: 'theme-ag-grid',
      formats: ['es'],
      fileName: () => 'theme-ag-grid.mjs',
    },
    outDir: 'dist',
    minify: 'terser',
    sourcemap: true,
    rollupOptions: {
      // Peers resolved by the consumer, not bundled into the theme.
      external: ['ag-grid-community', '@angular/core'],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return '[name].min.css';
          }
          return '[name][extname]';
        },
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: [resolve(__dirname, '../../node_modules')],
      },
    },
  },
  plugins: [
    dtsPlugin({
      insertTypesEntry: true,
      rollupTypes: false,
      entryRoot: __dirname,
      include: ['src/**/*.ts', 'theme-ag-grid.ts'],
      tsconfigPath: resolve(__dirname, 'tsconfig.json'),
    }),
    {
      name: 'theme-ag-grid-css-combined',
      apply: 'build',
      enforce: 'post',
      generateBundle() {
        const src = resolve(__dirname, 'ag-theme-helix.css');
        const outDir = resolve(__dirname, 'dist');
        const dest = resolve(outDir, 'ag-theme-helix.css');

        try {
          mkdirSync(outDir, { recursive: true });
          copyFileSync(src, dest);
        } catch (err) {
          console.warn(`Could not copy ${src} to ${dest}:`, err);
        }
      },
    },
  ],
});
