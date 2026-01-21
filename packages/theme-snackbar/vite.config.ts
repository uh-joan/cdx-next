import { dirname, resolve } from 'path';
import sass from 'sass';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    lib: {
      entry: './theme-snackbar.scss',
      name: 'theme-snackbar',
      formats: ['es'],
      fileName: () => 'theme-snackbar.js',
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
        implementation: sass,
        sassOptions: {
          loadPaths: [
            resolve(__dirname, '../../packages'),
            resolve(__dirname, '../../node_modules'),
          ],
        },
      },
    },
    postcss: {
      plugins: [require('autoprefixer')],
    },
  },
});
