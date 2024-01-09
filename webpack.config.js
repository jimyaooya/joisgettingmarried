const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    sp: "./src/sp.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve("./serve/lib"),
  },
};