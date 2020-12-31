var path = require('path');
var webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');


module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new webpack.EnvironmentPlugin({
      SOCKET_URL: 'http://localhost:5000'
    })
  ]
});
