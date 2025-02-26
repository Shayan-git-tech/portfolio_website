const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")


module.exports = {
  mode: "development", // Change to "production" for production builds
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
    publicPath: "/", // Ensure correct asset loading
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i, // Process image files
        type: "asset/resource",
      },
      {
        test: /\.css$/, // Process CSS files
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext][query]",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
      filename: "index.html",
      favicon: path.resolve(__dirname, "public", "favicon.ico"), // Add this line
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "public/favicon.ico", to: "favicon.ico" }, // Copy favicon to build folder
        { from: "public/manifest.json", to: "manifest.json" }, // ✅ Copy manifest.json

      ],
    }),
    
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
      publicPath: "/",
    },
    compress: true,
    port: 3000,
    historyApiFallback: true,
    headers: {
      "Content-Security-Policy":
        "default-src * 'self' data: blob:; script-src * 'self' 'unsafe-inline' 'unsafe-eval'; style-src * 'self' 'unsafe-inline'; connect-src *;",
    },
  },
  devtool: "source-map",
}

