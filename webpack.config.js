const path = require('path');

module.exports = {
  entry: {
    bot: './public/main.js',
    login: './public/chatHistory/loginTemplate/login.js',
    pushnotication:'./public/pushNotification/push/index.js', 
    chat: './public/chatHistory/chatTemplate/main.js'
  },
  devtool: 'eval-source-map',
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'public','dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  watch: true
};