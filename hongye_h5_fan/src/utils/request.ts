// import { message } from "ant-design-vue";
import axios, { AxiosInstance, AxiosError, AxiosResponse } from "axios";
const request: AxiosInstance = axios.create({
  timeout: 3000,
});
request.interceptors.request.use(
  (config: any) => {
    const Authorization = localStorage.getItem("token");
    config.headers["Content-Type"] = "application/json";
    config.headers["Platform"] = "mobile";
    if (Authorization) {
      config.headers["Authorization"] = `${Authorization}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);
request.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error: AxiosError) => {
    switch (error.response?.status) {
      case 400:
        // message.error("错误请求");
        break;
      case 401:
        // message.error("未授权请登录", 1, () => {
        //   const pathUrl = location.href.split("/");
        //   window.location.href = `/login?redirect=${encodeURIComponent(
        //     "/" + pathUrl[3]
        //   )}`;
        // });
        break;
      case 403:
        // message.error("服务器拒绝请求");
        break;
      case 404:
        // message.error("无法找到该网页");
        break;
      case 406:
        // message.error("暂无数据！");
        break;
      case 408:
        // message.error("请求超时");
        break;
      case 500:
        // message.error("服务端报错,请重启再试！");
        break;
      case 501:
        // message.error("服务端不支持请求的函数");
        break;
      case 503:
        // message.error("服务端暂停");
        break;
    }

    return Promise.reject(error);
  }
);

export { request, axios };
