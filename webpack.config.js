const path = require('path');
const nodeExternals = require('webpack-node-externals');

const rootDir = __dirname;
const outputDir = path.resolve(rootDir, 'dist/');

module.exports = {
	mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
	target: 'node',
	context: rootDir,
	entry: {
		app: './lib/app.ts',
	},
	output: {
		path: outputDir,
	},
	externals: [
		nodeExternals(),
	],
	module: {
		rules: [{
			test: /\.ts$/,
			exclude: [/\/node_modules/],
			use: {
				loader: 'ts-loader',
				options: {
					onlyCompileBundledFiles: true,
					compilerOptions: {
						outDir: outputDir,
					},
				},
			},
		}],
	},
};
