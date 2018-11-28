var path = require('path');//获取当前路径
var cleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry: {
		index: path.join(__dirname,'./main.js'),
	},
	output:{
		path:path.join(__dirname,'dist'),
		filename:'[name].[hash].js'
	},
	module:{
		rules:[
			{
				test:/\.vue$/,
				loader:'vue-loader'
			},
			{
				test:/\.js$/,
				loader:'babel-loader',
				exclude:/node_module/,
				query:{presets:['env']}
			},
			{
				test:/\.(png|jpg|gif|svg)$/,
				loader:'url-loader?limit=12000&name=images/[hash:8].[name].[ext]'
			},
			{
				test:/\.(eot|ttf|woff|woff2)(\?\S*)?$/,
				loader:'file-loader'
			},
			{
				test:/\.less$/,
				loader:'style-loader!css-loader!less-loader'
			},
			{
				test:/\.css$/,
				loader:'style-loader!css-loader'
			}
		]
	},
    plugins:[
    	new cleanWebpackPlugin(['dist'], {
    		root:__dirname,
    		verbose:true,
    		drt:false
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html'
		}),
		new CopyWebpackPlugin([
			{
				from: path.join(__dirname, './index.html'), 
				to: path.join(__dirname, './dist/index.html')
			}
		], {
			copyUnmodified: true
		}),
	],
	devtool:'#source-map',
	resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
		},
		extensions: ['.js', '.json', '.vue', '.scss', '.css']
    },
}

