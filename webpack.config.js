const HtmlWebpackPlugin = require('html-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "public" }],
    }),
    new FaviconsWebpackPlugin('./src/image/guitar.png')
  ],
  // devServer: {
  //   contentBase: './dist'
  // },
  resolve: {
    alias: {
      handlebars: 'handlebars/dist/handlebars.min.js'
    },
    fallback: {
      fs: false
    }
  }
}
