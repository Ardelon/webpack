const path = require('path');

console.log('Multiple Entry One Output Configuration');
module.exports = {
	entry: ['./src/selectConfigFile.js', './src/selectModeCLI.js'],
	output: {
		path: path.resolve(__dirname, '../' + 'build'),
		filename: 'multipleEntryOneOutput.js',
	},
};
