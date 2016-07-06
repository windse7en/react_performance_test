var path = require('path');
    webpack = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

var CSS = new ExtractTextPlugin('css/todo.css');

module.exports = {
  entry: [
    // 'webpack-dev-server/client?http://localhost:8080', // WebpackDevServer host and port
    // 'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './src/js/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist/'),
    filename: 'todo.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test : /\.jsx?$/,
        loaders : ['babel'],
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/
      }
    ]
  },
  plugins: [CSS]
};
