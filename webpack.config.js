const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');

function envAwareConfig(env) {
	const isProduction = env === 'production'
	return {
		mode: isProduction ? 'production' : 'development',
		entry: {
			main: ['whatwg-fetch', path.resolve(__dirname, 'src/main-entry.js')]
		},
		output: {
			path: path.resolve(__dirname, 'dist'),
			publicPath: '/',
			filename: '[name]-[hash].js'
		},
		optimization: isProduction ? {
			minimizer: [
				new UglifyJsPlugin({
					sourceMap: true
				})
			]
		}:{},
		resolve: {
			extensions: ['.js', '.jsx', '.json'],
		},
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					include: [
						path.resolve(__dirname, 'src'),
					],
					use: {
						loader: 'babel-loader'
					}
				},
				{
					test: /\.less$/,
					use: [
						'style-loader',
						{loader: 'css-loader', options: {importLoaders: 1}},
						'less-loader'
					]
				},
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader']
				},
				{
					test: /\.(woff|woff2|ttf|svg|png|jpg|jpeg|eot)$/,
					use: {
						loader: 'url-loader',
						options: {
							limit: 3000,
							name: 'assets/[name]-[hash].[ext]'
						}
					}
				}
			]
		},
		plugins: getPlugins(isProduction)
	}
}
function getPlugins(isProduction) {
	if (isProduction) {
		return [
			new webpack.DefinePlugin({'process.env.NODE_ENV': '"production"'}),
			new HtmlWebpackPlugin({
				template: './src/templates/next-trip.html'
			}),
			new CopyWebpackPlugin({
				patterns: [
				  { from: "src/components/static-assets", to: "static-assets" }
				]})
		]
	}
	return [
		new webpack.DefinePlugin({'process.env.NODE_ENV': '"development"'}),
		new HtmlWebpackPlugin({
			template: './src/templates/next-trip.html'
		}
		),
		new webpack.HotModuleReplacementPlugin()
	]
}

const devServerConfig = {
	devServer: {
		disableHostCheck: true,
		port: 8081,
		host: '0.0.0.0',
		historyApiFallback: true,
		hotOnly: true,  //only refreshes screen on non errors
		inline: true,
		quiet: false,
		overlay: {
			errors: true,
			warnings: true
		},
		setup: require('./webpack.api.stubs').stubs,
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
			'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
		}
	}
}
module.exports = function (env) {
	if (env === 'development') {
		return Object.assign({}, envAwareConfig(env), devServerConfig)
	}
	return envAwareConfig(env)
}