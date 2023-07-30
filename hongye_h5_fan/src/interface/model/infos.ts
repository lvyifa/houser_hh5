/*
 * @Author: yifan
 * @Date: 2023-07-30 19:28:07
 * @Last Modified by: yifan
 * @Last Modified time: 2023-07-30 19:32:56
 */
import { Moment } from "moment";

export namespace InfoManageType {
  export class InfoState {
    name?: string | undefined;
    tit?: string | undefined;
    status?: boolean | undefined | string | number;
    price?: string | undefined;
    date?: string | undefined;
  }
  export class setInfoState {
    id?: string | undefined;
    status?: string | undefined;
  }
  export class delInfoState {
    id?: string | undefined;
  }
  export class addInfoState {
    name?: string | undefined;
    tit?: string | undefined;
    status?: boolean | undefined | string | number;
    date?: string | undefined;
    price?: string | undefined;
    created_at?: string | undefined | Moment;
    updated_at?: string | undefined | Moment;
  }
  export class editInfoState {
    id?: string | undefined;
    name?: string | undefined;
    tit?: string | undefined;
    status?: boolean | undefined | string | number;
    date?: string | undefined;
  }
}
