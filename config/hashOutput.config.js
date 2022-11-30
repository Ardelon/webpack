const path = require('path');

console.log('Hash Output Configuration');
module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, '../' + 'build'),
		filename: 'main[hash].js',
	},
};
