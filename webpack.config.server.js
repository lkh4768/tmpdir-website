const path = require('path');
const nodeExternals = require('webpack-node-externals');

const config = {
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
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
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
        test: /\.(png|ico)$/,
        loader: 'file-loader',
        options: {
          name: '[name]-[hash].[ext]',
          outputPath: 'images/',
        },
      },
    ],
  },
};

module.exports = config;
