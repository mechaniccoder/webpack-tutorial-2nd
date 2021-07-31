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
      filename: "[name].bundle.js",
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "Code Splitting",
      }),
    ],
  };
};

export default config;
