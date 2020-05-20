const path = require('path');
const loaders = require('./loaders');
const plugins = require('./plugins');
// const webpack = require('webpack');

module.exports = {
  entry: ["./src/js/app.js"],
  module: {
    rules: [
      loaders.CSSLoader,
      loaders.JSLoader,
      loaders.FontLoader
    ]
  },
  plugins: [
    plugins.MiniCssExtractPlugin,
    // new webpack.SourceMapDevToolPlugin({})
  ],
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "js/[name].bundle.js"
  },
  // mode: 'development',
  // devtool: 'inline-source-map'
};