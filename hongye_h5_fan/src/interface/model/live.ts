import { Moment } from "moment";
export namespace LiveManageType {
  export class LiveSearch {
    IdName?: string | number;
    status?: number;
    pageSize?: number;
    pageCount?: number;
  }
  // 直播数据类型
  export class LiveData {
    id: number | undefined;
    title: string | undefined;
    name: string | undefined;
    hot: string | undefined;
    sell: string | undefined;
    watch: string | undefined;
    sales: string | undefined;
    status: number | undefined;
    created_time: Moment | undefined;
    end_time: Moment | undefined;
  }
}
