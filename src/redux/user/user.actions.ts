import { LoginResponse } from "../../interfaces/login-response.interface";
import { UserCredentials } from "../../interfaces/user-credentials.interface";
import { UserPayload } from "../../interfaces/user-payload.interface";
import { UserInfo } from "../../interfaces/user-info.interface";
import UserActionTypes from "./user.types";
import { AxiosError } from "axios";
import { OptionalInformation } from "../../interfaces/optional-information.interface";

export const signUpStart = (userCredentials: UserPayload) => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: userCredentials,
});

export const signUpSuccess = ({ user }: UserCredentials) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: user,
});

export const signUpFailure = (error: Error | AxiosError) => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error,
});

export const confirmEmail = (confirmationCode: string) => ({
  type: UserActionTypes.CONFIRM_EMAIL,
  payload: confirmationCode,
});

export const confirmEmailSuccess = ({ user }: UserCredentials) => ({
  type: UserActionTypes.CONFIRM_EMAIL_SUCCESS,
  payload: user,
});

export const confirmEmailFailure = (error: Error | AxiosError) => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error,
});

export const resendEmail = (email: string) => ({
  type: UserActionTypes.RESEND_EMAIL,
  payload: email,
});

export const resendEmailSuccess = () => ({
  type: UserActionTypes.RESEND_EMAIL_SUCCESS,
});

export const resendEmailFailure = (error: Error | AxiosError) => ({
  type: UserActionTypes.RESEND_EMAIL_FAILURE,
  payload: error,
});
export const login = (userCredentials: UserPayload) => ({
  type: UserActionTypes.LOGIN,
  payload: userCredentials,
});

export const loginSuccess = ({ data }: LoginResponse) => ({
  type: UserActionTypes.LOGIN_SUCCESS,
  payload: data,
});

export const loginFailure = (error: Error | AxiosError) => ({
  type: UserActionTypes.LOGIN_FAILURE,
  payload: error,
});

export const sendUserInfo = (userInfo: UserInfo) => ({
  type: UserActionTypes.SEND_USER_INFO_START,
  payload: userInfo,
});

export const sendUserInfoSuccess = (userInfo: UserInfo) => ({
  type: UserActionTypes.SEND_USER_INFO_SUCCESS,
  payload: userInfo,
});

export const sendUserInfoFailure = (error: Error | AxiosError) => ({
  type: UserActionTypes.SEND_USER_INFO_FAILURE,
  payload: error,
});

export const fetchUserInfoStart = () => ({
  type: UserActionTypes.FETCH_USER_INFO_START,
});

export const fetchUserInfoSuccess = (userInfo: UserInfo) => ({
  type: UserActionTypes.FETCH_USER_INFO_SUCCESS,
  payload: userInfo,
});

export const fetchUserInfoFailure = (error: Error | AxiosError) => ({
  type: UserActionTypes.FETCH_USER_INFO_FAILURE,
  payload: error,
});

export const editUserSpecialitiesStart = (
  userSpecialities: OptionalInformation[]
) => ({
  type: UserActionTypes.EDIT_USER_SPECIALITIES_START,
  payload: userSpecialities,
});

export const editUserSpecialitiesSuccess = (userInfo: UserInfo) => ({
  type: UserActionTypes.EDIT_USER_SPECIALITIES_SUCCESS,
  payload: userInfo,
});

export const editUserSpecialitiesFailure = (error: Error | AxiosError) => ({
  type: UserActionTypes.EDIT_USER_SPECIALITIES_FAILURE,
  payload: error,
});
