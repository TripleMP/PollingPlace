module.exports = {
  entry: [
    './client/index.js'
  ],
  output: {
    path: __dirname + '/client/dist',
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./src",
    hot: true
  },
  module: {
    loaders: [
      {
       test: /\.js$/, 
       exclude: /node_modules/, 
       loader: "babel-loader",
       query: { presets: ['es2015', 'react', 'stage-2'] } 
     }
    ]
  }
}