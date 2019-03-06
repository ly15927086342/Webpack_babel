const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry:{
		// task:['@babel/polyfill','./src/js/task.js'],/*修改引用的js名*/
		// workspace:['@babel/polyfill','./src/js/workspace.js'],
		// login:['@babel/polyfill','./src/js/login.js']
	},
	mode:"production",
	output: {
		filename: '[name].min.js',
		path: path.resolve(__dirname, 'dist/js')
	},
	module:{
		rules:[
		{
			test:/\.js$/,
			loader:'babel-loader'
		},
		{
			test:/\.html$/,
			loader:'html-loader'
		},
		{
			test:/\.css$/,
			use:[
			'style-loader',
			'css-loader'
			]
		},
		{
			test:/\.(png|svg|jpg|gif|ico)$/,
			use:[
			'file-loader'
			]
		}
		]
	},
	plugins:[
	// new CleanWebpackPlugin(['dist']),/*清除dist下所有文件*/
	// new HtmlWebpackPlugin({
	// 	filename:'../index.html',/*修改页面名*/
	// 	template:'index.html'
	// })
	]
};