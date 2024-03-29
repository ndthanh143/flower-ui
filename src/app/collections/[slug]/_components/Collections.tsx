'use client';

import { ProductCard } from '@/components';
import { productService } from '@/services';
import { GetProductsResponse } from '@/services/product/types';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';

interface ICollectionsProps {
  categorySlug: string;
}

export function Collections({ categorySlug }: ICollectionsProps) {
  const [page, setPage] = useState<number>(1);
  const [products, setProducts] = useState<GetProductsResponse['data']>();
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const data = await productService.getAll({ categorySlug });
      setProducts(data.data);
    };

    fetchProducts().finally(() => {
      setLoading(false);
    });
  }, []);

  return (
    <div className='grid grid-cols-2 lg:grid-cols-3 gap-[2rem] md:gap-[2.5rem] lg:gap-[4rem] xl:gap-[6rem]'>
      {products?.map((product) => (
        <div className='col-span-1' key={product.id}>
          <ProductCard data={product.attributes} />
        </div>
      ))}
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
  );
}
