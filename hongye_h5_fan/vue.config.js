const { defineConfig } = require("@vue/cli-service");
const dynamicProxyName = process.env.VUE_APP_API_URL;
module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler: true,
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },
  devServer: {
    host: "0.0.0.0",
    port: 8080,
    proxy: {
      [dynamicProxyName]: {
        target: process.env.VUE_APP_API_URL_ADDRESS,
        changeOrigin: true,
        pathRewrite: {
          [`^${dynamicProxyName}`]: "",
        },
      },
    },
  },
});
