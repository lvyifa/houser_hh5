module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-pxtorem": {
      rootValue: 16,
      unitPrecision: 5,
      propList: ["*"],
      selectorBlackList: ["vant-"],
      replace: true,
      mediaQuery: false,
      minPixelValue: 12,
      exclude: /node_modules/i,
    },
  },
};
