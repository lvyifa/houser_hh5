/*
 * @Author: yifan
 * @Date: 2023-08-01 15:39:59
 * @Last Modified by: yifan
 * @Last Modified time: 2023-08-01 16:08:31
 */

export namespace UserManageType {
  export interface LoginForm {
    username: string | undefined;
    password: string | undefined;
    captcha: string | undefined;
  }
  export interface ResetFormInterface {
    password: string | undefined;
    id: string | undefined;
  }
  export class RestFormState implements ResetFormInterface {
    id: string | undefined;
    password: string | undefined;
  }
  export class LoginFormState implements LoginForm {
    username = "yifan";
    password = "123";
    captcha: string | undefined;
  }
  export class IdentityState {
    identity_id: string | undefined;
    identity_text: string | undefined;
    identity_type: number | undefined;
  }
  export class UserInfoState {
    uid?: string;
    nickname: string | undefined;
    graph: string | undefined;
    avatar: string | undefined;
    email: string | undefined;
    mobile: string | undefined;
  }
}
