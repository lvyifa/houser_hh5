export namespace groupType {
  export class groupState {
    province: string | undefined;
    city: string | undefined;
    area: string | undefined;
    initiator: string | undefined;
    group_status: string | undefined;
    address: string | undefined;
    status: string | undefined;
  }
  export class setgroupState {
    id: string | undefined;
    status?: string | undefined;
  }
  export interface FormState {
    address: string;
  }
  export interface DataItem {
    key: string;
    name: string;
    age: number;
    address: string;
  }
}
