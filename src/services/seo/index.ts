import axiosInstance from '@/axios';
import { GetSEOResponse } from './types';

export const seoService = {
  getSeoService: async (pageUrl: string) => {
    const { data } = await axiosInstance.get<GetSEOResponse>('seos', {
      params: {
        populate: '*',
        filters: {
          pageUrl,
        },
      },
    });

    return data.data[0] || {};
  },
};
