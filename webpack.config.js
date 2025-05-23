const path = require("path");
const fs = require("fs");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const entries = {};
const srcDir = path.join(__dirname, "src");

fs.readdirSync(srcDir)
  .filter((dir) => fs.statSync(path.join(srcDir, dir)).isDirectory())
  .forEach((dir) => (entries[dir] = "./" + path.join("src", dir, dir)));

console.log("Entries: ", entries);
console.log("Source Directory: ", srcDir);

module.exports = {
  target: "web",
  entry: entries,
  output: {
    filename: "[name]/[name].js",
  },
  devtool: "inline-source-map",
  devServer: {
    server: {
      type: "https",
    },
    hot: true,
    port: 3000,
    static: {
      directory: path.join(__dirname, "dist/home"),
      watch: true,
    },
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      "azure-devops-extension-sdk": path.resolve(
        "node_modules/azure-devops-extension-sdk"
      ),
    },
  },
  stats: {
    warnings: false,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "azure-devops-ui/buildScripts/css-variables-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.woff$/,
        use: [
          {
            loader: "base64-inline-loader",
          },
        ],
      },
      {
        test: /\.html$/,
        use: "file-loader",
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: "**/*.html", context: "src" }],
    }),
  ],
};
