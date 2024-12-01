import { BlocksContent } from '@strapi/blocks-react-renderer';
import { BaseData, BasePaginationResponse, BaseResponse, ImageData, PaginationQuery } from '../types';
import { Category } from '../category/types';
import { SEO } from '../seo/types';

export type GetProductsResponse = BasePaginationResponse<Product>;

export type GetProductResponse = BaseResponse<Product>;

export type Product = {
  name: string;
  images: {
    data: ImageData[];
  };
  price: string;
  quantity: number;
  description: string;
  slug: string;
  details: BlocksContent | null;
  delivery: BlocksContent | null;
  isLongDistanceShipping: boolean;
  category: {
    data: {
      id: number;
      attributes: Category;
    };
  };
  relativeProducts: {
    data: { id: number; attributes: Product }[];
  };
} & BaseData &
  SEO;

export type GetProductsQuery = {
  categorySlug?: string;
  excludeItem?: string;
  q?: string;
} & PaginationQuery;
