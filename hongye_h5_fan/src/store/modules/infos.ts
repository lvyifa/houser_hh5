/*
 * @Author: yifan
 * @Date: 2023-07-30 19:35:26
 * @Last Modified by: yifan
 * @Last Modified time: 2023-07-30 19:38:49
 */

import { InfoManageType } from "@/interface/model/infos";
import { IPayload } from "@/interface/store";
interface statetype {
  infodata: Array<InfoManageType.InfoState>;
  infoeditdata: Array<InfoManageType.editInfoState>;
}
export default {
  namespaced: true,
  name: "infos",
  state: {
    infodata: [],
    infoeditdata: [],
  },
  mutations: {
    setinfoslist(state: statetype, { payload }: IPayload) {
      state.infodata = payload;
    },
    editinfoslist(state: statetype, { payload }: IPayload) {
      state.infoeditdata = payload;
    },
  },
  actions: {},
};
