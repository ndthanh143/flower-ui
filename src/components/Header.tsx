'use client';

import cx from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Drawer, NavHeader } from '.';
import { MenuIcon } from '@/assets/images/icons';

export function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isOpenDrawer, setOpenDrawer] = useState(false);
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
    <>
      <div
        className={cx(
          'bg-[#f7efec] flex flex-col gap-8 py-8 sticky w-screen z-10 top-0 transition-all ease-in-out duration-300',
          { 'translate-y-0': visible, '-translate-y-full': !visible },
        )}
      >
        <Link href='/' className='hidden lg:block w-fit hover:opacity-80 transition-all duration-200 mx-auto'>
          <div className='w-[4.5rem] cursor-pointer mx-auto'>
            <Image src='/logo2.png' alt='logo' width={0} height={0} sizes='100vw' className='w-full h-full' />
          </div>
          <p className='text-xl text-[#69402B] text-center font-[400p'>Gift for your Life</p>
          <h2 className='text-3xl text-[#69402B] text-center font-[800] tracking-widest'>The Sunny Flower</h2>
        </Link>
        <div className='hidden lg:block'>
          <NavHeader />
        </div>
        <div className='flex lg:hidden items-center justify-between container'>
          <div onClick={() => setOpenDrawer(true)}>
            <MenuIcon width={30} height={30} />
          </div>
          <Link href='/'>
            <h2 className='text-xl text-gray-700'>The Sunny Flower</h2>
          </Link>
          <Link href='/' className=''>
            <div className='w-[4.5rem] cursor-pointer hover:opacity-80 mx-auto'>
              <Image src='/logo2.png' alt='logo' width={0} height={0} sizes='100vw' className='w-full h-full' />
            </div>
          </Link>
        </div>
      </div>
      <div className='block lg:hidden'>
        <Drawer isOpen={isOpenDrawer} onClose={() => setOpenDrawer(false)} />
      </div>
    </>
  );
}
