const path = require('path');

console.log('Select Config File Configuration');
module.exports = {
	entry: './src/selectConfigFile.js',
	output: {
		path: path.resolve(__dirname, '../' + 'build'),
		filename: 'selectConfigFile.js',
	},
};
