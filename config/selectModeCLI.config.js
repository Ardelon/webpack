const path = require('path');

console.log('Select Mode CLI Configuration');
module.exports = {
	entry: './src/selectModeCLI.js',
	output: {
		path: path.resolve(__dirname, '../' + 'build'),
		filename: 'selectModeCLI.js',
	},
};
