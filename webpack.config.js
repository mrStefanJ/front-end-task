const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // 1
  entry: './src/index.js',
  //
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(png|jpe?g|gif|ttf)$/i,
        loader: 'file-loader',
        options: {
          name: 'assets/[name].[ext]',
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"]
      },
      {
        test: /\.html$/i,
        exclude: /node_modules/,
        loader: 'html-loader',
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js']
  },
  // 2
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  //
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: '**/*' },
        path.posix.join(
          path.resolve(__dirname, 'assets').replace(/\\/g, '/')
          )
      ]
    }
    )
  ],
  // 3
  devServer: {
    contentBase: ['./dist', './assets']
  }
};