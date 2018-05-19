const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StatsPlugin = require('stats-webpack-plugin');
const autoprefixer = require('autoprefixer');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = {
  mode: 'production',
  name: 'client',
  devtool: 'eval-source-map',
  entry: [
    'babel-polyfill',
    './src/public/app/Upload/index.js',
    './src/public/app/Upload/index.scss',
    './src/public/app/Download/index.js',
    './src/public/app/Download/index.scss',
  ],
  output: {
    path: path.join(__dirname, 'build/'),
    filename: '[name]-[hash].min.js',
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
      _modules: path.resolve(__dirname, 'src/server/modules/'),
      _app: path.resolve(__dirname, 'src/public/app/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: { importLoaders: 1 },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [autoprefixer()],
              },
            },
            'sass-loader',
          ],
        }),
      },
      {
        test: /\.(png|ico)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'images/',
          name: '[name].[ext]?[hash]',
        },
      },
    ],
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: false,
          ecma: 6,
          mangle: true
        },
        sourceMap: true
      })
    ]
  },
  plugins: [
    new ManifestPlugin(),
    new ExtractTextPlugin({
      filename: '[name]-[hash].min.css',
      allChunks: true,
    }),
  ],
};

module.exports = config;
