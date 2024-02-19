import { configs } from '@/configs';

const BASE_URL = `${configs.apiUrl}/api`;

type TMethod = 'GET' | 'PUT' | 'POST' | 'DELETE';

interface RequestOptions {
  method?: TMethod;
  headers?: Record<string, string>;
  body?: string;
}

export const fetchInstance = async <T>(endpoint: string, method: TMethod = 'GET', body?: object): Promise<T> => {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('access-token');

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
  }

  const options: RequestOptions = {
    method,
    headers,
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(`${BASE_URL}/${endpoint}`, { ...options, cache: 'no-cache' });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
};
