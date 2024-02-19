export type BaseResponse<T> = {
  data: T;
};

export type BasePaginationResponse<T> = {
  data: {
    id: number;
    attributes: T;
  }[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

export type BaseData = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type ImageData = {
  id: number;
  attributes: {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: Record<ImageFormat, ImageFormatData>;
    url: string;
  };
};

export type ImageFormat = 'thumbnail' | 'medium' | 'large' | 'small';

export type ImageFormatData = {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: null;
  width: number;
  height: number;
  size: number;
  url: string;
};

export type PaginationQuery = {
  page?: number;
  pageSize?: number;
};
