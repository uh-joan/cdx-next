import { copyFileSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    lib: {
      entry: './theme-ag-grid.scss',
      name: 'theme-ag-grid',
      formats: ['es'],
      fileName: () => 'theme-ag-grid.js',
    },
    outDir: 'dist',
    minify: 'terser',
    sourcemap: true,
    rollupOptions: {
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
    {
      name: 'theme-ag-grid-css-combined',
      apply: 'build',
      enforce: 'post',
      generateBundle() {
        const src = './ag-theme-helix.css';
        const dest = './dist/ag-theme-helix.css';
        try {
          copyFileSync(src, dest);
        } catch (err) {
          console.warn(`Could not copy ${src} to ${dest}:`, err);
        }
      },
    },
  ],
});
