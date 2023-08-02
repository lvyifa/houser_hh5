/*
 * @Author: yifan
 * @Date: 2023-07-31 10:27:29
 * @Last Modified by: yifan
 * @Last Modified time: 2023-08-02 14:48:05
 */
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
      "^/ai": {
        target: "http://localhost:3001",
        changeOrigin: true,
        pathRewrite: {
          ["^/ai"]: "",
        },
      },
    },
  },
});
