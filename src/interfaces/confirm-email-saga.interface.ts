import { ConfirmEmail } from "./confirm-email.interface";

export interface ConfirmEmailSaga {
  type: string;
  payload: ConfirmEmail;
}
