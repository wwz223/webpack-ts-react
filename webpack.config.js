/**
 * webpack-merge: 用于合并配置
 * yargs-parser: 用于解析命令行参数
 * clean-webpack-plugin: 用于清理输出目录
 * html-webpack-plugin: 用于生成 HTML 文件
 */

const merge = require("webpack-merge");
const argv = require("yargs-parser")(process.argv.slice(2));
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { resolve } = require("path");

const _mode = argv.mode || "development";

const _modeConfig = require(`./config/webpack.${_mode}.js`);

const WebpackBaseConfig = {
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  entry: {
    main: resolve("src/index.tsx"),
  },
  output: {
    path: resolve(process.cwd(), "dist"),
    filename: "index.js",
    chunkFilename: "[name].[contenthash:8].js",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: resolve("src/index.html"),
      inject: true,
      hash: true,
    }),
  ],
};

module.exports = merge.default(WebpackBaseConfig, _modeConfig);
