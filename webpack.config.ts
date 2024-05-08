const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.module\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]__[hash:base64:5]",
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              additionalData: `@import "${path.resolve(
                __dirname,
                "/assets/style/variables/color.scss"
              )}";`,
            },
          },
        ],
      },
    ],
  },
};
