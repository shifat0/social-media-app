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
  options?: UseQueryOptions<T>
) => {
  return useQuery({
    queryKey: [endpoint],
    queryFn: () => getData<T>(endpoint, params),
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
    mutationFn: ({ payload, params }) =>
      postData<T>(endpoint, payload, params, requestOptions),
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
    mutationFn: ({ payload, params }) =>
      updateData<T>(endpoint, payload, params),
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
    mutationFn: ({ params }) => deleteData<T>(endpoint, params),
    ...options,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: [endpoint, variables?.params?.id],
      });
    },
  });
};
