import { configs } from '@/configs';
import { ImageData, ImageFormat } from '@/services/types';

export const parseQueryString = (query: Record<string, any>): string => {
  return Object.entries(query)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
};

export const convertImageUrl = (data: ImageData, type: ImageFormat) => {
  const url = data.attributes.formats?.[type]?.url || data.attributes.url;
  return `${configs.imgUrl}${url}`;
};
