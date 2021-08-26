export interface UserCredentials {
  user: {
    email: string;
    password: string;
    isConfirm?: boolean;
    confirmationCode?: string;
    id?: number;
  };
}
