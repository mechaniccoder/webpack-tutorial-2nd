import webpack from "webpack";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const config = (env: any): webpack.Configuration => {
  return {
    mode: env.NODE_ENV,
    entry: {
      index: "./src/index.js",
      print: "./src/print.js",
    },
    output: {
      path: path.join(__dirname, "dist"),
      filename: "[name].bundle.js",
      clean: true,
      assetModuleFilename: "assets/[hash][ext]",
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "Development",
      }),
      new MiniCssExtractPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
          test: /\.(png)$/,
          type: "asset",
        },
      ],
    },
  };
};

export default config;
