const path = require('path');

module.exports = {
	entry: './src/todo.js',
	output: {
		path: path.join(__dirname, 'webpack_dist'),
		filename: 'bundle.js',
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loaders: ['babel'],
			exclude: /node_modules/
		}, {
			test: /\.css$/, // target css files
			loaders: ['style', 'css'], // use both loaders
			exclude: /node_modules/
		}]
	}
}