module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modles/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
