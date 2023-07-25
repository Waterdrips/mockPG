var path = require('path');
const webpack = require('webpack');

module.exports = {
  target: "node",
  entry: './index.js',
  mode: "production",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: 'index.js',
    libraryTarget: 'commonjs'
  },
  plugins: [
    new webpack.IgnorePlugin(
        {
          resourceRegExp: /^pg-native$/
        }
    )
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /(node_modules)/
      }
    ]
  }
}