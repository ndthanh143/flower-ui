import Link from 'next/link';
import { SocialMediaIcon } from './SocialMediaIcon';

export function Footer() {
  return (
    <div className='border-t py-[60px] px-[40px] lg:flex justify-between'>
      <div className='w-full xl:w-1/3 flex flex-col gap-8'>
        <h2 className='text-base uppercase font-bold'>Menu</h2>
        <div className='flex flex-col gap-6 text-base'>
          <Link href='/'>Contact us & Order inquiry</Link>
          <Link href='/'>Refund and exchange policy</Link>
          <Link href='/'>Flower delivery policy</Link>
        </div>
      </div>
      <div className='w-full xl:w-1/3 flex flex-col gap-8'>
        <h2 className='text-base uppercase font-bold'>CONTACT</h2>
        <div className='flex flex-col gap-6 text-base'>
          <Link href='mailto:example@gmail.com'>example@gmail.com</Link>
          <Link href='/'>(+84) 35 456 0042</Link>
          <div className='w-[40px] h-[40px]'>
            <SocialMediaIcon link='https://www.facebook.com/duythanh.11a4' type='facebook' />
          </div>
        </div>
      </div>
      <div className='w-full xl:w-1/3 flex flex-col gap-8'>
        <h2 className='text-base uppercase font-bold'>STORE UPDATE</h2>
        <div className='flex flex-col gap-6 text-base'>
          <p>
            Our fresh flower operation has moved to Vienna VA. We will be reoping our pick up corner at 705 Kennedy st
            NW soon. If you have any questions send us an email or call us.
          </p>
        </div>
      </div>
    </div>
  );
}
