import axiosInstance from '@/axios';
import { CategoriesResponse } from './types';

export const categoryService = {
  getAll: async () => {
    const { data } = await axiosInstance.get<CategoriesResponse>('categories', { params: { populate: '*' } });

    return data;
  },

  getBySlug: async (slug: string) => {
    const { data } = await axiosInstance.get<CategoriesResponse>('categories', {
      params: {
        filters: {
          slug,
        },
      },
    });

    return data.data[0];
  },
};
