var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var config = {
  context: path.join(__dirname, 'src'),
  //decide whether you will use less or sass . I prefer sass(scss)
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    './style/base.less',
    './style/base.scss',
    './main.js',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel'],
      },
      {
          test: /\.less$/,
          loaders: ['style', 'css', 'postcss-loader', 'less']
       },
       {
          test: /\.scss$/,
          loaders: ['style', 'css?sourceMap', 'postcss-loader', 'sass?sourceMap']
       }
    ],
  },
  resolveLoader: {
    root: [
      path.join(__dirname, 'node_modules'),
    ],
  },
  resolve: {
    root: [
      path.join(__dirname, 'node_modules'),
    ],
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new CopyWebpackPlugin([{ from: 'static', to : 'static' } ])
  ],
};
module.exports = config;
