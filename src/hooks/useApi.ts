import {
  useQuery,
  useMutation,
  useQueryClient,
  UseQueryOptions,
  UseMutationOptions,
} from "@tanstack/react-query";
import { getData, postData, updateData, deleteData } from "@/api/api";
import { AxiosRequestConfig } from "axios";

export const useGetData = <T>(
  endpoint: string,
  params: Record<string, any> = {},
  requestOptions?: AxiosRequestConfig,
  options?: UseQueryOptions<T, unknown>
) => {
  return useQuery({
    queryKey: [endpoint],
    queryFn: async () => await getData<T>(endpoint, params, requestOptions),
    ...options,
  });
};

export const usePostData = <T>(
  endpoint: string,
  requestOptions?: AxiosRequestConfig,
  options?: UseMutationOptions<
    T,
    unknown,
    { payload: any; params?: Record<string, any> }
  >
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ payload, params }) =>
      await postData<T>(endpoint, payload, params, requestOptions),
    ...options,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [endpoint] });
    },
  });
};

export const useUpdateData = <T>(
  endpoint: string,
  options?: UseMutationOptions<
    T,
    unknown,
    { payload: any; params?: Record<string, any> }
  >
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ payload, params }) =>
      await updateData<T>(endpoint, payload, params),
    ...options,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: [endpoint, variables?.params?.id],
      });
    },
  });
};

export const useDeleteData = <T>(
  endpoint: string,
  options?: UseMutationOptions<T, unknown, Record<string, any>>
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ params }) => await deleteData<T>(endpoint, params),
    ...options,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: [endpoint, variables?.params?.id],
      });
    },
  });
};
