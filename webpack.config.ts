import webpack from "webpack";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config = (env: any): webpack.Configuration => {
  return {
    mode: env.NODE_ENV,
    entry: {
      index: "./src/index.js",
    },
    output: {
      path: path.join(__dirname, "dist"),
      filename: "[name].[contenthash].bundle.js",
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "Code Splitting",
      }),
    ],
    optimization: {
      moduleIds: "deterministic",
      runtimeChunk: "single",
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "node_modules",
            chunks: "all",
          },
        },
      },
    },
  };
};

export default config;
