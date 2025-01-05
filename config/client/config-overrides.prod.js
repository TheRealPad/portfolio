const path = require("path");
const {
  override,
  addWebpackModuleRule,
  addWebpackAlias,
} = require("customize-cra");

module.exports = override(
  addWebpackModuleRule({
    test: /\.scss$/,
    use: [
      "style-loader",
      {
        loader: "css-loader",
        options: {
          modules: {
            localIdentName: "[hash:base64:8]",
          },
        },
      },
      "sass-loader",
    ],
  }),

  addWebpackAlias({
    "@components": path.resolve(__dirname, "../../src/client/components"),
    "@pages": path.resolve(__dirname, "../../src/client/pages"),
    "@app": path.resolve(__dirname, "../../src/client/app"),
    "@common": path.resolve(__dirname, "../../src/client/common"),
  })
);
