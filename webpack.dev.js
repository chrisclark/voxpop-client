var path = require('path');
var webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');


module.exports = merge(common, {
  mode: 'development',
  devServer: {
    open: 'Google Chrome',
    historyApiFallback: true,
    contentBase: "./",
    publicPath: '/',
    watchContentBase: true,
    index: 'index.html'
  },
  devtool: 'eval-cheap-source-map',
  plugins: [
    new webpack.EnvironmentPlugin({
      SOCKET_URL: 'http://localhost:5000'
    })
  ]
});
