const path = require('path');
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: 'development',
  name: 'client',
  devtool: 'eval-source-map',
  entry: {
    uploadApp: [
      'webpack-hot-middleware/client?path=http://localhost:3001/__webpack_hmr',
      './src/public/app/Upload/index.js',
    ],
    downloadApp: [
      'webpack-hot-middleware/client?path=http://localhost:3001/__webpack_hmr',
      './src/public/app/Download/index.js',
    ],
  },
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
      _common: path.resolve(__dirname, 'src/public/common/'),
      _static: path.resolve(__dirname, 'src/public/static/'),
      _entities: path.resolve(__dirname, 'src/public/entities/'),
      _data: path.resolve(__dirname, 'src/public/data/'),
      _modules: path.resolve(__dirname, 'src/server/modules/'),
      _app: path.resolve(__dirname, 'src/public/app/'),
      _pages: path.resolve(__dirname, 'src/public/pages/'),
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
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              sourceMap: true,
              importLoaders: 1,
              minimize: true,
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
            },
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              ident: 'postcss',
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
            loader: require.resolve('sass-loader'),
            options: {
              sourceMap: true,
              includePaths: [
                './src/public',
              ],
            },
          },
        ],
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
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'all',
          name: 'vendor',
        },
      },
    },
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].min.css',
      allChunks: true,
    }),
    new ManifestPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};
