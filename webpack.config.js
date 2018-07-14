
const path = require('path');

module.exports = {
  entry: path.join(__dirname, '/client/index.js'),
  output: {
    path: path.join(__dirname, './public/'),
    filename: 'bundle.js'
  },
  module: { 
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader'
      },
      { 
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
      	test: /\.scss$/,
        use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS
            ]
      }
    ]
  }
};
