import { BaseData, BasePaginationResponse } from '../types';

export type CategoriesResponse = BasePaginationResponse<Category>;

export type Category = {
  name: string;
  displayTitle: string;
  description: string;
  slug: string;
} & BaseData;
