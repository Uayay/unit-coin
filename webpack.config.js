
module.exports = {
  mode: 'production',
  entry:'./src/index.ts',
  output:{
    filename:'dist/index.js'
  },
  module:{
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {}
      }
    ]
  }
}
