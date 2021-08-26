import { UserPayload } from "./user-payload.interface";

export interface LoginSaga {
  type: string;
  payload: UserPayload;
}
