import { EStatusCodeData, EStatusHttp } from "utils/enums/authen";

export interface IOptions {
  /*
   * option show toast message when call stack fails
   */
  error?: boolean;
  /*
   * option show toast message when call stack success
   */
  success?: boolean;
  /*
   * option show type LOADING_PAGE Redux
   */
  loading?: boolean;
}
export interface IBaseResponse<T> {
  message?: string;
  status: EStatusCodeData;
  error?: any;
  data: T;
}

export interface IResponse<T> {
  /*
   *HTTP response status codes indicate whether a specific HTTP request has been successfully completed.
   */
  status: EStatusHttp;
  /*
   * This makes the type parameter visible to all the other members of the interface.
   */
  data?: IBaseResponse<T>;
}

export interface IHttpResponse<T> {
  status: EStatusHttp | number;
  data?: T;
  message?: string;
  error?: any;
}
