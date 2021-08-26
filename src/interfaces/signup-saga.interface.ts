import { UserPayload } from "./user-payload.interface";

export interface SignUpSaga {
  type: string;
  payload: UserPayload;
}
