import { OptionInfo } from "./option-info.interface";

export interface UserInfo {
  bodyParameters: {
    name: string;
    companyName: string;
    phoneNumber: string;
    industries?: OptionInfo[];
    specialities?: OptionInfo[];
  };
  config: {
    headers: {
      Authorization: string;
    };
  };
}
