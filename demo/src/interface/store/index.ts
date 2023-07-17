/*
 * @Author: heinan
 * @Date: 2023-06-24 11:36:06
 * @Last Modified by: yifan
 * @Last Modified time: 2023-07-05 10:48:24
 */

//	store的commit范型
export interface CommitInterface<T> {
  commit: (type: string, value: any) => void
  state: T
}
//store的payload的类型
export interface IPayload {
  type: string
  payload?: any
}
