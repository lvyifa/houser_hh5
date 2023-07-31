/*
 * @Author: yifan
 * @Date: 2023-07-31 15:31:38
 * @Last Modified by:   yifan
 * @Last Modified time: 2023-07-31 15:31:38
 */
import { request, axios } from "@/utils/request";
import { API_GROUP } from "@/config/api/group";
import store from "@/store";
import { groupType } from "../interface/model/group";
interface UseGroupServiceInterface {
  group(params: groupType.groupState): Promise<any>;
  setgroup(params: groupType.setgroupState): Promise<any>;
  delgroup(params: groupType.setgroupState): Promise<any>;
}

export const usegroupService = (): UseGroupServiceInterface => {
  class groupService {
    // 获取团购列表
    public async group(params: groupType.groupState) {
      const url = API_GROUP.getgroup();
      return request
        .get(url, { params })
        .then((res: any) => {
          return Promise.resolve(res);
        })
        .catch((err) => {
          console.error(err);
          return Promise.reject(err);
        });
    }
    // 修改团购状态
    public async setgroup(params: groupType.setgroupState) {
      const url = API_GROUP.setgroup();
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
    // 删除团购状态
    public async delgroup(params: groupType.setgroupState) {
      const url = API_GROUP.delgroup();
      return request
        .delete(url, { params })
        .then((res: any) => {
          return Promise.resolve(res);
        })
        .catch((err) => {
          console.error(err);
          return Promise.reject(err);
        });
    }
  }
  return new groupService();
};
