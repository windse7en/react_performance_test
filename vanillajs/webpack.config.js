var path = require('path');
    webpack = require('webpack');

module.exports = {
  entry: [
    './src/js/app.js'
  ],
  output: {
    path: path.join(__dirname, 'dist/'),
    filename: 'todo.js'
  },
  module: {
    loaders: [
      {
        test : /\.js$/,
        loaders : ['babel'],
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/
      }
    ]
  },
  node: {
    fs: "empty"
  }
};
