/*
 * @Author: yifan
 * @Date: 2023-07-29 11:05:49
 * @Last Modified by: yifan
 * @Last Modified time: 2023-07-29 11:07:57
 */
import { RendManageType } from "@/interface/model/rend";
import { IPayload } from "@/interface/store";
interface statetype {
  renddata: Array<RendManageType.renddataState>;
}
export default {
  namespaced: true,
  name: "rend",
  state: {
    renddata: [],
  },
  mutations: {
    getrendlist(state: statetype, { payload }: IPayload) {
      state.renddata = payload;
    },
  },
  actions: {},
};
