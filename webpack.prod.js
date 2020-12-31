var path = require('path');
var webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');


module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new webpack.EnvironmentPlugin({
      SOCKET_URL: 'https://voxpop-server-1.herokuapp.com'
    })
  ]
});
