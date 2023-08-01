// 基础数据接口
export namespace BasicTypeInterface {
  // 纯数据，服务端返回的那种
  export interface Data<T> {
    [key: string]: T;
  }
}

export namespace StoreManageType {
  //	store的commit范型
  export interface CommitInterface<T> {
    commit: (type: string, value: unknown) => void;
    state: T;
  }

  export interface IPayload {
    type: string;
    payload?: any;
  }
  // store的IPayload类型
}
export interface IPayload {
  type: string;
  payload?: any;
}
