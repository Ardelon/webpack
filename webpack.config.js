const path = require('path');

const defaultConfig = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'foo.bundle.js',
	},
};
console.log('selam');
module.exports = defaultConfig