const path = require('path');

console.log('Select Output Name Configuration');
module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, '../' + 'build'),
		filename: 'selectedOutputName.js',
	},
};
