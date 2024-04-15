'use client';

import Link from 'next/link';
import { categoryService } from '@/services';
import { useEffect, useState } from 'react';
import { CategoriesResponse } from '@/services/category/types';
import cx from 'classnames';
import { usePathname } from 'next/navigation';

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
  const navList = [{ label: 'Trang chủ', href: '/' }, ...categoriesList, ...defaultNavList];

  useEffect(() => {
    const fetchCategories = async () => {
      return categoryService.getAll();
    };

    fetchCategories().then((data) => setCategories(data));
  }, []);

  return (
    categoriesList && (
      <div className='flex flex-col gap-3'>
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
        <ul className='flex justify-center gap-8 overflow-x-scroll'>
          {navList.map((nav) => (
            <Link prefetch href={nav.href} key={nav.label}>
              <li
                key={nav.label}
                className={cx(
                  'text-base uppercase font-heading hover:text-yellow-500 transition-all duration-100 px-4 py-2',
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
          ))}
        </ul>
      </div>
    )
  );
}
