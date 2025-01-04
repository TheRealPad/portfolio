const { override, addWebpackModuleRule } = require("customize-cra");

module.exports = override(
  addWebpackModuleRule({
    test: /\.scss$/,
    use: [
      "style-loader",
      {
        loader: "css-loader",
        options: {
          modules: {
            localIdentName: "[local]__[hash:base64:5]",
          },
        },
      },
      "sass-loader",
    ],
  })
);
