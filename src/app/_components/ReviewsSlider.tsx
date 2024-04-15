'use client';

import Slider from 'react-slick';
import { Rating } from '@/components';
import Image from 'next/image';
import Link from 'next/link';

export function ReviewsSlider({ reviews }: { reviews: any[] }) {
  return (
    <div className='container py-[20px]'>
      <Slider
        slidesToShow={5}
        slidesToScroll={1}
        infinite
        autoplay
        autoplaySpeed={3000}
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            },
          },
        ]}
      >
        {reviews.map((review, index) => (
          <div className='flex flex-col gap-10 px-4' key={index}>
            <div className='relative p-4 bg-gray-200 rounded-lg min-h-[120px]'>
              <span className='absolute border-8 border-transparent border-t-gray-200 -bottom-6 left-5' />
              <div className='flex justify-between'>
                <Rating value={review.rating} size='small' />
                <Image src={'/google.png'} alt='google' width={18} height={18} />
              </div>
              <p className='text-base mt-4 text-ellipsis line-clamp-3'>{review.text}</p>
            </div>
            <Link prefetch href={review.author_url}>
              <div className='flex gap-4 items-center mt-8'>
                <div className='rounded-full overflow-hidden w-[40px] h-[40px]'>
                  <Image
                    src={review.profile_photo_url}
                    alt={review.author_name}
                    width={0}
                    height={0}
                    sizes='100vw'
                    className='w-full h-full'
                  />
                </div>
                <div className='flex flex-col'>
                  <p className='text-base font-bold text-blue-500'>{review.author_name}</p>
                  <p className='text-sm text-gray-400'>{review.relative_time_description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
      <div className='flex justify-center mt-8'>
        <Link
          prefetch
          href='https://www.google.com/maps/place/THE+SUNNY+FLOWER/@10.9461746,106.8133451,17z/data=!4m8!3m7!1s0x3174d93587929823:0xddf05f8adb82ccef!8m2!3d10.9461746!4d106.81592!9m1!1b1!16s%2Fg%2F11l2vhv07l?entry=ttu'
        >
          <button className='text-base p-4 border rounded-lg hover:bg-gray-200 transition-all duration-100 w-full lg:w-fit'>
            Để lại đánh giá
          </button>
        </Link>
      </div>
    </div>
  );
}
