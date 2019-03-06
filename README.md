# Webpack_babel
multi pages webpack and js transcoding

## 步骤

\# 创建package.json  

	npm init -y

\# 安装webpack,webpack-cli

	npm install --save-dev webpack webpack-cli

\# 安装babel

	npm install --save-dev babel-loader @babel/core @babel/preset-env

\# 安装polyfill

	npm install --save-dev @babel/polyfill

\# entry入口添加polyfill

	module.exports = {
		entry:{
			name:["@babel/polyfill",'./src/name.js']
		}
	}

\# 在name.js中引入polyfill，一个js只能引入一个

	import '@babel/polyfill'

\# package.json配置如下

	"private":true,
	"scripts":{"build":"webpack --config webpack.config.js"}

\# 安装失败则清除所有包

	npm cache clean --force

\# 打包

	$ npm run build

