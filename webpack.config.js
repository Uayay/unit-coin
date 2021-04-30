const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry:  path.resolve(__dirname, 'demo/main.ts'),
  output: {
    publicPath: '.',
    path: path.resolve(__dirname, 'demo'),
    filename: 'index.js',
    libraryTarget: 'umd'
  },
  devServer: {
    port: 3000,
    publicPath: '.',
    contentBase: path.resolve(__dirname, 'demo')
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    mainFiles: ['index'],
  },
  optimization: {
    minimize: false,
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
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'demo/index.html'),
      inject: true,
      favicon: path.resolve(__dirname, 'demo/favicon.ico'),
      minify: false
    })
  ].filter(Boolean)
}
