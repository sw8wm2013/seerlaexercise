const path = require('path');

module.exports = {
  entry: './client/App.jsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build/',
    filename: 'bundle.js'
  }, 
  module: {
    rules: [{
      test: /\.jsx?/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    }, {
      test: /\.s?css$/,
      exclude: /node_modules/,
      use: [
        {loader: 'style-loader'},
        {loader: 'css-loader'},
        {loader: 'sass-loader'}
      ] 
    }]
  },
  devServer: {
    contentBase: path.join(__dirname, 'assets'),
    publicPath: '/build/',
    port: 8080,
    proxy: {
      '/api': 'http://localhost:8080'
    },
    hot: true,
  },
  mode: process.env.NODE_ENV
}