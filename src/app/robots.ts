import type { MetadataRoute } from 'next';

import { configs } from '@/configs';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${configs.uriClient}/sitemap.xml`,
  };
}
