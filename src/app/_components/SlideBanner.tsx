'use client';

import Image from 'next/image';
import Slider from 'react-slick';

import bannerHome1 from '@/assets/images/home-page/banner-1.png';
import bannerHome2 from '@/assets/images/home-page/banner-2.png';
import bannerHome3 from '@/assets/images/home-page/banner-3.png';
import bannerHome4 from '@/assets/images/home-page/banner-4.png';
import bannerHome5 from '@/assets/images/home-page/banner-5.png';
import bannerHome6 from '@/assets/images/home-page/banner-6.png';

export function SlideBanner() {
  return (
    <div className='w-screen overflow-hidden'>
      <Slider slidesToShow={1} slidesToScroll={1} infinite autoplay autoplaySpeed={3000}>
        <div className='h-[250px] md:h-[400px] lg:h-[650px] xl:h-[750px] w-screen'>
          <Image
            src={bannerHome2}
            alt='banner'
            width={0}
            height={0}
            sizes='100vw'
            className='w-full h-full object-cover'
          />
        </div>
        <div className='h-[250px] md:h-[400px] lg:h-[650px] xl:h-[750px] w-screen'>
          <Image
            src={bannerHome1}
            alt='banner'
            width={0}
            height={0}
            sizes='100vw'
            className='w-full h-full object-cover'
          />
        </div>
        <div className='h-[250px] md:h-[400px] lg:h-[650px] xl:h-[750px] w-screen'>
          <Image
            src={bannerHome3}
            alt='banner'
            width={0}
            height={0}
            sizes='100vw'
            className='w-full h-full object-cover'
          />
        </div>
        <div className='h-[250px] md:h-[400px] lg:h-[650px] xl:h-[750px] w-screen'>
          <Image
            src={bannerHome4}
            alt='banner'
            width={0}
            height={0}
            sizes='100vw'
            className='w-full h-full object-cover'
          />
        </div>
        <div className='h-[250px] md:h-[400px] lg:h-[650px] xl:h-[750px] w-screen'>
          <Image
            src={bannerHome5}
            alt='banner'
            width={0}
            height={0}
            sizes='100vw'
            className='w-full h-full object-cover'
          />
        </div>
        <div className='h-[250px] md:h-[400px] lg:h-[650px] xl:h-[750px] w-screen'>
          <Image
            src={bannerHome6}
            alt='banner'
            width={0}
            height={0}
            sizes='100vw'
            className='w-full h-full object-cover'
          />
        </div>
      </Slider>
    </div>
  );
}
