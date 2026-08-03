import { createRequire } from 'node:module';

import { resolve } from 'path';
import { defineConfig } from 'vite';

const require = createRequire(import.meta.url);
const dts = require('vite-plugin-dts');

const dtsPlugin = dts.default ?? dts;

export default defineConfig({
  plugins: [
    dtsPlugin({
      insertTypesEntry: true,
      rollupTypes: false,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/theme-highcharts.ts'),
      name: 'theme-highcharts',
      fileName: (_format) => `theme-highcharts.mjs`,
      formats: ['es'],
    },
    outDir: 'dist',
    minify: false,
    sourcemap: true,
    rolldownOptions: {
      external: ['highcharts'],
      output: {
        globals: {
          highcharts: 'Highcharts',
        },
      },
    },
  },
  define: {
    'process.env.NODE_ENV': '"production"',
  },
});
