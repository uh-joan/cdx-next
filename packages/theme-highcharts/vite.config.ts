import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    dts({
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
    rollupOptions: {
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
