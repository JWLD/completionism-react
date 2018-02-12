const path = require('path')

module.exports = {
  entry: './src/client/App.jsx',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
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
  devtool: 'cheap-eval-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [path.resolve('./src/client'), path.resolve('./node_modules')]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader'
      }
    ]
  }
}
