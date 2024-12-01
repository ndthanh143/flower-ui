import { configs } from '@/configs';
import { SEO } from '@/services/seo/types';
import { ImageData, ImageFormat } from '@/services/types';

export const parseQueryString = (query: Record<string, any>): string => {
  return Object.entries(query)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
};

export const convertImageUrl = (data: ImageData, type: ImageFormat) => {
  const url = data.attributes.formats?.[type]?.url || data.attributes.url;
  return `${url}`;
};

export const getFullPageUrl = (path: string) => {
  return `${process.env.NEXT_PUBLIC_URI_CLIENT}${path}`;
};

export const transformMetadata = (data?: SEO) => {
  return data
    ? {
        title: data.metaTitle,
        description: data.metaDescription,
        openGraph: {
          title: data.metaTitle,
          description: data.metaDescription,
          images: [data.shareImage?.data ? convertImageUrl(data.shareImage.data, 'thumbnail') : '/open-graph.jpg'],
          url: data.pageUrl,
        },
      }
    : {};
};
