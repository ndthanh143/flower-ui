'use client';

import cx from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { NavHeader } from '.';

export function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 200);
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
      <Link href='/'>
        <div className='w-[30rem] cursor-pointer hover:opacity-80 mx-auto'>
          <Image src='/logo.webp' alt='logo' width={0} height={0} sizes='100vw' className='w-full h-full' />
        </div>
      </Link>
      <div>
        <NavHeader />
      </div>
    </div>
  );
}
