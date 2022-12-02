const path = require('path');

console.log('Load File Inline JS Configuration');
module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, '../' + 'build'),
		filename: '[name].js',
	},
	module: {
		rules: [
			{
				test: /\.(png|jpe?g|gif)$/i,
				type:'asset/inline'
			},
		],
	},
};
