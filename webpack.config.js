const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const NODE_ENV = process.env.NODE_ENV
const isEnvDevelopment = NODE_ENV === 'development'
const isEnvProduction = NODE_ENV === 'production'

module.exports = {
  entry:  path.resolve(__dirname, 'src/index.ts'),
  output: {
    publicPath: '.',
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'umd'
  },
  mode: isEnvProduction ? 'production' : 'development',
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    mainFiles: ['index'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
  ]
}
