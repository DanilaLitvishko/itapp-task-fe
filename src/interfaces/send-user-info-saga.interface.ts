import { UserInfo } from "./user-info.interface";

export interface SendUserInfoSaga {
  type: string;
  payload: UserInfo;
}
