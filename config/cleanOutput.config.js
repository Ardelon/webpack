const path = require('path');


console.log('Clear Output Configuration');
module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, '../' + 'build'),
		filename: 'main.js',
    clean:true
	},
};
