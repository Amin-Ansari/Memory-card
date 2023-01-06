const path = require("path");
// var htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./scripts/index.js",
  mode: "development",
  devtool: false,
  output: {
    path: path.resolve(__dirname, "output"),
    filename: "main.js",
  },
  //   plugins: [new htmlWebpackPlugin()],
  module: {
    rules: [{ test: /\.css$/, use: ["style-loader", "css-loader"] }],
  },
};
