'use client';

import Link from 'next/link';
import { categoryService } from '@/services';
import { Fragment, useEffect, useState } from 'react';
import { CategoriesResponse } from '@/services/category/types';
import cx from 'classnames';
import { usePathname } from 'next/navigation';
import { Flex } from '.';
import flowerIcon from '@/assets/images/common/flower-icon.webp';
import Image from 'next/image';
import { convertImageUrl } from '@/utils';
import { CategoryMappedList } from '@/app/layout';

export function NavHeader({
  categories,
  categoriesList,
}: {
  categories: CategoriesResponse;
  categoriesList: CategoryMappedList;
}) {
  const pathname = usePathname();

  const defaultNavList = [
    { label: 'Liên hệ', href: '/contact' },
    // { label: 'Đăng ký', href: '/' },
    { label: 'Bài viết', href: '/blogs' },
  ];
  const navList = [{ label: 'Trang chủ', href: '/' }, ...defaultNavList];

  return (
    categoriesList && (
      <div className='flex flex-col gap-3 relative'>
        <ul className='flex justify-center gap-8'>
          {navList.map((nav, index) => (
            <Fragment key={index}>
              <Link prefetch={false} href={nav.href}>
                <li
                  key={nav.label}
                  className={cx(
                    'text-base uppercase font-heading hover:text-yellow-500 transition-all duration-100 px-4 py-8',
                    { 'text-yellow-500': pathname === nav.href },
                  )}
                >
                  {nav.label}
                  <span
                    className={cx('block h-[1px] rounded-lg bg-yellow-500 transition-all duration-300', {
                      'w-full': pathname === nav.href,
                      'w-0': pathname !== nav.href,
                    })}
                  />
                </li>
              </Link>
              {index === 0 && (
                <div className='group'>
                  <li
                    className={cx(
                      'text-base uppercase font-heading hover:text-yellow-500 transition-all duration-100 px-4 py-8 cursor-pointer',
                      { 'text-yellow-500': pathname.includes('collections') },
                    )}
                  >
                    Sản phẩm
                    <span
                      className={cx('block h-[1px] rounded-lg bg-yellow-500 transition-all duration-300', {
                        'w-full': pathname.includes('collections'),
                        'w-0': !pathname.includes('collections'),
                      })}
                    />
                  </li>
                  <div
                    className={cx(
                      'absolute top-[100%] left-0 bg-[#f7efec] rounded-lg z-10 w-screen translate-y-[10px] opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-in duration-150 shadow-inner',
                    )}
                  >
                    <div className='relative container py-4'>
                      {categoriesList.map((category) => (
                        <Flex className='group/item w-full' key={category.href}>
                          <Link prefetch={false} href={category.href} className='w-1/4 hover:text-yellow-500'>
                            <Flex className='w-full border-r border-yellow-500 border-solid'>
                              <Image
                                src={flowerIcon}
                                width={20}
                                height={20}
                                alt='flower-icon'
                                className={cx('transition-all duration-200 opacity-0 group-hover/item:opacity-100', {
                                  'opacity-100': pathname === category.href,
                                  'opacity-0': pathname !== category.href,
                                })}
                              />

                              <span
                                className={cx(
                                  'text-left text-base uppercase font-heading transition-all duration-100 px-4 py-4',
                                  { 'text-yellow-500': pathname === category.href },
                                )}
                              >
                                {category.label}
                              </span>
                              {category.images.length === 0 && (
                                <span className='bg-yellow-500 rounded-xl select-none px-2 py-1 text-sm text-white'>
                                  Sắp có
                                </span>
                              )}
                            </Flex>
                          </Link>
                          <div className='w-2/3 invisible group-hover/item:visible absolute grid grid-cols-3 gap-10 right-0 top-[50%] translate-y-[-50%]'>
                            {category.images.map((image, imageIndex) => (
                              <div className='col-span-1 w-full h-[300px]' key={image.id}>
                                <Image
                                  key={imageIndex}
                                  src={image.url}
                                  alt={image.id.toString()}
                                  width={0}
                                  height={0}
                                  sizes='100vw'
                                  className='w-full h-full object-cover'
                                />
                              </div>
                            ))}
                          </div>
                        </Flex>
                      ))}
                    </div>
                    {/* </div> */}
                    {/* </div> */}
                  </div>
                </div>
              )}
            </Fragment>
          ))}
        </ul>
      </div>
    )
  );
}
