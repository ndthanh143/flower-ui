'use client';

import { Flex, HeadingCustom, LoadingContainer } from '@/components';
import { useFetch } from '@/hooks';
import { productService } from '@/services';
import { yupResolver } from '@hookform/resolvers/yup';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { UseFormReturn, useForm } from 'react-hook-form';
import { number, object, string } from 'yup';
import { Collections, Filter } from './_components';

const schema = object({ searchValue: string(), min: number(), max: number() });

export type FormSearchType = UseFormReturn<
  {
    min?: number | undefined;
    max?: number | undefined;
    searchValue?: string | undefined;
  },
  any,
  {
    min?: number | undefined;
    max?: number | undefined;
    searchValue?: string | undefined;
  }
>;

export default function SearchPage() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      searchValue: searchParams.get('q') || '',
      min: 0,
      max: 1000000,
    },
  });

  const { register, getValues, handleSubmit, watch } = form;

  const {
    data: products,
    isLoading: isLoadingProducts,
    refetch: refetchProducts,
    isFetched: isFetchedProducts,
  } = useFetch({ queryFn: () => productService.getAll({ q: getValues('searchValue') }) });

  const handleSearch = (data: { searchValue?: string }) => {
    router.push(`${pathname}?q=${data.searchValue}`);
  };

  useEffect(() => {
    if (isFetchedProducts) {
      refetchProducts();
    }
  }, [searchParams, watch('min'), watch('max')]);

  return (
    <LoadingContainer loading={isLoadingProducts}>
      <div className='container py-[50px]'>
        <HeadingCustom title='Kết quả tìm kiếm' />

        <form onSubmit={handleSubmit(handleSearch)} className='mt-10 mx-auto max-w-3xl'>
          <Flex className='border border-gray-300 rounded-lg overflow-hidden justify-center'>
            <input
              id='search-box'
              type='text'
              className='px-6 py-6 w-full text-base'
              placeholder='Tìm kiếm trong cửa hàng...'
              {...register('searchValue')}
            />
            <button type='submit'>
              <span className='flex items-center justify-center px-4 border-l'>
                <svg
                  className='h-[20px] w-[20px] text-gray-600'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
                </svg>
              </span>
            </button>
          </Flex>
        </form>
        {products?.data.length === 0 && (
          <p className='text-lg text-center my-8'>
            Không có kết quả tìm kiếm cho <b>{searchParams.get('q')}</b>
          </p>
        )}
        {products && products.data.length > 0 && (
          <p className='text-lg text-center my-8'>{products.data.length} sản phẩm</p>
        )}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mt-[20px] lg:mt-[80px]'>
          <div className='col-span-1'>
            <Filter form={form} />
          </div>
          <div className='col-span-1 md:col-span-3'>{products && <Collections data={products} />}</div>
        </div>
      </div>
    </LoadingContainer>
  );
}
