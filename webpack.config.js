'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
	entry: [
		path.join(__dirname, '/src/public/index.js')
	],
	output: {
		path: path.join(__dirname + '/build/'),
		filename: '[name].js',
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
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
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
				test: /\.jsx$/,
				enforce: 'pre',
				loader: 'eslint-loader',
				exclude: /(node_modules|bower_components)/
			},
			{ 
				test: /\.sass$/, 
				loader: 'style!css!sass'
			},
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /(node_modules|bower_components)/,
				query: {
					cacheDirectory: true,
					presets: ['es2015', 'react']
				}
			},
		]
	}
};