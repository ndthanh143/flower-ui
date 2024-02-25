import { BaseData, BasePaginationResponse, ImageData, PaginationQuery } from '../types';

export type GetReviewsResponse = BasePaginationResponse<Review>;

export type Review = {
  firstName: string;
  lastName: string;
  email: string;
  content: string;
  photo?: {
    data: ImageData;
  };
  rate: number;
} & BaseData;

export type GetReviewQuery = {
  productSlug?: string;
} & PaginationQuery;

export type CreateReviewPayload = {
  firstName: string;
  lastName: string;
  rate: number;
  photo?: string;
  content: string;
  product: number;
};
