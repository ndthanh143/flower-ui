import { Button, IconButton } from '@/components';
import { ProductCard } from '@/components/ProductCard';
import Image from 'next/image';

import bannerHome from '@/assets/images/home-pages/banner.webp';
import { categoryService, productService } from '@/services';

export default async function Home() {
  const products = await productService.getAll();

  const categories = await categoryService.getAll();

  return (
    <div className='flex flex-col gap-[80px] py-10'>
      <div className='container'>
        {categories.data.map((category) => (
          <div className='flex flex-col gap-10' key={category.id}>
            <div className='flex flex-col items-center gap-4'>
              <h2 className='uppercase font-[400] text-xl text-center'>{category.attributes.name}</h2>
              <span className='block w-12 h-1 rounded-lg bg-yellow-400' />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[6rem]'>
              {products.data.map((product) => (
                <div className='col-span-1' key={product.id}>
                  <ProductCard data={product.attributes} />
                </div>
              ))}
            </div>
            <IconButton className='w-fit text-base mx-auto'>View all bouquets</IconButton>
          </div>
        ))}
      </div>
      <div className='w-screen flex flex-col gap-12 items-center'>
        <div className='w-full'>
          <Image
            src={bannerHome}
            alt='banner-home-page'
            width={0}
            height={0}
            sizes='100vw'
            className='object-cover w-full'
          />
        </div>
        <div className='w-[3/5]'>
          <Button className='uppercase mx-auto w-full'>Send flower subscription</Button>
        </div>
      </div>
      <div className='container'></div>
    </div>
  );
}
