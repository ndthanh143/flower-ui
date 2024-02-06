'use client';

import cx from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Header() {
  const navList = [
    { label: 'Gift box', href: '/' },
    { label: 'Sympathy', href: '/' },
    { label: 'All flowers', href: '/' },
    { label: 'All plants', href: '/' },
    { label: 'Contact us', href: '/' },
    { label: 'Subscription', href: '/' },
    { label: 'Blog', href: '/' },
  ];

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <div
      className={cx(
        'bg-[#f7efec] flex flex-col gap-8 py-8 sticky w-screen z-10 top-0 transition-all ease-in-out duration-300',
        { 'translate-y-0': visible, '-translate-y-full': !visible },
      )}
    >
      <div className='w-[30rem] cursor-pointer hover:opacity-80 mx-auto'>
        <Image src='/logo.webp' alt='logo' width={0} height={0} sizes='100vw' className='w-full h-full' />
      </div>
      <ul className='flex justify-center gap-8'>
        {navList.map((nav) => (
          <li key={nav.label} className='text-base uppercase'>
            <Link href={nav.href}>{nav.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
