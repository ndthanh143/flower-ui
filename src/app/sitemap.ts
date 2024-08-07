import type { MetadataRoute } from 'next';

import { configs } from '@/configs';
import { blogService, categoryService, productService } from '@/services';

const BASE_URL = configs.uriClient;

const routes = ['', 'contact'];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = await blogService.getBlogs();

  const categories = await categoryService.getAll();

  const products = await productService.getAll();

  const commonSitemap = routes.map((route) => ({
    url: `${BASE_URL}/${route}`,
    lastModified: new Date(),
  }));

  const blogSitemap =
    blogs.data?.map((blog) => ({
      url: `${BASE_URL}/blogs/${blog.attributes.slug}`,
      lastModified: new Date(blog.attributes.createdAt),
    })) || [];

  const categorySitemap =
    categories.data?.map((category) => ({
      url: `${BASE_URL}/collections/${category.attributes.slug}`,
      lastModified: new Date(category.attributes.createdAt),
    })) || [];

  const productSitemap = products.data.map((product) => ({
    url: `${BASE_URL}/p/${product.attributes.slug}`,
    lastModified: new Date(product.attributes.createdAt),
  }));

  return [...commonSitemap, ...blogSitemap, ...categorySitemap, ...productSitemap];
}
