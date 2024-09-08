import { api } from "@/lib/apiConfig";
import { AxiosRequestConfig, AxiosResponse } from "axios";

export const getData = async <T>(
  endpoint: string,
  params: Record<string, any> = {},
  requestOptions?: AxiosRequestConfig
): Promise<T> => {
  const response: AxiosResponse<T> = await api.get(endpoint, {
    params,
    ...requestOptions,
  });

  return response.data;
};

export const postData = async <T>(
  endpoint: string,
  payload: any,
  params?: Record<string, any>,
  requestOptions?: AxiosRequestConfig
): Promise<T> => {
  const response: AxiosResponse<T> = await api.post(endpoint, payload, {
    params,
    ...requestOptions,
  });

  return response.data;
};

export const updateData = async <T>(
  endpoint: string,
  payload: any,
  params: Record<string, any> = {}
): Promise<T> => {
  const response: AxiosResponse<T> = await api.put(endpoint, payload, {
    params,
  });

  return response.data;
};

export const deleteData = async <T>(
  endpoint: string,
  params: Record<string, any> = {}
): Promise<T> => {
  const response: AxiosResponse<T> = await api.delete(endpoint, { params });

  return response.data;
};
