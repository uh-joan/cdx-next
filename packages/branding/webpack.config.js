const { mergeWithRules, merge } = require('webpack-merge');

module.exports = (config) => {
  const withLitCss = mergeWithRules({
    module: {
      rules: {
        test: 'match',
        use: 'replace',
        oneOf: 'replace',
      },
    },
  })(config, {
    module: {
      rules: [
        {
          test: /\.css$|\.scss$|\.sass$|\.less$|\.styl$/,
          use: [
            'lit-scss-loader',
            'extract-loader',
            { loader: 'css-loader', options: { url: false } },
            'sass-loader',
          ],
          oneOf: undefined,
        },
      ],
    },
  });

  return merge(withLitCss, {
    // TODO there is an open bug with the Nx webpack executor that ignores the project.json config for this flag
    // https://github.com/nrwl/nx/pull/7747/files
    optimization: {
      runtimeChunk: false,
    },
    output: {
      filename: 'branding.esm.js',
    },
  });
};
