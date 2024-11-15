import request from "../request";

export const getProfile = (token?: string) =>
    request.get(`profile`, token ? { headers: { Authorization: `Bearer ${token}` } } : {});
