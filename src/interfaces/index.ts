// Common Interface

export interface IActionCallback {
  success?: (data?: any) => void;
  error?: (error?: any) => void;
}

export interface IResponseAction extends IActionCallback {
  type: string;
  payload: any;
  params?: any;
}

export interface IPagination {
  page: number;
  limit: number;
  total: number;
}

export interface IResponseServer<T = any> {
  data: T;
  pagination: IPagination;
}

export interface IListParams {
  page: number;
  limit: number;
  order?: any;
  filter?: any;
  search?: string;
}
