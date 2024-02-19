import axiosInstance from '@/axios';
import { Blog, GetBlogResponse, GetBlogsResponse } from './type';

export const blogService = {
  getBlogs: async () => {
    const { data } = await axiosInstance.get<GetBlogsResponse>('/blogs', {
      params: {
        populate: '*',
      },
    });

    return data;
  },
  getBlogDetail: async (slug: string) => {
    const { data } = await axiosInstance.get<GetBlogsResponse>('/blogs', {
      params: {
        populate: '*',
        filters: {
          slug,
        },
      },
    });

    return data.data[0].attributes;
  },
};
