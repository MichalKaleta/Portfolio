const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    modern: "./modern.js",
    retro: "./retro.js"
  },

  output: {
    path: path.join(__dirname, "./dist"),
    filename: "[name].js"
  },

  devtool: "source-map",

  devServer: {
    //contentBase: path.join(__dirname, "./modern.js")
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "modern.html",
      template: "./modern.html",
      chunks: ["modern"]
    }),
    new HtmlWebpackPlugin({
      chunks: ["retro"],
      template: "./retro.html",
      filename: "index.html"
      //inject: "body"
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        include: /src/,
        query: {
          presets: ["@babel/env"]
        }
      },

      {
        test: /\.(css$|sc?a?ss$)/,
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
