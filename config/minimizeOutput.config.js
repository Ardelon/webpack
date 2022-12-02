const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

console.log('Minimize Output Configuration');
module.exports = {
  mode:'production',
	entry: ['./src/index.js'],
	output: {
		path: path.resolve(__dirname, '../' + 'build'),
		filename: '[name].js',
	}
};
