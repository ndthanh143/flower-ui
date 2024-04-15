'use client';

import { categoryService } from '@/services';
import { CategoriesResponse } from '@/services/category/types';
import cx from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SocialMediaIcon } from './SocialMediaIcon';

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
              prefetch
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
              prefetch
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
          <Link prefetch href='tel:0705740407' className='w-full block focus:text-yellow-500'>
            <p className='text-base'>(+84) 705 740 407</p>
          </Link>
          <Link
            prefetch
            href={
              'https://www.google.com/maps/place/THE+SUNNY+FLOWER/@10.946182,106.815896,21z/data=!4m14!1m7!3m6!1s0x3174d93587929823:0xddf05f8adb82ccef!2sTHE+SUNNY+FLOWER!8m2!3d10.9461746!4d106.81592!16s%2Fg%2F11l2vhv07l!3m5!1s0x3174d93587929823:0xddf05f8adb82ccef!8m2!3d10.9461746!4d106.81592!16s%2Fg%2F11l2vhv07l?hl=en&entry=ttu'
            }
            className='w-full block focus:text-yellow-500'
          >
            <p className='text-base'>Số 38, Nguyễn Trãi, P. Thanh Bình, TP Biên Hoà, Đồng Nai (Chợ Biên Hoà)</p>
          </Link>
          <div className='flex items-center gap-4'>
            <div className='w-[40px] h-[40px]'>
              <SocialMediaIcon link='https://www.facebook.com/profile.php?id=100090497948296' type='facebook' />
            </div>
            <p className='text-base font-bold'>The Sunny Flowers</p>
          </div>
        </ul>
      </div>

      {/* Main content area */}
      {/* <div className='flex-1 p-4'>Content goes here</div> */}

      {/* Overlay for small screens */}
      {isOpen && <div className='fixed inset-0 bg-black opacity-50 z-40' onClick={onClose}></div>}
    </div>
  );
}
