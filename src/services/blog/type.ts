import { BlocksContent } from '@strapi/blocks-react-renderer';
import { BaseData, BasePaginationResponse, BaseResponse, ImageData } from '../types';

export type GetBlogsResponse = BasePaginationResponse<Blog>;
export type GetBlogResponse = BaseResponse<Blog>;

export type Blog = {
  title: string;
  description: string;
  thumbnail: { data: ImageData };
  metaTitle: string;
  metaDescription: string;
  metaKeyword: string;
  content: BlocksContent;
  slug: string;
} & BaseData;
