const path = require('path');


console.log('Webpack Dev Server Open Page Configuration');
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
    open:true
  }
};
