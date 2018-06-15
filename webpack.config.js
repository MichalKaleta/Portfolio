const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports= {
  entry: [
  /*    "./style/style.css", */
    "./src/index.js"
  ],
  
  output: {
    filename: './dist/bundle.js'
  },

  devtool: 'source-map',

  devServer: {
    contentBase:  "./"
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'index2.html'      /////////////////////change
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: /src/,
        query: {
          presets: ['env', 'react']
        }
      },
  
      {
        test: /\.(css$|sc?a?ss$)/,
        include: /style/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }, 
      { 
        test: /\.html$/,
        loader: 'html-loader' 
      },
      {
         test: /\.(png|jpg|jpeg|woff|woff2|eot|ttf|svg)$/, 
        loader: 'url-loader?limit=100000' 
      }
    ] 

  }
}
