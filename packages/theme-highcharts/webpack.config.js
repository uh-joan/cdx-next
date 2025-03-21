import path from 'path';
import { fileURLToPath } from 'url';

// Ensure compatibility with ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './src/theme-highcharts.ts',
  output: {
    clean: true,
    filename: 'theme-highcharts.mjs', // Use .mjs for ES Module output
    path: path.resolve(__dirname, 'dist'),
    library: {
      type: 'module', // Ensures Webpack treats output as an ES Module
    },
    chunkFormat: 'module', // Fix Webpack error by enforcing ESM chunk format
  },
  experiments: {
    outputModule: true, // Required for ES Module output
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  mode: 'development',
  target: 'node', // Ensures compatibility with Node.js
};
