'use client';

import { categoryService } from '@/services';
import { CategoriesResponse } from '@/services/category/types';
import cx from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

interface IDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Drawer({ isOpen, onClose }: IDrawerProps) {
  const [categories, setCategories] = useState<CategoriesResponse>();

  const pathname = usePathname();

  const categoriesList =
    categories?.data.map((category) => ({
      label: category.attributes.name,
      href: `/collections/${category.attributes.slug}`,
    })) || [];

  const navList = [...categoriesList];
  const defaultNavList = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Liên hệ', href: '/contact' },
    { label: 'Bài viết', href: '/blogs' },
  ];

  useEffect(() => {
    const fetchCategories = async () => {
      return categoryService.getAll();
    };

    fetchCategories().then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    if (pathname) {
      onClose();
    }
  }, [pathname]);

  return (
    <div className='fixed h-screen z-50'>
      {/* Drawer */}
      <div
        className={`fixed inset-y-0 left-0 w-3/5 bg-[#f7efec] shadow z-50 transform transition-transform ease-in-out duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Drawer content */}
        <ul className='p-4 flex flex-col gap-4'>
          {defaultNavList.map((nav) => (
            <Link
              href={nav.href}
              key={nav.label}
              className={cx('focus:text-yellow-500', { 'text-yellow-500': pathname === nav.href })}
            >
              <li
                key={nav.label}
                className='text-base uppercase font-heading hover:text-yellow-500 transition-all duration-100 px-4 py-2'
              >
                {nav.label}
              </li>
            </Link>
          ))}
          <span className='w-full h-[1px] bg-gray-300 block' />
          {navList.map((nav) => (
            <Link
              href={nav.href}
              key={nav.label}
              className={cx('focus:text-yellow-500', { 'text-yellow-500': pathname === nav.href })}
            >
              <li
                key={nav.label}
                className='text-base uppercase font-heading hover:text-yellow-500 transition-all duration-100 px-4 py-2'
              >
                {nav.label}
              </li>
            </Link>
          ))}
        </ul>
      </div>

      {/* Main content area */}
      {/* <div className='flex-1 p-4'>Content goes here</div> */}

      {/* Overlay for small screens */}
      {isOpen && <div className='fixed inset-0 bg-black opacity-50 z-40' onClick={onClose}></div>}
    </div>
  );
}
