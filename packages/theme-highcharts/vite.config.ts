import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/theme-highcharts.ts'),
      name: 'theme-highcharts',
      fileName: (format) => `theme-highcharts.mjs`,
      formats: ['es'],
    },
    outDir: 'dist',
    minify: false,
    sourcemap: true,
    rollupOptions: {
      external: [],
      output: {
        globals: {},
      },
    },
  },
  define: {
    'process.env.NODE_ENV': '"production"',
  },
});
