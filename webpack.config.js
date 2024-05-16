const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    // The following is to try solving "Refused to apply style from 'http://localhost:8080/index.css' because its MIME type ('text/html') is not a supported stylesheet MIME type, and strict MIME checking is enabled."
    // The above error was caused by when trying to use index.css in the index.html file, it probably couldn't find it in the dist directory because it wasn't being imported anywhere
    new CopyWebpackPlugin({
      patterns: [{ from: "./src/index.css", to: "index.css" }],
    }),
  ],
};
