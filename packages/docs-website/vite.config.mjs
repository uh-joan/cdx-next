import angular from '@analogjs/vite-plugin-angular';
import { readdirSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const rootDir = fileURLToPath(new URL('.', import.meta.url));
const pictogramsDir = resolve(rootDir, '../helix-icons/svg/pictograms');

// Serves the @hlx/helix-icons pictograms at /assets/helix-pictograms, the
// default path provideHelixIcons() loads them from.
function helixPictograms() {
  const prefix = '/assets/helix-pictograms/';
  return {
    name: 'helix-pictograms',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const file =
          req.url?.startsWith(prefix) && req.url.slice(prefix.length);
        if (!file || !/^[\w-]+\.svg$/.test(file)) return next();
        try {
          res.setHeader('Content-Type', 'image/svg+xml');
          res.end(readFileSync(resolve(pictogramsDir, file)));
        } catch {
          next();
        }
      });
    },
    generateBundle() {
      for (const file of readdirSync(pictogramsDir)) {
        this.emitFile({
          type: 'asset',
          fileName: `assets/helix-pictograms/${file}`,
          source: readFileSync(resolve(pictogramsDir, file)),
        });
      }
    },
  };
}

export default defineConfig({
  root: resolve(rootDir, 'src'),
  base: '/',
  publicDir: resolve(rootDir, 'src/assets'),
  server: { port: 4200 },
  resolve: {
    tsconfigPaths: true,
    alias: [
      {
        find: /^@hlx\/ngx-branding$/,
        replacement: resolve(rootDir, '../ngx-branding/src/index.ts'),
      },
      {
        find: /^@hlx\/helix-icons$/,
        replacement: resolve(rootDir, '../helix-icons/src/index.ts'),
      },
    ],
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
    helixPictograms(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: [resolve(rootDir, '../../node_modules')],
      },
    },
  },
});
