const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  watch: false,
  mode: 'development',
  entry: {
    'home': './src/home.js',
    'masks': './src/masks.js',
    'garments': './src/garments.js',
    'about': './src/about.js',
    'account': './src/account.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader', // Style nodes from JS strings
          {               // Translate CSS -> JS
            loader: 'css-loader',
            options: { url: false }
          },
          'sass-loader'   // Translate SCSS -> CSS
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['home'],
      filename: 'home.html',
      template: 'src/template.html'
    }),
    new HtmlWebpackPlugin({
      chunks: ['masks'],
      filename: 'masks.html',
      template: 'src/template.html'
    }),
    new HtmlWebpackPlugin({
      chunks: ['garments'],
      filename: 'garments.html',
      template: 'src/template.html'
    }),
    new HtmlWebpackPlugin({
      chunks: ['about'],
      filename: 'about.html',
      template: 'src/template.html'
    }),
    new HtmlWebpackPlugin({
      chunks: ['account'],
      filename: 'account.html',
      template: 'src/template.html'
    })
  ]
};
