import {
  QueryClient,
  QueryFunction,
  useQuery as useTanstackQuery,
  QueryKey as TanstackQueryKey,
} from '@tanstack/react-query';
import { QueryKey } from 'shared/types/QueryKey';

export const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      retryDelay: 10000,
      retry: 5,
    },
  },
});

type CustomQueryKey = [QueryKey, ...TanstackQueryKey];
export const useQuery = <TData>({
  queryKey,
  queryFn,
  enabled,
  staleTime,
  gcTime,
}: {
  queryKey: CustomQueryKey;
  queryFn: QueryFunction<TData, CustomQueryKey>;
  enabled?: boolean;
  staleTime?: number;
  gcTime?: number;
}) => {
  const query = useTanstackQuery({
    queryKey: queryKey,
    queryFn: queryFn,
    enabled,
    staleTime,
    gcTime,
  });

  return query;
};

export const queryCache = client.getQueryCache();

export const invalidateQueries = async ({
  queryKeys,
}: {
  queryKeys: QueryKey[];
}) => {
  return Promise.all(
    queryKeys.map(item =>
      client.invalidateQueries({
        queryKey: [item],
      }),
    ),
  );
};
