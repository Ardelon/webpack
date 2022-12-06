const path = require('path');


console.log('Setup Webpack Dev Server Configuration');
module.exports = {
  mode:'none',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, '../' + 'build'),
		filename: 'main.js',
	},
  devServer : {
    static: {
      directory: path.join(__dirname, '../' + 'build'),
    },
    port : 9000
  }
};
