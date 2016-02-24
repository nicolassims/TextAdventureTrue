'use strict';

module.exports = {
  entry: './scripts/main.js',
  output: {
    path:"scripts/",
    filename: 'scripts/bundle.js'
  },
  module: {
    loaders: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }]
  }
};