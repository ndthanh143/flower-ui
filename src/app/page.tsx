import { Button, HeadingCustom } from '@/components';
import Image from 'next/image';

import bannerHome from '@/assets/images/home-pages/banner.webp';
<<<<<<< Updated upstream
import { categoryService, productService } from '@/services';
=======
import { categoryService } from '@/services';
>>>>>>> Stashed changes
import { Collections } from './_components';

function Banner() {
  return (
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
  );
}

export default async function Home() {
  const categories = await categoryService.getAll();

  return (
    <div className='flex flex-col gap-[80px] py-[50px]'>
      {categories.data.map((category, index) => (
        <>
          <div className='container'>
            <div className='flex flex-col gap-[50px]' key={category.id}>
<<<<<<< Updated upstream
              <div className='flex flex-col items-center gap-4'>
                <h2 className='uppercase font-[400] text-xl text-center'>{category.attributes.name}</h2>
                <span className='block w-12 h-1 rounded-lg bg-yellow-400' />
              </div>
=======
              <HeadingCustom isSecond title={category.attributes.displayTitle} />
>>>>>>> Stashed changes
              <Collections categorySlug={category.attributes.slug} />
            </div>
          </div>
          {index === 0 && <Banner />}
        </>
      ))}
    </div>
  );
}
