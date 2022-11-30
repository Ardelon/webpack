const path = require('path');

console.log('Multiple Entry Multiple Output Configuration');
module.exports = {
	entry: { index: './src/index.js', secondIndex: './src/secondIndex.js' },
	output: {
		path: path.resolve(__dirname, '../' + 'build'),
		filename: '[name].js',
	},
};
