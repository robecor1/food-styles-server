const path = require('path');

module.exports = {
  entry: './build/app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(tsx?)$/,
        loader: "ts-loader",
        exclude: [/node_modules/],
        options: {
          transpileOnly: true,
        },
      },
    ],
  },
};