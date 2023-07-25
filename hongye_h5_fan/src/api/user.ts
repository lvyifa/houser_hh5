import { request, axios } from "@/utils/request";
import { API_USER } from "@/config/api/user";
import store from "@/store";
import { UserManageType } from "../interface/model/user";

interface UseUserServiceInterface {
  login(params: UserManageType.LoginFormState): Promise<boolean>;
}
export const useUserService = (): UseUserServiceInterface => {
  class userService {
    // 用户登录
    public async login(params: UserManageType.LoginFormState) {
      const url = API_USER.login();
      return request
        .post(url, params)
        .then((res: any) => {
          return Promise.resolve(res);
        })
        .catch((err) => {
          console.error(err);
          return Promise.reject(err);
        });
    }
  }
  return new userService();
};
