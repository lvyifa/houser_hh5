import { BASE_URL } from "@/config/common";
// import { API_LIVE_PREFIX } from "@/config/common";

// export const generatorLiveAddress = (room: string, anchor: string) => {
//   return API_LIVE_PREFIX + `/${room}/${anchor}.flv`;
// };
export const resolveUrl = (url: string) => {
  return BASE_URL + url;
};
export const getStorage = (key: string) => {
  return localStorage.getItem(key);
};
export const removeItem = (key: string) => {
  return localStorage.removeItem(key);
};
export const setStorage = (key: string, value: string) => {
  return localStorage.setItem(key, value);
};
// 登录态
export const isLogin = (): boolean => {
  return getStorage("token") ? true : false;
};
// 退出登录
export const signOut = (): void => {
  removeItem("token");
  removeItem("userinfo");
  removeItem("user");
  removeItem("name");
  // removeItem("liveList");
};
