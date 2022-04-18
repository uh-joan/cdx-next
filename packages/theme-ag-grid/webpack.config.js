const autoprefixer = require('autoprefixer');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const svgToMiniDataURI = require('mini-svg-data-uri');

module.exports = {
  mode: 'production',
  name: 'theme-ag-grid-css-combined',
  entry: {
    'theme-ag-grid': './theme-ag-grid.scss',
  },
  devtool: 'source-map',
  output: {
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [autoprefixer()],
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              // Prefer Dart Sass
              implementation: require('sass'),

              // See https://github.com/webpack-contrib/sass-loader/issues/804
              webpackImporter: false,
              sassOptions: {
                includePaths: ['../../node_modules'],
              },
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        type: 'asset/inline',
        generator: {
          dataUrl: (content) => {
            return svgToMiniDataURI(content.toString());
          },
        },
      },
    ],
  },
  optimization: {
    minimizer: [`...`, new CssMinimizerPlugin()],
    minimize: true,
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].min.css' }),
    new RemoveEmptyScriptsPlugin(),
  ],
};
