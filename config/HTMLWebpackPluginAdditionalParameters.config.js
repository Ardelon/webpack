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
			template: 'src/htmlTemplate/additionalOptionTemplate.html',
		  additionalParam : {
        text1: 'text 1 string',
        text2: 'text 2 string'
      }
		})
	],
};
