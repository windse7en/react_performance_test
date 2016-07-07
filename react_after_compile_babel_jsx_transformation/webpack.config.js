var path = require('path');
    webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
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
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
};
