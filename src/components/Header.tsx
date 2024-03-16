'use client';

import cx from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Drawer, NavHeader } from '.';
import { MenuIcon } from '@/assets/images/icons';

function Title({ type }: { type: 'mobile' | 'desktop' }) {
  const [isInView, setIsInView] = useState<boolean>(false);
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    if (spanRef.current) {
      observer.observe(spanRef.current);
    }

    return () => {
      if (spanRef.current) {
        observer.unobserve(spanRef.current);
      }
    };
  }, []);

  return (
    <p
      className={
        type === 'desktop'
          ? 'text-2xl text-[#69402B] text-center tracking-widest'
          : 'text-lg md:text-xl text-[#69402B] active:opacity-80 tracking-wider'
      }
      style={{ fontFamily: 'var(--font-logo-main)' }}
    >
      THE SUNNY FLOWER
      <span
        ref={spanRef}
        className={cx('block h-[2px] rounded-lg bg-[#69402B] transition-all duration-300', {
          'w-0': !isInView,
          'w-full': isInView,
        })}
      />
    </p>
  );
}

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
          className='hidden lg:flex w-fit hover:opacity-80 transition-all duration-200 mx-auto gap-8 items-end'
        >
          <div className='w-[6rem] cursor-pointer mx-auto'>
            <Image src='/logo2.png' alt='logo' width={0} height={0} sizes='100vw' className='w-full h-full' />
          </div>
          <div className='flex flex-col'>
            <p
              className='text-base text-[#69402B] text-left font-[400p tracking-wider'
              style={{ fontFamily: 'var(--font-logo-sub)' }}
            >
              Gift for your Life
            </p>
            <Title type='desktop' />
            {/* <p
              className='text-2xl text-[#69402B] text-center tracking-widest'
              style={{ fontFamily: 'var(--font-logo-main)' }}
            >
              THE SUNNY FLOWER
              <span
                ref={spanRef}
                className={cx('block h-[2px] rounded-lg bg-[#69402B] transition-all duration-300', {
                  'w-0': !isInView,
                  'w-full': isInView,
                })}
              />
            </p> */}
          </div>
        </Link>
        <div className='hidden lg:block'>
          <NavHeader />
        </div>
        <div className='flex lg:hidden items-center justify-between container'>
          <div onClick={() => setOpenDrawer(true)}>
            <MenuIcon width={30} height={30} color='#69402B' />
          </div>
          <Link href='/'>
            <Title type='mobile' />
            {/* <p
              className='text-lg md:text-xl text-[#69402B] active:opacity-80 tracking-wider'
              style={{ fontFamily: 'var(--font-logo-main)' }}
            >
              THE SUNNY FLOWER
              <span
                ref={spanRef}
                className={cx('block h-[2px] rounded-lg bg-[#69402B] transition-all duration-300', {
                  'w-0': !isInView,
                  'w-full': isInView,
                })}
              />
            </p> */}
          </Link>
          <Link href='/' className=''>
            <div className='w-[4.5rem] cursor-pointer hover:opacity-80 active:opacity-80 mx-auto'>
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
