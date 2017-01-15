// Do not change
// at all ....
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // other options...
  entry: [
      'babel-polyfill',
      "./app/main.js"
  ],
   output: {
        filename: "public/bundle.js"
    },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['es2015', 'stage-2'],
          plugins: ['transform-runtime'],
          "comments": false
        }
      },
      {
          test: /\.html$/,
          loader: "html"
      }
    ]
  },
  vue: {
    loaders: {
      css: ExtractTextPlugin.extract("css"),
      less: ExtractTextPlugin.extract("css!less"),
      sass: ExtractTextPlugin.extract('css!sass'),
      js: 'babel'
    }
  },
resolve: {
    extensions: ['', '.js', '.vue']
  },
  htmlLoader: {
      ignoreCustomFragments: [/\{\{.*?}}/],
      root: path.resolve(__dirname + '/public'),
      attrs: ['img:src', 'link:href']
  },
  plugins: [
    new ExtractTextPlugin("public/main.css", { allChunks: true }),
    new HtmlWebpackPlugin({template: 'public/index.html'})
  ]
}