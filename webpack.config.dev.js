'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devtool: 'eval-source-map',
	entry: [
		path.join(__dirname, '/src/public/index.js'),
		path.join(__dirname, '/src/public/index.scss')
	],
	output: {
		path: path.join(__dirname + '/build/'),
		filename: '[name]-[hash].min.js',
		publicPath: '/'
	},
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/public/pages/index.ejs',
      filename: 'index.html'
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new ExtractTextPlugin({
      filename: 'build/[name]-[hash].min..css',
      allChunks: true
    })
  ],
  resolve: {
    extensions: [
      '.js','.jsx'
    ]
  },
	module: {
		rules:[
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          configFile: path.join(__dirname, ".eslintrc-jsx.js")
        }
      },
      /*
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          configFile: path.join(__dirname, ".eslintrc-es6.js")
        }
      },
      */
			{
				test: /\.ejs$/,
				loader: 'ejs-compiled-loader',
				options: {
					htmlmin: true,
					htmlminOptions:{
            removeCommnets: true
          }
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: [ 'css-loader?importLoaders=1' ]
        }),
      },
      {
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query: {
					cacheDirectory: true,
					presets: ['es2015', 'react']
				}
      },
    ]
	}
};
