'use client';

import Link from 'next/link';
import { categoryService } from '@/services';
import { useEffect, useState } from 'react';
import { CategoriesResponse } from '@/services/category/types';

export function NavHeader() {
  const [categories, setCategories] = useState<CategoriesResponse>();

  const categoriesList =
    categories?.data.map((category) => ({
      label: category.attributes.name,
      href: `/collections/${category.attributes.slug}`,
    })) || [];

  const navList = [
    ...categoriesList,
    { label: 'Liên hệ', href: '/contact' },
    { label: 'Đăng ký', href: '/' },
    { label: 'Blog', href: '/blogs' },
  ];

  useEffect(() => {
    const fetchCategories = async () => {
      return categoryService.getAll();
    };

    fetchCategories().then((data) => setCategories(data));
  }, []);

  return (
    categoriesList && (
      <ul className='flex justify-center gap-8'>
        {navList.map((nav) => (
          <Link href={nav.href} key={nav.label}>
            <li
              key={nav.label}
              className='text-base uppercase font-heading hover:text-yellow-500 transition-all duration-100 px-4 py-2'
            >
              {nav.label}
            </li>
          </Link>
        ))}
      </ul>
    )
  );
}
