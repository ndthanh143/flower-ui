'use client';

import Link from 'next/link';

import zaloIcon from '@/assets/images/common/zalo.png';
import phoneIcon from '@/assets/images/common/phone.png';
import messengerIcon from '@/assets/images/common/messenger.png';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import cx from 'classnames';

export function FloatingButton() {
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
    <>
      <div
        className={cx('fixed bottom-[20px] right-8 z-10 transition-all duration-200 ease-in-out', {
          'translate-x-[100px] opacity-0': !visible,
          'translate-x-0 opacity-100': visible,
        })}
      >
        <div className='flex flex-col gap-4 justify-center items-center'>
          <Link
            prefetch
            href='tel:0705740407'
            className='flex items-center justify-center bg-white rounded-full shadow-lg transition duration-300 ease-in-out p-4'
          >
            <div className='h-[45px] w-[45px]'>
              <Image src={phoneIcon} alt='phone' width={0} height={0} sizes='100vw' className='w-full h-full' />
            </div>
          </Link>
          <Link
            prefetch
            href='https://zalo.me/84705740407'
            className='flex items-center justify-center bg-white rounded-full shadow-lg transition duration-300 ease-in-out p-4'
          >
            <div className='h-[45px] w-[45px]'>
              <Image src={zaloIcon} alt='Zalo' width={0} height={0} sizes='100vw' className='w-full h-full' />
            </div>
          </Link>
          <Link
            prefetch
            href='https://m.me/100090497948296'
            className='flex items-center justify-center bg-white rounded-full shadow-lg transition duration-300 ease-in-out p-4'
          >
            <div className='h-[45px] w-[45px]'>
              <Image src={messengerIcon} alt='Zalo' width={0} height={0} sizes='100vw' className='w-full h-full' />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
