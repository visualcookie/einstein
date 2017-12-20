const path              = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['./src/js/app.js', './src/scss/main.scss'],

  output: {
    path: path.resolve('dist'),
    filename: 'js/[name].bundle.js'
  },

  watch: true,

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('css/[name].css')
  ]
};
