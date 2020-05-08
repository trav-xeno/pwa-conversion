/*
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  entry: "./public/assets/index.js",
  output: {
    path: __dirname + "/public/dist",
    filename: "bundle.js",
  },
  mode: "development",
  plugins: [
    new WebpackPwaManifest({
      name: "budget App",
      short_name: "budget App",
      description: "An application for budget tracking ",
      background_color: "#01579b",
      theme_color: "#ffffff",
      "theme-color": "#ffffff",
      start_url: "/",
      icons: [
        {
          src: path.resolve("public/assets/icons/budget-icon-192.png"),
          sizes: [72, 96, 128, 144, 192, 384, 512],
          destination: path.join("assets", "icons"),
        },
      ],
    }),
  ],
  // configure webpack to use babel-loader to bundle our separate modules and transpile the code
  // refer to https://github.com/babel/babel-loader for more information on the settings
  module: {
    rules: [
      {
        test: /\.js$/, // files must end in ".js" to be transpiled
        exclude: /node_modules/, // don't transpile code from "node_modules"
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};

module.exports = config; */
