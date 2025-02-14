const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    'dgraph-tour': path.join(__dirname, 'js/index.js'),
  },
  output: {
    path: path.join(__dirname, 'js/build'),
    filename: '[name].js',
  },

  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
        query: { cacheDirectory: true }
      },
    ]
  },
};
