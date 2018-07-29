const path = require('path')
const webpack = require('webpack')

module.exports = {
	entry: './src/client/index.js',
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'public')
	},
	devServer: {
		contentBase: './public',
		historyApiFallback: true,
		proxy: {
			'/api': {
				target: 'http://localhost:8070'
			}
		}
	},
	devtool: 'eval-source-map',
	module: {
		rules: [
			{
				exclude: [/node_modules/],
				test: /\.jsx?$/,
				use: 'babel-loader'
			}
		]
	},
	plugins: [
		new webpack.NamedModulesPlugin()
	],
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [
      path.resolve('./src/client'),
      path.resolve('./src/client/components'),
      path.resolve('./src/client/scenes'),
      path.resolve('./src/client/scenes/Browse/components'),
			path.resolve('./src/client/scenes/Browse/components/ItemList/components'),
      path.resolve('./src/client/scenes/Browse/components/SidePanel/components'),
      path.resolve('./src/client/scenes/Import/components'),
      path.resolve('./src/client/scenes/Landing/components'),
      path.resolve('./node_modules')
    ]
  }
}
