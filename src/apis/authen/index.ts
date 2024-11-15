import request from "../request";
import { PATH_API } from "@constants/pathAPI";
import { ILogin, ISignUp } from "@interfaces/authen";
import { IChangePassword } from "@interfaces/changePassword";

export const loginService = (params: ILogin) => request.post(PATH_API.LOGIN, params);
export const registerService = (params: ISignUp) => request.post(PATH_API.SIGNUP, params);
export const logoutService = () => request.post(PATH_API.LOGOUT);
export const changePasswordService = (params: IChangePassword) => request.post(PATH_API.CHANGE_PASSWORD, params);
