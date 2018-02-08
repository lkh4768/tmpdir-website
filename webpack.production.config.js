'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StatsPlugin = require('stats-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    path.join(__dirname, '/src/public/index.js')
  ],
  output: {
    path: path.join(__dirname, '/build/'),
    filename: '[name]-[hash].min.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin('[name]-[hash].min.css'),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true
      }
    }),
    new StatsPlugin('webpack.stats.json', {
      source: false,
      modules: false
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  module: {
		rules:[
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
				test: /\.sass$/, 
				loader: 'style!css!sass'
			},
      {
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					cacheDirectory: true,
					presets: ['es2015', 'react']
				}
			},
      {
				test: /\.jsx?$/,
				loader: ['eslint-loader', 'babel-loader'],
				exclude: /bower_components/
			},
		]
  }
};
