import { SlideShow } from '@/components';
import { Description, Option, MoreProducts } from './_containers';
import { productService } from '@/services';
import { convertImageUrl } from '@/utils';

export default async function ProductDetail({ params }: { params: { slug: string } }) {
  const slug = params?.slug;

  const { attributes: data } = await productService.getBySlug(slug);

  return (
    <div className='flex flex-col gap-[4rem] py-10'>
      <div className='flex flex-col items-center'>
        <h1 className='uppercase text-lg text-center leading-[4rem]'>{data.name}</h1>
        <span className='block w-[40px] h-[4px] rounded-lg bg-yellow-400' />
      </div>
      <div className='container max-w-5xl mx-auto'>
        <SlideShow images={data.images.data.map((item) => convertImageUrl(item, 'large'))} />
      </div>
      <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-8'>
          <div className='col-span-1 lg:col-span-3 order-2 lg:order-1'>
            <Description data={data} />
          </div>
          <div className='col-span-1 lg:col-span-2 order-1 lg:order-2'>
            <Option data={data} />
          </div>
        </div>
      </div>
      <div className='container'>
        <MoreProducts category={data.category.data.attributes} product={data} />
      </div>
    </div>
  );
}
