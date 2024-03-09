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
    <div className='grid grid-cols-2 lg:grid-cols-3 gap-[3rem] md:gap-[4rem] lg:gap-[5rem] xl:gap-[6rem]'>
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
              <Skeleton width='100%' height={400} />
              <div>
                <Skeleton width='100%' height={21} className='mb-2' />
                <Skeleton width='100%' height={21} />
              </div>
            </div>
          ))}
    </div>
  );
}
