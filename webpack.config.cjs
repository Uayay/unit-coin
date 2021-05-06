const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry:  path.resolve(__dirname, 'demo/main.tsx'),
  output: {
    publicPath: '.',
    path: path.resolve(__dirname, 'demo'),
    filename: 'index.js',
    libraryTarget: 'umd'
  },
  devServer: {
    port: 3000,
    publicPath: '/',
    contentBase: 'demo'
  },
  resolve: {
    extensions: ['.ts', '.js', '.json', '.tsx'],
    mainFiles: ['index'],
  },
  optimization: {
    minimize: false,
    splitChunks: false
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        loader: require.resolve('babel-loader'),
        options: {
          customize: require.resolve('babel-preset-react-app/webpack-overrides'),
          presets: [
            [
              require.resolve('babel-preset-react-app')
            ],
          ],
          babelrc: false,
          configFile: false,
        }
      },

      {
        test:  /\.css$/,
        use: [
          { loader: require.resolve('style-loader') },
          { loader: require.resolve('css-loader') }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'demo/index.html'),
      favicon: path.resolve(__dirname, 'demo/favicon.ico'),
      inject: true,
      minify: false
    })
  ]
}
