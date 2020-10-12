const path = require('path');

module.exports = {
  watch: false,
  mode: 'development',
  entry: {
    'navbar': './src/navbar/index.js',
    'home': './src/home/index.js',
    'masks': './src/masks/index.js',
    'garments': './src/garments/index.js',
    'about': './src/about/index.js',
    'account': './src/account/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public/js')
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
  }
};
