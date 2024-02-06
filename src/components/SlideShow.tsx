'use client';

import cx from 'classnames';
import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { AngleRightIcon } from '@/assets/images/icons';

interface ISlideShowProps {
  images: (string | StaticImageData)[];
}

export function SlideShow({ images }: ISlideShowProps) {
  const [currentImage, setCurrentImage] = useState(0);

  const totalImages = images.length;

  const handleChangeImages = (type: 'next' | 'prev') => () => {
    if (type === 'next') {
      if (currentImage + 1 === totalImages) {
        setCurrentImage(0);
      } else setCurrentImage((prev) => prev + 1);
    } else {
      if (currentImage === 0) {
        setCurrentImage(totalImages - 1);
      } else setCurrentImage((prev) => prev - 1);
    }
  };

  return (
    <div className='flex flex-col gap-8'>
      <div className='flex items-center gap-[36px] text-gray-400'>
        <AngleRightIcon
          className='cursor-pointer h-[80px] hover:opacity-60 transition-all duration-100 rotate-180'
          color='currentColor'
          onClick={handleChangeImages('prev')}
        />
        {images.map((image, index) => (
          <div
            className={cx('w-full transition-opacity duration-1000', {
              'opacity-100': index === currentImage,
              block: index === currentImage,
              'opacity-0': index !== currentImage,
              hidden: index !== currentImage,
            })}
            key={index}
          >
            <Image src={image} alt='product-image' width={0} height={0} sizes='100vw' className='w-full' />
          </div>
        ))}
        <AngleRightIcon
          className='cursor-pointer h-[80px] hover:opacity-60 transition-all duration-100'
          onClick={handleChangeImages('next')}
        />
      </div>
      <div className='flex mx-auto gap-4 px-[2rem]'>
        {images.map((image, index) => (
          <div
            className={cx(
              'col-span-1 w-[50px] h-[60px] cursor-pointer transition-opacity duration-200 ease-in-out hover:opacity-100',
              {
                'opacity-100': index === currentImage,
                'opacity-60': index !== currentImage,
              },
            )}
            key={index}
            onClick={() => setCurrentImage(index)}
          >
            <Image
              src={image}
              alt='product-image'
              width={0}
              height={0}
              sizes='100vw'
              className='w-full h-full object-cover'
            />
          </div>
        ))}
      </div>
    </div>
  );
}
