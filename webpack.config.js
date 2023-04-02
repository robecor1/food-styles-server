const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/app/index.ts',
  mode: "development",
  target: 'node',
  externals: [nodeExternals()],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: [".mjs", ".json", ".ts", ".js"],
    modules: [
      "node_modules"
    ],
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
      {
        test: /\.graphql?$/,
        loader: 'webpack-graphql-loader'
      }
    ],
  },
};