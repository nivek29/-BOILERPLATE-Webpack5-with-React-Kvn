/* eslint-disable no-undef */
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require("path");

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "../public"),
    filename: "[name].[contenthash].js",
    publicPath: ""
  },
  module: {
    rules: [
      {
        use: ["babel-loader", "eslint-loader"],
        test: /\.(js|jsx)$/,
        exclude: /node_modules/
      },
      {
        use: ["style-loader", "css-loader", "sass-loader"],
        test: /\.(css|scss|sass)$/
      },
      { 
        test: /\.(png|svg|jpg|gif)$/, use: {
          loader: 'file-loader',
          options: { name: '[name].[ext]' } 
        }
      }, //for images
      { 
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/, 
        use: ['file-loader'] 
      } //for fonts
    ]
  },
  resolve: {
    extensions: [".js", ".json", ".jsx"]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./template/index.html"
    })
  ]
};
