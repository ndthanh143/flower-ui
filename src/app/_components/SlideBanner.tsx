'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import bannerHome1 from '@/assets/images/home-page/banner-1.png';
import bannerHome3 from '@/assets/images/home-page/banner-3.png';
import bannerHome4 from '@/assets/images/home-page/banner-4.png';
import bannerHome5 from '@/assets/images/home-page/banner-5.png';
import bannerHome6 from '@/assets/images/home-page/banner-6.png';

export function SlideBanner() {
  const listBanners = [bannerHome1, bannerHome3, bannerHome4, bannerHome5, bannerHome6];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % listBanners.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='w-screen h-[30vh] md:h-[40vh] lg:h-[50vh] xl:h-[90vh] overflow-hidden relative'>
      <div className='w-full h-full'>
        {listBanners.map((banner, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={banner}
              alt='banner'
              width={0}
              height={0}
              sizes='100vw'
              className='w-full h-full object cover'
            />
          </div>
        ))}
      </div>
    </div>
  );
}
