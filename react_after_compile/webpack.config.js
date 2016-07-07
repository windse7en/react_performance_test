var path = require('path');
    webpack = require('webpack');

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
        test : /\.jsx?$/,
        loaders : ['babel'],
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/
      }
    ]
  }
};
