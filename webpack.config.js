/**
 * webpack-merge: 用于合并配置
 * yargs-parser: 用于解析命令行参数
 */

const merge = require("webpack-merge");
const argv = require("yargs-parser")(process.argv.slice(2));
const { resolve } = require("path");
const _mode = argv.mode || "development";

const _modeConfig = require(`./config/webpack.${_mode}.js`);

const WebpackBaseConfig = {
  entry: {
    main: resolve("src/index.js"),
  },
  output: {
    path: resolve(process.cwd(), "dist"),
    filename: "bundle.js",
  },
};

module.exports = merge.default(WebpackBaseConfig, _modeConfig);
