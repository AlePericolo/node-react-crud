const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require("terser-webpack-plugin");


module.exports = async (env, argv) => {

	//const API_ENDPOINT = process.env.API_ENDPOINT;
	const API_ENDPOINT = "http://localhost:8080/";
	const isDevelopment = argv.mode === 'development';

	return {
		mode: argv.mode,
		cache: false,
		context: path.resolve(__dirname, "src/"),
		entry: {
			main: path.resolve(__dirname, './src/index.js'),
		},
		output: {
			filename: '[name].min.js',
			path: path.resolve(__dirname, 'build'),
			sourceMapFilename: '[name]-[hash].map',
			chunkFilename: '[id].min.js'
		},
		plugins: [
			new HtmlWebpackPlugin({
				//inject: false,
				template: require("html-webpack-template"),
				prefix: "/",
				appMountId: "root",
				minify: true,
				title: "post-app",
				window: {
					endpoint: {
						api: API_ENDPOINT
					}
				}
			}),
			new MiniCssExtractPlugin({
				filename: "/assets/css/[name].css",
				chunkFilename: "/assets/css/[name]-[hash].css"
			}),
			...hotReloadPlugin(isDevelopment),
		],
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					use: 'babel-loader',
					exclude: /node_modules/
				},
				{
					test: /\.css$/,
					use: [
						{
							loader: MiniCssExtractPlugin.loader,
							options: {
								publicPath: '/assets/css/',
							},
						},
						'css-loader',
					],
				},
				{
					test: /\.scss$/,
					use: [
						{
							loader: MiniCssExtractPlugin.loader,
							options: {
								publicPath: '/assets/css/',
							},
						},
						'css-loader',
						'sass-loader'
					],
				},
				{
					test: /\.(png|jpg|gif)$/i,
					use: [
						{
							loader: 'url-loader',
							options: {
								mimetype: 'image/png'
							}
						}
					]
				},
				{
					test: /\.svg$/,
					use: [{
						loader: 'file-loader',
						options: {
							publicPath: '/assets/fonts',
							outputPath: `/assets/fonts`,
						}
					}]
				},
				{
					test: /\.(woff|woff2|eot|ttf|otf)$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[name].[ext]',
								publicPath: '/assets/fonts',
								outputPath: `/assets/fonts`,
								esModule: false,
							},
						},
					],
				}
			]
		},
		resolve: {
			extensions: ['.js', '.jsx'],
			alias: {
				'@': path.resolve(__dirname, 'src/')
			},
			fallback: { "path": false }
		},
		optimization: {
			minimize: true,
			minimizer: [
				new TerserPlugin({
					test: /\.js(\?.*)?$/i,
					exclude: /node_modules/,
					parallel: 4,
					extractComments: false,
					terserOptions: {
						keep_classnames: true,
						keep_fnames: true,
						format: {
							comments: false,
						},
					},
				}),
			],
		}
	};
}

const hotReloadPlugin = (isDevelopment) => {
	return isDevelopment ? [new webpack.HotModuleReplacementPlugin()] : [];
}