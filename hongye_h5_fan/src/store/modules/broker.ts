import { IPayload } from "@/interface/store";
import { BrokerManageType } from "@/interface/model/broker";

interface IProductState {
  type: string;
  data: BrokerManageType.BrokerData | undefined;
}
export default {
  namespaced: true,
  name: "broker",
  state: {
    type: "add",
    data: [],
  },
  mutations: {
    UPDATE: (state: IProductState, { payload }: IPayload): void => {
      // console.log(payload)
      state.type = payload.type;
      state.data = payload.data;
    },
  },
  actions: {},
};
