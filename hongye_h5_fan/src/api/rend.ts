import { request, axios } from "@/utils/request";
import { API_REND } from "@/config/api/rend";
import store from "@/store";
import { RendManageType } from "../interface/model/rend";

interface RendServiceInterface {
  rend(params: RendManageType.getrendState): Promise<any>;
  searchrend(params: RendManageType.getrendState): Promise<any>;
}
export const RendService = (): RendServiceInterface => {
  class rendService {
    // 获取数据
    public async rend(params: RendManageType.getrendState) {
      const url = API_REND.rend();
      return request
        .get(url)
        .then((res: any) => {
          return Promise.resolve(res);
        })
        .catch((err) => {
          console.error(err);
          return Promise.reject(err);
        });
    }

    // 筛选数据
    public async searchrend(params: RendManageType.getrendState) {
      const url = API_REND.rend();
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
  }
  return new rendService();
};
