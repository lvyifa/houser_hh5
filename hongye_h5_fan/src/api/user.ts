/*
 * @Author: yifan
 * @Date: 2023-08-01 15:44:42
 * @Last Modified by: yifan
 * @Last Modified time: 2023-08-01 16:20:27
 */

import { request, axios } from "@/utils/request";
import { API_USER } from "@/config/api/user";
import { LoadingDecorator } from "@/utils/loading";
import { UserManageType } from "@/interface/model/user";

interface UseUserServiceInterface {
  login(params: UserManageType.LoginForm): Promise<any>;
  reset(params: UserManageType.ResetFormInterface): Promise<any>;
  getIdentityList(): Promise<any>;
  getUserList(params: { pagesize: number; pagecount: number }): Promise<any>;
  upload(file: FormData): Promise<any>;
  getUserIdByToken(token: string): Promise<any>;
  getUserInfoById(params: { uid: string }): Promise<any>;
  updateUser(params: UserManageType.UserInfoState): Promise<any>;
  getCaptcha(): Promise<any>;
}

export const useUserService = (): UseUserServiceInterface => {
  class userService {
    // 修改用户信息
    public async updateUser(params: UserManageType.UserInfoState) {
      const url = API_USER.updateUser();
      return request
        .put(url, params)
        .then(({ data }) => {
          return Promise.resolve(data);
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    }
    // 重置
    public async reset(params: UserManageType.ResetFormInterface) {
      const url = API_USER.reset() + `/${params.id}`;
      return request
        .put(url, params)
        .then(({ data }) => {
          return Promise.resolve(data);
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    }
    // 用户登录
    public async login(params: UserManageType.LoginForm) {
      const url = API_USER.login();
      return request
        .post(url, params)
        .then((data) => {
          return Promise.resolve(data);
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    }
    // 获取用户身份权限
    @LoadingDecorator(true)
    public async getUserList(params: { pagesize: number; pagecount: number }) {
      const url = API_USER.list();
      return request
        .get(url, { params })
        .then(({ data }) => {
          return Promise.resolve(data);
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    }
    // 获取用户身份权限
    @LoadingDecorator(true)
    public async getIdentityList() {
      const url = API_USER.identity();
      return request
        .post(url)
        .then(({ data }) => {
          return Promise.resolve(data);
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    }
    // 上传图片
    @LoadingDecorator(true)
    public async upload(file: FormData) {
      const url = API_USER.upload();
      return axios
        .post(url, file, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: localStorage.getItem("token"),
          },
        })
        .then(({ data }) => {
          return Promise.resolve(data);
        })
        .catch((err) => {
          console.error(err);
          return Promise.reject(err);
        });
    }
    // 获取uid
    @LoadingDecorator(true)
    public async getUserIdByToken(token: string) {
      const url = API_USER.getUserIdByToken();
      return request
        .get(`${url}?token=${token}`)
        .then(({ data }) => {
          return Promise.resolve(data);
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    }
    // 根据uid获得用户信息
    @LoadingDecorator(true)
    public async getUserInfoById(params: { uid: string }) {
      const url = API_USER.getUserInfoById();
      return request
        .get(url, { params })
        .then(({ data }) => {
          return Promise.resolve(data);
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    }
    public async getCaptcha() {
      const url = API_USER.getCaptcha();
      return request
        .get(url)
        .then((res) => {
          return Promise.resolve(res);
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    }
  }
  return new userService();
};
