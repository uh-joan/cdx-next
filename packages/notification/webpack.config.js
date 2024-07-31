const path = require('path');
const { merge } = require('webpack-merge');

module.exports = (config) => {
  const baseConfig = {
    mode: 'production',
    entry: './packages/notification/src/index.ts',
    output: {
      filename: 'notification.[name].esm.js',
      path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
      extensions: ['.ts', '.js', '.scss'],
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(css|scss|sass)$/,
          use: [
            'lit-scss-loader',
            'extract-loader',
            {
              loader: 'css-loader',
              options: { url: false },
            },
            'sass-loader',
          ],
        },
      ],
    },
    optimization: {
      runtimeChunk: false,
    },
  };

  return merge(config, baseConfig);
};
