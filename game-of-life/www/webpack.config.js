const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
  experiments: {
    asyncWebAssembly: true, // WebAssembly の非同期読み込みを有効化
  },
  module: {
    rules: [
      {
        test: /\.wasm$/, // .wasm ファイルを処理
        type: "webassembly/async", // 非同期 WebAssembly を使用
      },
    ],
  },
  entry: "./bootstrap.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bootstrap.js",
  },
  mode: "development",
  plugins: [
    new CopyWebpackPlugin(['index.html'])
  ],
};
