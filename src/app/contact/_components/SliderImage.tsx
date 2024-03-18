'use client';

import Image from 'next/image';
import Slider from 'react-slick';

import storeImage from '@/assets/images/contact-page/store.jpg';
import storeImage1 from '@/assets/images/contact-page/store-1.jpg';
import storeImage2 from '@/assets/images/contact-page/store-2.jpg';

export function SliderImage() {
  return (
    <Slider slidesToShow={1} slidesToScroll={1} infinite autoplay autoplaySpeed={2000}>
      <div className='w-[300px] h-[400px] rounded-lg overflow-hidden'>
        <Image
          src={storeImage1}
          alt='store-image'
          width={0}
          height={0}
          sizes='100vw'
          className='w-full h-auto object-cover'
        />
      </div>
      <div className='w-[300px] h-[400px] rounded-lg overflow-hidden'>
        <Image
          src={storeImage}
          alt='store-image'
          width={0}
          height={0}
          sizes='100vw'
          className='w-full h-auto object-cover'
        />
      </div>
      <div className='w-[300px] h-[400px] rounded-lg overflow-hidden'>
        <Image
          src={storeImage2}
          alt='store-image'
          width={0}
          height={0}
          sizes='100vw'
          className='w-full h-auto object-cover'
        />
      </div>
    </Slider>
  );
}
