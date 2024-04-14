'use client';

import { Flex, HeadingCustom, Loading, Modal } from '.';
import { categoryService } from '@/services';
import Link from 'next/link';
import { useFetch } from '@/hooks';
import { useRouter } from 'next/navigation';
import { object, string } from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import cx from 'classnames';

interface ISearchBoxProps {
  onClose: () => void;
  isOpen: boolean;
}

const schema = object({
  searchValue: string(),
});

export function SearchBox({ onClose, isOpen }: ISearchBoxProps) {
  const router = useRouter();

  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema), defaultValues: { searchValue: '' } });

  const { data: categories, isLoading } = useFetch({ queryFn: () => categoryService.getAll() });

  const categoriesList =
    categories?.data.map((category) => ({
      label: category.attributes.name,
      href: `/collections/${category.attributes.slug}`,
    })) || [];

  const handleSearch = (data: { searchValue?: string }) => {
    console.log(data.searchValue);
    router.push(`/search?q=${data.searchValue}`);
    onClose();
  };

  return (
    isOpen && (
      <Modal className={cx('transition-all duration-100 ease-in')}>
        <div className='px-10 flex flex-col gap-10 py-10 relative'>
          <button
            className='flex items-center justify-center p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 absolute right-4 top-4'
            aria-label='Close'
            onClick={onClose}
          >
            <svg
              className='h-[20px] w-[20px] text-gray-800'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
            </svg>
          </button>
          <HeadingCustom title='Tìm kiếm' isSecond />
          <form onSubmit={handleSubmit(handleSearch)}>
            <Flex className='border border-gray-300 rounded-lg overflow-hidden'>
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
          <h2 className='text-lg uppercase'>Danh mục</h2>
          <div className='grid grid-cols-2 gap-2'>
            {categoriesList.map((category, index) => (
              <Link
                href={category.href}
                className={cx('hover:text-yellow-500 focus:bg-gray-200 px-4 py-2 rounded-lg', {
                  'text-left': index % 2 === 0,
                  'text-right lg:text-left': index % 2 !== 0,
                })}
                onClick={onClose}
              >
                <p className='text-base uppercase'>{category.label}</p>
              </Link>
            ))}
          </div>
          {isLoading && (
            <div className='relative flex justify-center'>
              <Loading />
            </div>
          )}
        </div>
      </Modal>
    )
  );
}
