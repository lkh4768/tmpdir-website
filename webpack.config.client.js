const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const config = {
  mode: 'production',
  name: 'client',
  devtool: 'eval-source-map',
  entry: {
    uploadApp: [
			'babel-polyfill',
      './src/public/app/Upload/index.js',
      './src/public/app/Upload/style.scss',
    ],
    downloadApp: [
			'babel-polyfill',
      './src/public/app/Download/index.js',
      './src/public/app/Download/style.scss',
    ],
  },
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
      _pages: path.resolve(__dirname, 'src/public/pages/'),
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
              options: {
                importLoaders: 1,
                minimize: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [autoprefixer()],
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
              options: { sourceMap: true },
            },
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
		splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'all',
          name: 'vendor',
        },
      },
    },
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
