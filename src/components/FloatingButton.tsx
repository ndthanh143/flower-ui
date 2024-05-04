import Link from 'next/link';

import zaloIcon from '@/assets/images/common/zalo.png';
import phoneIcon from '@/assets/images/common/phone.png';
import messengerIcon from '@/assets/images/common/messenger.png';

import Image from 'next/image';

export function FloatingButton() {
  return (
    <>
      <div className='fixed bottom-[20px] right-8 z-10'>
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
            href='https://www.messenger.com/t/100090497948296'
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
