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
        <Link
          href='/'
          className='hidden lg:flex w-fit hover:opacity-80 transition-all duration-200 mx-auto flex-col gap-1'
        >
          <div className='w-[4.5rem] cursor-pointer mx-auto'>
            <Image src='/logo2.png' alt='logo' width={0} height={0} sizes='100vw' className='w-full h-full' />
          </div>
          <p
            className='text-xl text-[#69402B] text-center font-[400p tracking-wider'
            style={{ fontFamily: 'var(--font-logo-sub)' }}
          >
            Gift for your Life
          </p>
          <p
            className='text-2xl text-[#69402B] text-center tracking-widest'
            style={{ fontFamily: 'var(--font-logo-main)' }}
          >
            THE SUNNY FLOWER
          </p>
        </Link>
        <div className='hidden lg:block'>
          <NavHeader />
        </div>
        <div className='flex lg:hidden items-center justify-between container'>
          <div onClick={() => setOpenDrawer(true)}>
            <MenuIcon width={30} height={30} />
          </div>
          <Link href='/'>
            <h2 className='text-xl text-gray-700' style={{ fontFamily: 'var(--font-logo-main)' }}>
              The Sunny Flower
            </h2>
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
