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
            localIdentName: "[local]__[hash:base64:5]", // Custom class names
          },
        },
      },
      "sass-loader",
    ],
  }),

  addWebpackAlias({
    "@components": path.resolve(__dirname, "src/client/components"),
    "@pages": path.resolve(__dirname, "src/client/pages"),
    "@app": path.resolve(__dirname, "src/client/app"),
    "@common": path.resolve(__dirname, "src/client/common"),
  })
);
