import { useState, useEffect } from 'react';

interface FetchResponse<T> {
  data?: T;
  isLoading: boolean;
  refetch: () => void;
}

interface IUseFetchProps<T> {
  queryFn: () => Promise<T>;
}

export function useFetch<T>({ queryFn }: IUseFetchProps<T>): FetchResponse<T> {
  const [data, setData] = useState<T>();
  const [isLoading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const result = await queryFn();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    fetchData();
  };

  return { data, isLoading, refetch };
}
