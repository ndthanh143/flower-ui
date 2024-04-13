import { useState, useEffect } from 'react';

interface FetchResponse<T> {
  data?: T;
  isFetched: boolean;
  isLoading: boolean;
  refetch: () => void;
}

interface IUseFetchProps<T> {
  queryFn: () => Promise<T>;
  enabled?: boolean;
}

export function useFetch<T>({ queryFn, enabled = true }: IUseFetchProps<T>): FetchResponse<T> {
  const [data, setData] = useState<T>();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isFetched, setFetched] = useState<boolean>(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const result = await queryFn();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
      !isFetched && setFetched(true);
    }
  };

  useEffect(() => {
    if (enabled) {
      fetchData();
    }
  }, [enabled]);

  const refetch = () => {
    if (enabled) {
      fetchData();
    }
  };

  return { data, isFetched, isLoading, refetch };
}
