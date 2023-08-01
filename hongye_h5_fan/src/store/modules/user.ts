/*
 * @Author: yifan
 * @Date: 2023-08-01 15:53:42
 * @Last Modified by:   yifan
 * @Last Modified time: 2023-08-01 15:53:42
 */

import { signOut, setStorage, getStorage } from "@/utils/common";
import { StoreManageType } from "@/interface/store";

interface IUserInfo {
  avatar: string;
  email: string | null;
  graph: string | null;
  mobile: string | null;
  nickname: string | null;
  uid: string | null;
}
interface IUserState {
  token: string;
  uid: string;
  userInfo: IUserInfo;
}
export default {
  namespaced: true,
  state: {
    token: getStorage("token") || "",
    // uid: getStorage('uid') !== null || getStorage('uid') !== undefined ? getStorage('uid') : ''
    // userInfo: getStorage('userInfo') ? JSON.parse(getStorage('userInfo') as string) : {}
  },
  mutations: {
    SAVE_TOKEN: (state: IUserState, token: string): void => {
      state.token = token;
      setStorage("token", token);
    },
    SAVE_UID: (
      state: IUserState,
      { payload }: StoreManageType.IPayload
    ): void => {
      state.uid = payload;
      setStorage("uid", payload);
    },
    UPDATE_USER_INFO: (
      state: IUserState,
      { payload }: StoreManageType.IPayload
    ): void => {
      state.userInfo = payload;
      setStorage("userInfo", JSON.stringify(payload));
    },
  },
  actions: {
    SAVE_USER_TOKEN(
      { commit }: StoreManageType.CommitInterface<StoreManageType.IPayload>,
      { payload }: StoreManageType.IPayload
    ) {
      commit("SAVE_TOKEN", payload);
    },
    SAVE_USER_INFO(
      { commit }: StoreManageType.CommitInterface<StoreManageType.IPayload>,
      { payload }: StoreManageType.IPayload
    ) {
      commit("UPDATE_USER_INFO", { payload: payload });
    },
    RESET_TOKEN: ({
      commit,
    }: StoreManageType.CommitInterface<StoreManageType.IPayload>): void => {
      signOut();
      commit("SAVE_TOKEN", "");
    },
  },
};
