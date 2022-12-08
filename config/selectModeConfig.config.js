const path = require('path');

console.log('Select Mode Config Configuration');
module.exports = {
	entry: './src/selectModeConfig.js',
	output: {
		path: path.resolve(__dirname, '../' + 'build'),
		filename: 'selectModeConfig.js',
	},
};
