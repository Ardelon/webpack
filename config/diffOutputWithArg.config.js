const path = require('path');

console.log('Different Output Selection With Argument Configuration');

const config = {
	entry: './src/index.js',
};

const build = {
	filename: 'main.js',
	path: path.resolve(__dirname, '../' + 'build'),
};

const distribute = {
	filename: 'distribute.js',
	path: path.resolve(__dirname, '../' + 'dist'),
};

module.exports = (env, argv) => {
	if (argv.mode === 'development') {
		config.output = build;
	} else {
		config.output = distribute;
	}

	return config;
};
