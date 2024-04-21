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

export function NavHeader() {
  const pathname = usePathname();

  const [categories, setCategories] = useState<CategoriesResponse>();

  const categoriesList =
    categories?.data.map((category) => ({
      label: category.attributes.name,
      href: `/collections/${category.attributes.slug}`,
    })) || [];

  const defaultNavList = [
    { label: 'Liên hệ', href: '/contact' },
    // { label: 'Đăng ký', href: '/' },
    { label: 'Bài viết', href: '/blogs' },
  ];
  const navList = [{ label: 'Trang chủ', href: '/' }, ...defaultNavList];

  useEffect(() => {
    const fetchCategories = async () => {
      return categoryService.getAll();
    };

    fetchCategories().then((data) => setCategories(data));
  }, []);

  return (
    categoriesList && (
      <div className='flex flex-col gap-3 relative'>
        {/* <ul className='flex justify-center gap-8 overflow-x-scroll'>
          {defaultNavList.map((nav) => (
            <Link prefetch href={nav.href} key={nav.label}>
              <li
                key={nav.label}
                className={cx(
                  'text-base uppercase font-heading hover:text-yellow-500 transition-all duration-100 px-4 py-2',
                  { 'text-yellow-500': pathname === nav.href },
                )}
              >
                {nav.label}
              </li>
            </Link>
          ))}
        </ul> */}
        <ul className='flex justify-center gap-8'>
          {navList.map((nav, index) => (
            <Fragment key={index}>
              <Link prefetch href={nav.href}>
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
                    <div className='grid grid-cols-10 py-8'>
                      <div className='col-span-3 flex flex-col items-center border-r border-yellow-500 border-solid'>
                        {categoriesList.map((category) => (
                          <Flex className='gap-2 w-full justify-center' key={category.href}>
                            <Image
                              src={flowerIcon}
                              width={20}
                              height={20}
                              alt='flower-icon'
                              className={cx('transition-all duration-200 opacity-0', {
                                'opacity-100': pathname === category.href,
                                'opacity-0': pathname !== category.href,
                              })}
                            />
                            <Link
                              prefetch
                              href={category.href}
                              key={category.label}
                              className={cx(
                                'text-left text-base uppercase font-heading hover:text-yellow-500 transition-all duration-100 px-4 py-4',
                                { 'text-yellow-500': pathname === category.href },
                              )}
                            >
                              {category.label}
                            </Link>
                          </Flex>
                        ))}
                      </div>
                    </div>
                    <div className='col-span-7'></div>
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
