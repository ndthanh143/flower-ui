import axiosInstance from '@/axios';
import { GetProductsQuery, GetProductsResponse } from './types';

export const productService = {
  getAll: async (query?: GetProductsQuery) => {
    const { data } = await axiosInstance.get<GetProductsResponse>(`products`, {
      params: {
        populate: '*',
        filters: {
          ...(query?.categorySlug && {
            category: {
              slug: query.categorySlug,
            },
          }),
          ...(query?.excludeItem && {
            slug: { $ne: query.excludeItem },
          }),
        },
        ...(query?.page &&
          query?.pageSize && {
            pagination: {
              page: query.page,
              pageSize: query.pageSize,
            },
          }),
      },
    });

    return data;
  },
  getRelativeProducts: async (query?: GetProductsQuery) => {
    const { data } = await axiosInstance.get<GetProductsResponse>(`products`, {
      params: {
        populate: '*',
        ...(query?.categorySlug && {
          filters: {
            category: {
              slug: query.categorySlug,
            },
          },
        }),
        ...(query?.page &&
          query?.pageSize && {
            pagination: {
              page: query.page,
              pageSize: query.pageSize,
            },
          }),
      },
    });

    return data;
  },
  getBySlug: async (slug: string) => {
    const { data } = await axiosInstance.get<GetProductsResponse>('products', {
      params: {
        populate: {
          images: '*',
          category: {
            populate: '*',
          },
          relativeProducts: {
            populate: '*',
          },
        },
        filters: {
          slug,
        },
      },
    });
    return data.data[0];
  },
};
