const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.tsx',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	devServer: {
		port: 3030,
	},
	plugins: [
		new HtmlWebpackPlugin({
			// create html file
			template: 'src/index.html',
			favicon: 'src/assets/favicon.ico',
			chunks: ['main'],
		}),
	]
};
