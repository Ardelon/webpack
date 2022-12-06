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
			template: 'src/htmlTemplate/default.html',
			filename: 'defaultTemplate.html',
		}),
		new HtmlWebpackPlugin({
			template: 'src/htmlTemplate/yetAnotherTemplate.html',
			filename: 'yetAnotherTemplate.html',
		}),
	],
};
