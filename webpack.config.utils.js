const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
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
      _app: path.resolve(__dirname, 'src/public/app/'),
      _pages: path.resolve(__dirname, 'src/public/pages/'),
      _modules: path.resolve(__dirname, 'src/server/modules/'),
      _routes: path.resolve(__dirname, 'src/server/routes/'),
      _config: path.resolve(__dirname, 'src/server/config/'),
      react: 'preact-compat',
      'react-dom': 'preact-compat',
    },
  },
  babelClient: {
    test: /\.jsx?$/,
    exclude: /(node_modules)/,
    loader: 'babel-loader',
    query: {
      presets: [
        'es2015',
        'react',
      ],
    },
  },
  cssLoader: mode => ({
    loader: require.resolve('css-loader'),
    options: {
      sourceMap: true,
      importLoaders: 1,
      minimize: true,
      modules: true,
      localIdentName: mode === 'production' || mode === 'stage' ? '[sha1:hash:hex:4]' : '[path][name]__[local]--[hash:base64:5]',
    },
  }),
  postCssLoader: {
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
  sassLoader: {
    loader: require.resolve('sass-loader'),
    options: {
      sourceMap: true,
      includePaths: [
        './src/public',
      ],
    },
  },
  fileLoader: {
    test: /\.(png|ico)$/,
    loader: 'file-loader',
    options: {
      name: '[name]-[hash].[ext]',
      outputPath: 'images/',
    },
  },
  optimizationSplitChunks: {
    name: false,
    cacheGroups: {
      commons: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendor',
        chunks: 'initial',
        enforce: true,
      },
    },
  },
};
