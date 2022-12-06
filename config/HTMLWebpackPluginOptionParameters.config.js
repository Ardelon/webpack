const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, '../' + 'build'),
		filename: 'index.js',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/htmlTemplate/titleTemplate.html',
			title : 'Whatever the title is'
		})
	],
};
