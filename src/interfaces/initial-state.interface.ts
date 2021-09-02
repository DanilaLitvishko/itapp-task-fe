import { UserInfo } from "./user-info.interface";

export interface InitialState {
  currentUser: string | null;
  error: string | null;
  loading: boolean;
  userInfo: UserInfo | null;
  image: string | null;
  isAdmin: boolean;
}
