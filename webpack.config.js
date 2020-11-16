const path = require("path");

module.exports = {
  entry: [
    "./js/common.js",
    "./js/debounce.js",
    "./js/form.js",
    "./js/server.js",
    "./js/pin.js",
    "./js/card.js",
    "./js/filter.js",
    "./js/map.js",
    "./js/move.js",
    "./js/main.js"
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname),
    iife: true
  },
  devtool: false
};
