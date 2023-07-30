/*
 * @Author: yifan
 * @Date: 2023-07-30 19:29:44
 * @Last Modified by: yifan
 * @Last Modified time: 2023-07-30 19:32:59
 */

import { request } from "@/utils/request";
import { API_infos } from "@/config/api/infos";
import { InfoManageType } from "../interface/model/infos";
interface InfoServiceInterface {
  infos(params: InfoManageType.InfoState): Promise<any>;
  setinfos(params: InfoManageType.setInfoState): Promise<any>;
  delinfos(params: InfoManageType.delInfoState): Promise<any>;
  addinfos(params: InfoManageType.addInfoState): Promise<any>;
  editinfos(params: InfoManageType.editInfoState): Promise<any>;
}

export const infosService = (): InfoServiceInterface => {
  class inService {
    //资讯列表
    public async infos(params: InfoManageType.InfoState) {
      const url = API_infos.infos();
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
    //修改资讯列表
    public async setinfos(params: InfoManageType.setInfoState) {
      const url = API_infos.setinfos();
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
    //删除资讯列表
    public async delinfos(params: InfoManageType.delInfoState) {
      const url = API_infos.delinfos();
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
    //增加资讯列表
    public async addinfos(params: InfoManageType.addInfoState) {
      const url = API_infos.addinfos();
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
    //编辑资讯列表
    public async editinfos(params: InfoManageType.editInfoState) {
      const url = API_infos.editinfos();
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
  return new inService();
};
