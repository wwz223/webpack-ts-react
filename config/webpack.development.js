/**
 * 开发环境配置
 * webpack-bundle-analyzer: 用于分析打包后的文件
 * style-loader: 将 CSS 转换为 JavaScript 模块
 * css-loader: 将 CSS 转换为 JavaScript 模块
 */

const { join } = require("path");
// const BundleAnalyzerPlugin =
//   require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  mode: "development",
  devtool: "source-map",
  devServer: {
    hot: true,
    open: true,
    historyApiFallback: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /\.module\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.module\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: "[local]",
              },
            },
          },
          "postcss-loader",
        ],
      },
    ],
  },
  //   plugins: [new BundleAnalyzerPlugin()],
};
