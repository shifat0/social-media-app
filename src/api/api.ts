import { api } from "@/lib/apiConfig";
import { cookieNames } from "@/lib/cookieNames";
import { getClientCookie } from "@/utils/getClientCookie";
import { AxiosRequestConfig, AxiosResponse } from "axios";

const accessToken = getClientCookie(cookieNames.accessToken);

export const getData = async <T>(
  endpoint: string,
  params: Record<string, any> = {},
  requestOptions?: AxiosRequestConfig
): Promise<T> => {
  const response: AxiosResponse<T> = await api.get(endpoint, {
    params,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
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
