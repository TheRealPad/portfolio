const { override, addWebpackModuleRule } = require("customize-cra");

module.exports = override(
  addWebpackModuleRule({
    test: /\.scss$/,
    use: [
      "style-loader",
      {
        loader: "css-loader",
        options: { modules: true }, // Enable CSS Modules
      },
      "sass-loader",
    ],
  })
);
