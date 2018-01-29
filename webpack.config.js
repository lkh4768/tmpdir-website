module.exports = {
	context: __dirname + '/src',
	entry: {
		server: './server.js'
	},
	output: {
		path: __dirname + '/build',
		filename: '[name].bundle.js'
	},
	module: {
		rules:[
			{
				test: /\.js$/,
				enforce: 'pre',
				loader: 'eslint-loader',
				exclude: /(node_modules|bower_components)/
			},
			{ 
				test: /\.sass$/, 
				loader: 'style!css!sass'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /(node_modules|bower_components)/,
				query: {
					cacheDirectory: true,
					presets: ['es2015', 'react']
				}
			}
		]
	}
};
