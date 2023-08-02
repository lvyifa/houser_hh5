/*
 * @Author: yifan
 * @Date: 2023-08-02 16:25:23
 * @Last Modified by: yifan
 * @Last Modified time: 2023-08-02 16:27:34
 */

import { BrokerManageType } from "@/interface/model/broker";
import { IPayload } from "@/interface/store";
interface statetype {
  borkdata: Array<BrokerManageType.BrokerSearch>;
}
export default {
  namespaced: true,
  name: "infos",
  state: {
    borkdata: [],
  },
  mutations: {
    borklist(state: statetype, { payload }: IPayload) {
      state.borkdata = payload;
    },
  },
  actions: {},
};
