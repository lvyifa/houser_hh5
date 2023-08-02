import { Moment } from "moment";
export namespace BrokerManageType {
  export class BrokerSearch {
    telName?: string;
    state?: string;
    currentPage?: number | 1;
    pageSize?: number | 10;
  }
  export class BrokerData {
    id: number | undefined;
    name: string | undefined;
    tel: string | undefined;
    company: string | undefined;
    new_house: string | undefined;
    second_hand_house: string | undefined;
    renting: string | undefined;
    state: string | undefined;
    created_at: Moment | undefined;
    updated_at: Moment | undefined;
  }
}
