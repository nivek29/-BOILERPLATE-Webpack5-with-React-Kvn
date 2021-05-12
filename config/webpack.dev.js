/* eslint-disable no-undef */
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const { HotModuleReplacementPlugin } = require("webpack");
var PrettierPlugin = require("prettier-webpack-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

/** @type {import('webpack').Configuration} */
const devConfig = {
  mode: "development",
  devServer: {
    port: 3000,
    contentBase: "../public",
    open: "chrome",
    hot: true,
    historyApiFallback: true
  },
  target: "web",
  plugins: [
    new HotModuleReplacementPlugin(), 
    new ReactRefreshWebpackPlugin(),
    new PrettierPlugin({
      parser: "babel",
      printWidth: 80,             // Specify the length of line that the printer will wrap on.
      tabWidth: 4,                // Specify the number of spaces per indentation-level.
      useTabs: true,              // Indent lines with tabs instead of spaces.
      bracketSpacing: true,
      extensions: [ ".js", ".jsx" ],
      jsxBracketSameLine: true,
      semi: true,                 // Print semicolons at the ends of statements.
      encoding: 'utf-8'           // Which encoding scheme to use on files
    })
  ],
  devtool: "eval-source-map"
};

module.exports = merge(common, devConfig);
