const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    modern: "./src/index2.js",
    retro: "./src/index.js"
  },

  output: {
    filename: "dist/[name].js"
  },

  devtool: "source-map",

  devServer: {
    contentBase: "./"
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "dist/index.html",
      template: "index.html",
      chunks: ["retro"]
    }),
    new HtmlWebpackPlugin({
      filename: "dist/index2.html",
      template: "index2.html",
      chunks: ["modern"]
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        include: /src/,
        query: {
          presets: ["env", "react"]
        }
      },

      {
        test: /\.(css$|sc?a?ss$)/,
        include: /style/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      },
      {
        test: /\.(png|jpg|jpeg|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader?limit=100000"
      }
    ]
  }
};
