import { OptionalInformation } from "./optional-information.interface";

export interface EditUserSpecialitiesSaga {
  type: string;
  payload: OptionalInformation[];
}
