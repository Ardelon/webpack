const path = require('path');

console.log('Library Depend Configuration');
module.exports = {
  entry: {
    lodashVendor: { import: ['lodash'] },
    librarySharedOne: {
      import: './src/libraryDepend.js',
      dependOn: ['lodashVendor'],
    },
    librarySharedTwo : {
      import: './src/libraryShared.js',
      dependOn: ['lodashVendor'],
    }
  },
	output: {
		path: path.resolve(__dirname, '../' + 'build'),
    filename:'[name].js'
	},
};
