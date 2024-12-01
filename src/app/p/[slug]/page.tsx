import { HeadingCustom, SlideShow } from '@/components';
import { Description, Option, MoreProducts } from './_containers';
import { productService } from '@/services';
import { convertImageUrl, getFullPageUrl, transformMetadata } from '@/utils';
import { Reviews } from './_containers/Reviews';
import { Metadata } from 'next';
import { configs } from '@/configs';
import { SEO } from '@/services/seo/types';
import { ROUTES } from '@/constants';

interface IProductDetailProps {
  params: { slug: string };
}

export const dynamicParams = true;

export async function generateStaticParams() {
  const data = await productService.getAll();

  return data.data.map((data) => ({
    slug: data.attributes.slug,
  }));
}

export async function generateMetadata({ params }: IProductDetailProps): Promise<Metadata> {
  const { slug = '' } = params;

  const { attributes: data } = await productService.getBySlug(slug);

  const seoData: SEO = {
    metaTitle: `${data.name} | The Sunny Flower`,
    metaDescription: data.description,
    shareImage: {
      data: data.images.data[0],
    },
    pageUrl: getFullPageUrl(ROUTES.PRODUCT.slug(slug)),
  };

  return transformMetadata(seoData);
}
export default async function ProductDetail({ params }: IProductDetailProps) {
  const slug = params?.slug;

  const product = await productService.getBySlug(slug);

  return (
    <div className='flex flex-col gap-[4rem] py-10'>
      <HeadingCustom title={product.attributes.name} />
      <div className='container max-w-5xl mx-auto'>
        <SlideShow images={product.attributes.images.data.map((item) => convertImageUrl(item, 'large'))} />
      </div>
      <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-8'>
          <div className='col-span-1 lg:col-span-3 order-2 lg:order-1'>
            <Description data={product.attributes} />
          </div>
          <div className='col-span-1 lg:col-span-2 order-1 lg:order-2'>
            <Option data={product.attributes} />
          </div>
        </div>
      </div>
      <div className='container'>
        <MoreProducts category={product.attributes.category.data.attributes} product={product.attributes} />
      </div>
      <div>
        <Reviews product={product} />
      </div>
    </div>
  );
}
