'use client';

import { ProductCard, Stack } from '@/components';
import { productService } from '@/services';
import Image from 'next/image';
import Skeleton from 'react-loading-skeleton';
import updateImage from '@/assets/images/common/update-image.jpg';
import { useFetch } from '@/hooks';

interface ICollectionsProps {
  categorySlug: string;
}

export function Collections({ categorySlug }: ICollectionsProps) {
  const { data: products, isLoading, isFetched } = useFetch({ queryFn: () => productService.getAll({ categorySlug }) });

  return (
    <>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-[2rem] md:gap-[2.5rem] lg:gap-[4rem] xl:gap-[6rem]'>
        {products?.data.map((product) => (
          <div className='col-span-1' key={product.id}>
            <ProductCard data={product.attributes} />
          </div>
        ))}

        <div className='col-span-2 lg:col-span-3'>
          {isFetched && !products?.data.length && (
            <Stack className='gap-4 items-center'>
              <div className='w-[400px] h-[auto] rounded-xl overflow-hidden'>
                <Image src={updateImage} alt='update' width={0} height={0} sizes='100vw' className='w-full h-full' />
              </div>
              <p className='text-base text-center'>Sản phẩm đang trong quá trình cập nhật...</p>
            </Stack>
          )}
        </div>

        {isLoading &&
          Array(3)
            .fill(true)
            .map((_, index) => (
              <div className='col-span-1 flex flex-col gap-4' key={index}>
                <div className='w-full h-[20rem] md:h-[25rem] lg:h-[30rem] xl:h-[40rem] cursor-pointer overflow-hidden rounded-xl'>
                  <Skeleton width='100%' height='100%' />
                </div>
                <div>
                  <Skeleton width='100%' height={21} className='mb-2' />
                  <Skeleton width='100%' height={21} />
                </div>
              </div>
            ))}
      </div>
    </>
  );
}
