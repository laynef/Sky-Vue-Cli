// Do not change
// at all ....
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  // other options...
  entry: [
      "babel-polyfill",
      "./app/App.vue"
  ],
   output: {
        filename: "public/bundle.js"
    },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
    ]
  },
  vue: {
    loaders: {
      css: ExtractTextPlugin.extract("css"),
      less: ExtractTextPlugin.extract("css!less"),
      sass: ExtractTextPlugin.extract('css!sass')
    }
  },
  plugins: [
    new ExtractTextPlugin("style.css")
  ]
}