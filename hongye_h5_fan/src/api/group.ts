import { request, axios } from "@/utils/request";
import { API_GROUP } from "@/config/api/group";
import store from "@/store";
import { groupType } from "../interface/model/group";
interface UseGroupServiceInterface {
  group(params: groupType.groupState): Promise<boolean>;
  setgroup(params: groupType.setgroupState): Promise<boolean>;
  delgroup(params: groupType.setgroupState): Promise<boolean>;
}

export const usegroupService = (): UseGroupServiceInterface => {
  class groupService {
    // 获取团购列表
    public async group(params: groupType.groupState) {
      const url = API_GROUP.getgroup();
      return request
        .get(url, { params })
        .then((res: any) => {
          // console.log(res);
          if (res?.data) {
            store.commit({ type: "group/SAVE_DATA", payload: res?.data });
          }
          return true;
        })
        .catch((err) => {
          console.error(err);
          return false;
        });
    }
    // 修改团购状态
    public async setgroup(params: groupType.setgroupState) {
      const url = API_GROUP.setgroup();
      return request
        .post(url, params)
        .then((res: any) => {
          // console.log(res);
          if (res?.data) {
            store.commit({ type: "group/SAVE_DATA", payload: res?.data });
          }
          return true;
        })
        .catch((err) => {
          console.error(err);
          return false;
        });
    }
    // 删除团购状态
    public async delgroup(params: groupType.setgroupState) {
      const url = API_GROUP.delgroup();
      return request
        .delete(url, { params })
        .then((res: any) => {
          // console.log(res);
          if (res?.data) {
            store.commit({ type: "group/SAVE_DATA", payload: res?.data });
          }
          return true;
        })
        .catch((err) => {
          console.error(err);
          return false;
        });
    }
  }
  return new groupService();
};
