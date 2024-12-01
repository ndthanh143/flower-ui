export const ROUTES = {
  HOME: '/',
  CONTACT: '/contact',
  COLLECTIONS: {
    index: '/collections',
    slug: (slug: string) => `/collections/${slug}`,
  },
  BLOGS: {
    index: '/blogs',
    slug: (slug: string) => `/blogs/${slug}`,
  },
  PRODUCT: {
    index: '/p',
    slug: (slug: string) => `/p/${slug}`,
  },
  SEARCH: '/search',
} as const;

export type RouteTypes = keyof typeof ROUTES;
