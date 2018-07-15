const path = require('path');
const nodeExternals = require('webpack-node-externals');
const autoprefixer = require('autoprefixer');

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
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      _components: path.resolve(__dirname, 'src/public/components/'),
      _containers: path.resolve(__dirname, 'src/public/containers/'),
      _common: path.resolve(__dirname, 'src/public/common/'),
      _static: path.resolve(__dirname, 'src/public/static/'),
      _entities: path.resolve(__dirname, 'src/public/entities/'),
      _data: path.resolve(__dirname, 'src/public/data/'),
      _modules: path.resolve(__dirname, 'src/server/modules/'),
      _routes: path.resolve(__dirname, 'src/server/routes/'),
      _config: path.resolve(__dirname, 'src/server/config/'),
      _app: path.resolve(__dirname, 'src/public/app/'),
      _pages: path.resolve(__dirname, 'src/public/pages/'),
    },
  },
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
        exclude: /(node_modules|bower_components)/,
        use: [
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
};

module.exports = config;
