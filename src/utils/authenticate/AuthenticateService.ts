import toast from 'react-native-toast-message';
import { AxiosResponse } from 'axios';
import { ILogin } from '@interfaces/authen';
import { store } from '@store/store';
import { EStatusHttp } from '@utils/enums/authen';
import request from '../../apis/request';
import { userInfoActions } from '@store/slices/userInfoSlice';
import { loadingActions } from '@store/slices/loadingSlice';
import { loginService } from '../../apis/authen';

const AUTH_URL_REFRESH_TOKEN = '/refreshToken';

interface LoginRequest {
    requestLogin: (values: ILogin) => Promise<void>;
}

export const isLogin = () => {
    const { userInfo } = store.getState();
    return !!userInfo?.token;
};

export function handleMessage(res: any) {
    const { message, status, statusCode, data, errors } = res.data;
    if (res.status !== 401) {
        switch (status || statusCode) {
            case EStatusHttp.HTTP_OK:
            case EStatusHttp.HTTP_CREATED:
                toast.show({ type: 'success', text1: data ? data.message : message });
                break;
            case EStatusHttp.HTTP_NOT_FOUND:
            case EStatusHttp.HTTP_FORBIDDEN:
            case EStatusHttp.HTTP_UNPROCESSABLE_ENTITY:
                toast.show({ type: 'error', text1: data ? data.message : message });
                break;
            case EStatusHttp.HTTP_BAD_REQUEST:
                if (errors?.length > 0) {
                    errors?.forEach((e: any) => {
                        toast.show({ type: 'error', text1: e.error });
                    });
                } else {
                    toast.show({ type: 'error', text1: data ? data.message : message });
                }
                break;
            default:
                return;
        }
    }
}

const AuthenticateService = {
    refreshToken: (inputRefreshToken: string) =>
        request.post(AUTH_URL_REFRESH_TOKEN, {
            refresh_token: inputRefreshToken,
        }),
    logOut: () => {
        store.dispatch(userInfoActions.logOut());
    },
};

export const useLogin = (): LoginRequest => {
    const requestLogin = async (options: ILogin) => {
        try {
            store.dispatch(loadingActions.showLoading());
            const response: AxiosResponse = await loginService(options);
            if (response?.status === EStatusHttp.HTTP_CREATED) {
                const { access_token, refresh_token } = response?.data?.data;
                store.dispatch(userInfoActions.getUserInfoRequest(access_token));
                store.dispatch(userInfoActions.updateToken({ token: access_token, refreshToken: refresh_token }));
            }
        } catch (error: any) {
            if (error?.response) handleMessage(error?.response);
        } finally {
            store.dispatch(loadingActions.hideLoading());
        }
    };
    return {
        requestLogin,
    };
};

export default AuthenticateService;
