import { BaseData, BasePaginationResponse, ImageData } from '../types';

export type CategoriesResponse = BasePaginationResponse<Category>;

export type Category = {
  name: string;
  displayTitle: string;
  description: string;
  slug: string;
  images: {
    data: ImageData[] | null;
  };
} & BaseData;
