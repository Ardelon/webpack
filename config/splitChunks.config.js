const path = require('path');

console.log('Split Chunks Configuration');
module.exports = {
	entry: './src/splitChunks.js',
	output: {
		path: path.resolve(__dirname, '../' + 'build'),
		filename: '[name].js',
	},
  optimization:{
    splitChunks : {
      chunks : 'all',
      minChunks : 1,
      maxSize : 50
    }
  }
};
