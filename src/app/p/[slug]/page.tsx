import { HeadingCustom, NewsLetter, SlideShow } from '@/components';
import { Description, Option, MoreProducts } from './_containers';
import { productService } from '@/services';
import { convertImageUrl } from '@/utils';
import { Reviews } from './_containers/Reviews';

export default async function ProductDetail({ params }: { params: { slug: string } }) {
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
      <NewsLetter />
    </div>
  );
}
