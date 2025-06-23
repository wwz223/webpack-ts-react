/**
 * 开发环境配置
 * webpack-bundle-analyzer: 用于分析打包后的文件
 * style-loader: 将 CSS 转换为 JavaScript 模块
 * css-loader: 将 CSS 转换为 JavaScript 模块
 */

const { join } = require("path");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]___[hash:base64:5]",
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [new BundleAnalyzerPlugin()],
  devServer: {
    static: {
      directory: join(__dirname, "public"),
    },
    compress: true,
    port: 9000,
  },
};
