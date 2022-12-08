const path = require('path');

console.log('Hash Output Configuration');
module.exports = {
	entry: './src/hashOutput.js',
	output: {
		path: path.resolve(__dirname, '../' + 'build'),
		filename: 'hashOutput[hash].js',
	},
};
