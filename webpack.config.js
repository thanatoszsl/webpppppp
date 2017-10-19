module.exports = {
  entry: './src/js/app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.min.js'
  }
	 module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader'
        ]
      }, {
	 test: /\.ttf$/,
        loaders: [
          'url-loader'
        ]

}
    ]
  }
  {
  test: /\.js)$/,
  loader: 'babel-loader?presets[]=es2015'
}
}