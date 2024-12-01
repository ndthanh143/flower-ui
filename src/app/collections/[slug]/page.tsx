import { categoryService, seoService } from '@/services';
import { Collections } from './_components';
import { Metadata } from 'next';
import { getFullPageUrl, transformMetadata } from '@/utils';
import { ROUTES } from '@/constants';
import { SEO } from '@/services/seo/types';

interface ICategoryPageProps {
  params: { slug: string | undefined };
}

export const dynamicParams = true;

export async function generateStaticParams() {
  const data = await categoryService.getAll();

  return data.data.map((data) => ({
    slug: data.attributes.slug,
  }));
}

export async function generateMetadata({ params }: ICategoryPageProps): Promise<Metadata> {
  const category = await categoryService.getBySlug(params.slug || '');

  const seoData: SEO = {
    metaTitle: category.attributes.metaTitle,
    metaDescription: category.attributes.metaDescription,
    shareImage: category.attributes.shareImage,
    pageUrl: getFullPageUrl(ROUTES.COLLECTIONS.slug(params.slug || '')),
  };

  return transformMetadata(seoData);
}

export default async function CategoryPage({ params }: ICategoryPageProps) {
  const slug = params.slug || '';

  const category = await categoryService.getBySlug(params.slug || '');

  return (
    <div className='py-[40px] container flex flex-col gap-[50px]'>
      <div className='flex flex-col items-center gap-4'>
        <h2 className='uppercase font-[400] text-xl text-center'>{category.attributes.displayTitle}</h2>
        <span className='block w-12 h-1 rounded-lg bg-yellow-400' />
      </div>
      <Collections categorySlug={slug} />
    </div>
  );
}
