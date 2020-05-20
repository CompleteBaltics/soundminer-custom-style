const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const JSLoader = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env']
    }
  }
};

const CSSLoader = {
  test: /\.pcss$/,
  exclude: /node_modules/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: __dirname + '/../../public/css/',
        hmr: process.env.development === 'development',
        reloadAll: true
      }
    },
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
        sourceMap: true
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: true,
        config: {
          path: __dirname + '/postcss.config.js'
        }
      },
    },
  ],
};

const FontLoader = {
  test: /\.(ttf|eot|woff2?)$/i,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: 'fonts/[name].[ext]'
      }
    }
  ]
}

module.exports = {
  JSLoader: JSLoader,
  CSSLoader: CSSLoader,
  FontLoader: FontLoader
};