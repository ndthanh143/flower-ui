import { BaseData, BasePaginationResponse, ImageData } from '../types';

export type GetSEOResponse = BasePaginationResponse<SEO>;

export type SEO = {
  metaTitle?: string;
  metaDescription?: string;
  pageName?: string;
  pageUrl?: string;
  seoUrl?: string;
  shareImage?: {
    data: ImageData;
  };
};
