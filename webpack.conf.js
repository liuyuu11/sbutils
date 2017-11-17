const webpack = require('webpack');
const pkg = require('./package.json');
module.exports = {
	//插件项
	//plugins: [commonsPlugin],
	//页面入口文件配置
	entry: {
		index: __dirname + '/src/index.js'
	},
	//输出配置
	output: {
		path: __dirname + '/dist/',
		filename: pkg.name + '.js',
		library: pkg.name,
		libraryTarget: "umd"
	},
	module: {
		rules: [{
			test: /\.js$/,
			loader: "babel-loader"
		}]
	},
};