const path = require('path');

console.log('Library Depend Configuration');
module.exports = {
  entry: {
    lodashVendor: { import: ['lodash'], runtime:'vendor' },
    app: {
      import: './src/libraryIndex.js',
      dependOn: ['lodashVendor'],
    },
  },
	output: {
		path: path.resolve(__dirname, '../' + 'build'),
    filename:'[name].js'
	},
};
