const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  mode: 'development',
  name: 'client',
  devtool: 'eval-source-map',
  entry: [
    'babel-polyfill',
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
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
    ],
    alias: {
      _components: path.resolve(__dirname, 'src/public/components/'),
      _containers: path.resolve(__dirname, 'src/public/containers/'),
      _utils: path.resolve(__dirname, 'src/public/utils/'),
      _static: path.resolve(__dirname, 'src/public/static/'),
      _entities: path.resolve(__dirname, 'src/public/entities/'),
      _data: path.resolve(__dirname, 'src/public/data/'),
    },
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
          configFile: './.eslintrc-jsx.js',
        },
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: [
            'es2015',
            'react',
          ],
        },
      },
      {
        test: /\.(sass|scss)$/,
        exclude: /(node_modules|bower_components)/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                importLoaders: 1,
                minimize: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                plugins: () => [autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9',
                  ],
                  flexbox: 'no-2009',
                })],
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                includePaths: [
                  './src/public',
                ],
              },
            },
          ],
        }),
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
  plugins: [
    new ManifestPlugin(),
    new ExtractTextPlugin({
      filename: '[name]-[hash].min.css',
      allChunks: true,
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};
