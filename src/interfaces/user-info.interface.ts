import { OptionInfo } from "./option-info.interface";

export interface UserInfo {
  data: {
    id?: string;
    name: string;
    companyName: string;
    phoneNumber: string;
    industries?: OptionInfo[];
    specialities?: OptionInfo[];
    email?: string;
    image?: string;
  };
}
