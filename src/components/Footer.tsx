import Link from 'next/link';
import { SocialMediaIcon } from './SocialMediaIcon';
import { AddressIcon, PhoneIcon } from '@/assets/images/icons';

export function Footer() {
  return (
    <div className='border-t py-[60px] px-[40px] flex flex-col lg:flex-row justify-between gap-[2.5rem] md:gap-[6rem] lg:gap-[8rem]'>
      <div className='w-full xl:w-1/3 flex flex-col items-center lg:items-start gap-8'>
        <h2 className='text-base uppercase font-bold'>Menu</h2>
        <div className='flex flex-col gap-6 text-base text-center lg:text-left w-full lg:w-fit'>
          <Link href='/' className='w-full block'>
            Liên hệ & Đặt hàng
          </Link>
          <Link href='/' className='w-full block'>
            Chính sách đổi trả hàng
          </Link>
          <Link href='/' className='w-full block'>
            Chính sách vận chuyển
          </Link>
        </div>
      </div>
      <div className='w-full xl:w-1/3 flex flex-col items-center lg:items-start gap-8'>
        <h2 className='text-base uppercase font-bold'>Liên hệ</h2>
        <div className='flex flex-col items-center lg:items-start gap-6 text-base text-center lg:text-left w-full lg:w-fit'>
          {/* <Link href='mailto:example@gmail.com' className='w-full block'>
            example@gmail.com
          </Link> */}
          <Link href='tel:0705740407' className='w-full block'>
            <div className='flex items-center justify-center lg:justify-start gap-4'>
              {/* <div className='w-[20px] h-[20px]'>
                <PhoneIcon />
              </div> */}
              <p>(+84) 705 740 407</p>
            </div>
          </Link>
          <div className='flex items-center justify-center lg:justify-start gap-4'>
            {/* <div className='w-[20px] h-[20px]'>
              <AddressIcon />
            </div> */}
            <p className=''>Số 38, Nguyễn Trãi, P. Thanh Bình, TP Biên Hoà, Đồng Nai (Chợ Biên Hoà)</p>
          </div>
          <div className='flex items-center gap-4'>
            <div className='w-[40px] h-[40px]'>
              <SocialMediaIcon link='https://www.facebook.com/profile.php?id=100090497948296' type='facebook' />
            </div>
            <p className='font-bold'>The Sunny Flowers</p>
          </div>
        </div>
      </div>
      <div className='w-full xl:w-1/3 flex flex-col items-center lg:items-start gap-8'>
        <h2 className='text-base uppercase font-bold text-center lg:text-left'>Về chúng tôi</h2>
        <div className='flex flex-col gap-6 text-base w-full lg:w-fit'>
          <p className='text-center lg:text-left'>
            Thiết kế hoa theo yêu cầu của bạn tặng sinh nhật, ngày kỉ niệm, ngày cưới, khai trương, hoa viếng…🌸
          </p>
        </div>
      </div>
    </div>
  );
}
