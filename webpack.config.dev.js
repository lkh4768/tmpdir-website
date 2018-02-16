const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StatsPlugin = require('stats-webpack-plugin');

const config = {
  name: 'client',
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/public/index.js',
    './src/public/index.scss',
  ],
  output: {
    path: path.resolve(__dirname, 'build/'),
    filename: '[name].min.js',
    publicPath: '/',
  },
  target: 'web',
  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ],
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          configFile: './.eslintrc-jsx.js',
        },
      },
      {
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract({
          use: [
            'css-loader',
            'sass-loader',
          ],
        }),
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: [
            'css-loader?importLoaders=1',
          ],
        }),
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true,
      },
    }),
    new StatsPlugin('webpack.stats.json', {
      source: false,
      modules: false,
    }),
    new ExtractTextPlugin({
      filename: '[name].min.css',
      allChunks: true,
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};

module.exports = config;
