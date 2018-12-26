const path = require('path');
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const configUtils = require('./webpack.config.utils.js');

const mode = 'development';
module.exports = {
  mode,
  name: 'client',
  entry: {
    uploadApp: [
      'webpack-hot-middleware/client?path=https://localhost/__webpack_hmr',
      path.resolve(__dirname, 'src/public/app/Upload/index.js'),
    ],
    downloadApp: [
      'webpack-hot-middleware/client?path=https://localhost/__webpack_hmr',
      path.resolve(__dirname, 'src/public/app/Download/index.js'),
    ],
  },
  output: {
    path: path.resolve(__dirname, 'build/'),
    filename: '[name].min.js',
    chunkFilename: '[name].[chunkhash].chunk.js',
    publicPath: '/',
  },
  target: 'web',
  resolve: configUtils.resolve,
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
          configFile: './.eslintrc-jsx.js',
        },
      },
      configUtils.babelClient,
      {
        test: /\.(scss)$/,
        exclude: /(node_modules)/,
        use: [
          require.resolve('style-loader'),
          configUtils.cssLoader(mode),
          configUtils.postCssLoader,
          configUtils.sassLoader,
        ],
      },
      configUtils.fileLoader,
    ],
  },
  optimization: {
    splitChunks: configUtils.optimizationSplitChunks,
    concatenateModules: true,
  },
  plugins: [
    new ManifestPlugin(),
    new ExtractTextPlugin({
      filename: '[name].min.css',
      allChunks: true,
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};
