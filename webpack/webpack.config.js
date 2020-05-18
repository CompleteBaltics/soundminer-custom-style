const path = require('path');
const loaders = require('./loaders');
const plugins = require('./plugins');

module.exports = {
  entry: ["./src/js/app.js"],
  module: {
    rules: [
      loaders.CSSLoader,
      loaders.JSLoader
    ]
  },
  plugins: [
    plugins.StyleLintPlugin,
    plugins.MiniCssExtractPlugin,
  ],
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "js/[name].bundle.js"
  },
};