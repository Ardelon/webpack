const path = require('path');


console.log('Webpack Dev Server Headers Configuration');
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
    port : 9000,
    headers: {
      'X-Custom-Foo': 'bar',
    },
  }
};
