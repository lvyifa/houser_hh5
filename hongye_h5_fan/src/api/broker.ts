import { request } from "@/utils/request";
import { API_BROKER } from "@/config/api/broker";
import { BrokerManageType } from "@/interface/model/broker";
interface UseBrokerServiceInterface {
  list: (params: BrokerManageType.BrokerSearch) => Promise<any>;
  edit: (params: { content: BrokerManageType.BrokerData }) => Promise<any>;
  add: (params: BrokerManageType.BrokerData) => Promise<any>;
  del: (params: { id: string }) => Promise<any>;
}

export const useBrokerService = (): UseBrokerServiceInterface => {
  class BrokerService {
    // 经纪人列表
    public async list(params: BrokerManageType.BrokerSearch) {
      const url = API_BROKER.list();
      return request
        .get(url, { params })
        .then((res: any) => {
          return Promise.resolve(res);
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    }
    // 添加经纪人
    public async add(params: BrokerManageType.BrokerData) {
      const url = API_BROKER.add();
      return request
        .put(url, params)
        .then((res: any) => {
          return Promise.resolve(res);
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    }
    public async edit(params: { content: BrokerManageType.BrokerData }) {
      const url = API_BROKER.edit();
      return request
        .post(url, params)
        .then((res: any) => {
          return Promise.resolve(res);
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    }
    public async del(params: { id: string }) {
      const url = API_BROKER.del();
      return request
        .delete(url, { params })
        .then((res: any) => {
          return Promise.resolve(res);
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    }
  }
  return new BrokerService();
};
