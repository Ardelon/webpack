const path = require('path');

console.log('Multiple Entry One Output Configuration');
module.exports = {
	entry: ['./src/index.js', './src/secondIndex.js'],
	output: {
		path: path.resolve(__dirname, '../' + 'build'),
		filename: 'main.js',
	},
};
