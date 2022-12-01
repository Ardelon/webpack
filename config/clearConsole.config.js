const path = require('path');
const WebpackClearConsole = require("webpack-clear-console").WebpackClearConsole;


console.log('Clear Console Configuration');
module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, '../' + 'build'),
		filename: 'main.js',
	},
  plugins:[new WebpackClearConsole()]
};
