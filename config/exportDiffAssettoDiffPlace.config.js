const path = require('path');

console.log('Export Different Asset to Different Place Configuration');
module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, '../' + 'build'),
		filename: '[name].js',
		assetModuleFilename: 'images/[hash][ext][query]',
	},
	module: {
		rules: [
			{
				test: /\.png/,
				type: 'asset/resource',
				
			},
      {
        test: /\.svg/,
				type: 'asset/inline',
      }
		],
	},
};
