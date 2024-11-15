export interface ILogin {
    email: string;
    password: string;
}

export interface ISignUp {
    email: string;
    name: string;
    password: string;
}

export interface ILoginResponse {
    user_id: number;
    user_name: string;
    accessToken: string;
    refreshToken: string;
    expire_time: number;
    refresh_expire_time: number;
}

export interface IProfileResponse {
    id?: number;
    name: string;
    email: string;
}
