/**
 * webpack-merge: 用于合并配置
 * yargs-parser: 用于解析命令行参数
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
  },
  entry: {
    main: resolve("src/index.tsx"),
  },
  output: {
    path: resolve(process.cwd(), "dist"),
    filename: "[name].[contenthash:8].js",
    chunkFilename: "[name].[contenthash:8].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                auto: true,
                localIdentName: "[local]--[hash:base64:5]",
              },
            },
          },
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "swc-loader",
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: resolve("src/index.html"),
      inject: "body", // 或者改为 "head"
    }),
  ],
};

module.exports = merge.default(WebpackBaseConfig, _modeConfig);
