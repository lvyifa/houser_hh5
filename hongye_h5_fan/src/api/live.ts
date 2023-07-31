import { request } from "@/utils/request";
import { API_LIVE } from "@/config/api/live";
import { LiveManageType } from "@/interface/model/live";
interface UseLiveServiceInterface {
  list: (params: LiveManageType.LiveSearch) => Promise<any>;
  del: (params: { id: number }) => Promise<any>;
  edit: (params: {
    id: number | undefined;
    status: number | undefined;
  }) => Promise<any>;
}

export const useLiveService = (): UseLiveServiceInterface => {
  class LiveService {
    // 直播列表
    public async list(params: LiveManageType.LiveSearch) {
      const url = API_LIVE.list();
      return request
        .get(url, { params })
        .then((res: any) => {
          return Promise.resolve(res);
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    }
    public async del(params: { id: number }) {
      const url = API_LIVE.del();
      return request
        .delete(url, { params })
        .then((res: any) => {
          return Promise.resolve(res);
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    }
    public async edit(params: {
      id: number | undefined;
      status: number | undefined;
    }) {
      const url = API_LIVE.edit();
      return request
        .post(url, params)
        .then((res: any) => {
          return Promise.resolve(res);
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    }
  }
  return new LiveService();
};
