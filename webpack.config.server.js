const path = require('path');
const nodeExternals = require('webpack-node-externals');
const configUtils = require('./webpack.config.utils.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const mode = process.env.NODE_ENV && process.env.NODE_ENV === 'development' ? 'development' : 'production';

const config = {
  mode,
  name: 'server',
  entry: {
    app: path.resolve(__dirname, 'src/server/app.js'),
  },
  output: {
    path: path.resolve(__dirname, 'build/'),
    filename: '[name].js',
    publicPath: '/',
  },
  target: 'node',
  node: {
    __filename: true,
    __dirname: true,
  },
  externals: [nodeExternals()],
  resolve: configUtils.resolve,
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
          configFile: './.eslintrc-server.js',
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.(sass|scss)$/,
        exclude: /(node_modules)/,
        use: [
          configUtils.cssLoader(mode),
          configUtils.postCssLoader,
          configUtils.sassLoader,
        ],
      },
      configUtils.fileLoader,
    ],
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, `src/server/config/${mode}.js`),
      to: path.resolve(__dirname, `build/config/${mode}.js`),
      toType: 'file',
    }]),
  ],
};

module.exports = config;
