var path = require('path');

module.exports = {
  entry: './src/chat.js',
  output: { path: __dirname + "/build", filename: 'chat.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        use: [
          'css-loader'
        ]
      }
    ]
  }
};
