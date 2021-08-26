export interface LoginResponse {
  data: {
    accessToken: string;
    name: string;
    image: string;
    isAdmin: boolean;
  };
}
