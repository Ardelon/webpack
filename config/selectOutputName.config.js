const path = require('path');

console.log('Select Output Name Configuration');
module.exports = {
	entry: './src/selectOutputName.js',
	output: {
		path: path.resolve(__dirname, '../' + 'build'),
		filename: 'selectedOutputName(but different).js',
	},
};
