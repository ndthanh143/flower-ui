import axiosInstance from '@/axios';
import { CreateReviewPayload, GetReviewQuery, GetReviewsResponse } from './types';

export const reviewService = {
  getAll: async (query?: GetReviewQuery) => {
    const { data } = await axiosInstance.get<GetReviewsResponse>('reviews', {
      params: {
        populate: '*',
        filters: {
          ...(query?.productSlug && {
            product: {
              slug: query.productSlug,
            },
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
  create: async (data: CreateReviewPayload) => {
    await axiosInstance.post('reviews', { data });
  },
};
