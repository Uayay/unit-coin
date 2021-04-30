const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')


const NODE_ENV = process.env.NODE_ENV
const isEnvDevelopment = NODE_ENV === 'development'
const isEnvProduction = NODE_ENV === 'production'

module.exports = {
  mode: isEnvProduction ? 'production' : 'development',
  entry:  path.resolve(__dirname, 'src/index.ts'),
  output: {
    publicPath: '.',
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'umd'
  },
  devServer: {
    port: 3000,
    publicPath: '.',
    contentBase: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    mainFiles: ['index'],
  },
  optimization: {
    minimize: isEnvProduction,
    splitChunks: false
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          configFile: true
        }
      }
    ]
  },
  plugins: [
    isEnvProduction 
      && new CleanWebpackPlugin(),

    isEnvDevelopment &&
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(__dirname, 'demo/index.html'),
        inject: true,
        // favicon: path.resolve(__dirname, 'demo/favicon.ico'),
        minify: false
      })
  ].filter(Boolean)
}
