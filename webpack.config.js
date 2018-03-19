const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env', 'babel-preset-react'],
            plugins: ['react-hot-loader/babel']
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /(node_modules)/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.jpg$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'My App',
      template: 'public/index.html',
    }),
  ]
}
