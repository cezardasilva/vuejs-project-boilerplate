var path = require('path')
var webpack = require('webpack')

module.exports = {
	entry: './src/system/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: 'dist/',
		filename: 'build.js'
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					// vue-loader options go here
				}
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]?[hash]'
				}
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': `"${process.env.NODE_ENV || 'development'}"`
		}),
		//Use only pt-Br and En languages in Moment.js, this reduce app bundle size
		//new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /pt-br|en/),
		new webpack.optimize.OccurrenceOrderPlugin()
	],
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.common.js'
		}
	},
	/*devServer: {
		historyApiFallback: true,
		noInfo: true,
		proxy: {
			"/your-api/": {
				"target": {
					"host": "host.here",
					"protocol": 'http:',
					"port": 80
				},
				changeOrigin: true,
				secure: false
			}
		}
	},*/
	devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
	module.exports.devtool = '#source-map'
	// http://vue-loader.vuejs.org/en/workflow/production.html
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: false,
			compress: {
				warnings: false,
				drop_console: true
			}
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true
		})
	])
}
