import { Button, IconButton } from '@/components';
import { ProductCard } from '@/components/ProductCard';
import Image from 'next/image';

import bannerHome from '@/assets/images/home-pages/banner.webp';

export default function Home() {
  return (
    <div className='flex flex-col gap-[80px]'>
      <div className='container'>
        <div className='flex flex-col gap-10'>
          <div className='flex flex-col items-center gap-4'>
            <h2 className='uppercase font-[400] text-4xl text-center'>FLORIST SPECIAL DESIGNS AND GIFTS FOR JANUARY</h2>
            <span className='block w-12 h-1 rounded-lg bg-yellow-400' />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[6rem]'>
            {Array(8)
              .fill(true)
              .map((index) => (
                <div className='col-span-1' key={index}>
                  <ProductCard key={index} />
                </div>
              ))}
          </div>
          <IconButton className='w-fit text-2xl mx-auto'>View all bouquets</IconButton>
        </div>
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
      <div className='container'>
        <div className='flex flex-col gap-10'>
          <div className='flex flex-col items-center gap-4'>
            <h2 className='uppercase font-[400] text-4xl text-center'>FLORIST SPECIAL DESIGNS AND GIFTS FOR JANUARY</h2>
            <span className='block w-12 h-1 rounded-lg bg-yellow-400' />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[6rem]'>
            {Array(8)
              .fill(true)
              .map((index) => (
                <div className='col-span-1' key={index}>
                  <ProductCard key={index} />
                </div>
              ))}
          </div>
          <IconButton className='w-fit text-2xl mx-auto'>View all bouquets</IconButton>
        </div>
      </div>
    </div>
  );
}
