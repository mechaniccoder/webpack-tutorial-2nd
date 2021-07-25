import webpack from 'webpack';
import path from 'path';

const config: webpack.Configuration = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js'
  }
}

export default config;