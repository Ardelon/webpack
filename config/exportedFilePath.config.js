const path = require('path');

console.log('Exported File Path Configuration');
module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, '../' + 'build'),
		filename: '[name].js',
    assetModuleFilename: 'images/[hash][ext][query]'

	},
	module: {
		rules: [
			{
				test: /\.(png|jpe?g|gif)$/i,
				type:'asset/resource'
			},
		],
	},
};
