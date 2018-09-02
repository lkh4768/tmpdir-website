const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const configUtils = require('./webpack.config.utils.js');

const mode = 'production';
const config = {
  mode,
  name: 'client',
  entry: {
    uploadApp: [
			'babel-polyfill',
      path.resolve(__dirname, 'src/public/app/Upload/index.js'),
    ],
    downloadApp: [
			'babel-polyfill',
      path.resolve(__dirname, 'src/public/app/Download/index.js'),
    ],
  },
  output: {
    path: path.resolve(__dirname, 'build/'),
    filename: '[name]-[hash].min.js',
    publicPath: '/',
  },
  target: 'web',
  resolve: configUtils.resolve,
  module: {
    rules: [
      configUtils.babelClient,
      {
        test: /\.scss$/,
        exclude: /(node_modules)/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            configUtils.cssLoader(mode),
            configUtils.postCssLoader,
            configUtils.sassLoader,
          ],
        }),
      },
      configUtils.fileLoader,
    ],
  },
  optimization: {
    splitChunks: configUtils.optimizationSplitChunks,
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: true,
          ecma: 6,
          mangle: true
        },
        sourceMap: true
      })
    ],
  },
  plugins: [
    new ManifestPlugin(),
    new ExtractTextPlugin({
      filename: '[name]-[hash].min.css',
      allChunks: true,
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};

module.exports = config;
