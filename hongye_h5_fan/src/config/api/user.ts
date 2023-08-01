/*
 * @Author: yifan
 * @Date: 2023-08-01 15:46:35
 * @Last Modified by:   yifan
 * @Last Modified time: 2023-08-01 15:46:35
 */
import { resolveUrl } from "@/utils/common";
export const API_USER = {
  reset: () => resolveUrl("/user/reset"),
  login: () => resolveUrl("/user/login"),
  registry: () => resolveUrl("/user/registry"),
  list: () => resolveUrl("/user/list"),
  getUserIdByToken: () => resolveUrl("/user/getUserByToken"),
  getUserInfoById: () => resolveUrl("/user/getUserInfo"),
  upload: () => resolveUrl("/user/upload"),
  identity: () => resolveUrl("/identity/list"),
  updateUser: () => resolveUrl("/user/updataUserInfo"),
  getCaptcha: () => resolveUrl("/user/captcha"),
};
