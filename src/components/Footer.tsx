import Link from 'next/link';
import { SocialMediaIcon } from './SocialMediaIcon';

export function Footer() {
  return (
    <div className='border-t py-[60px] px-[40px] flex flex-col lg:flex-row justify-between gap-10 lg:gap-2'>
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
          <Link href='mailto:example@gmail.com' className='w-full block'>
            example@gmail.com
          </Link>
          <Link href='/' className='w-full block'>
            (+84) 35 456 0042
          </Link>
          <div className='w-[40px] h-[40px]'>
            <SocialMediaIcon link='https://www.facebook.com/duythanh.11a4' type='facebook' />
          </div>
        </div>
      </div>
      <div className='w-full xl:w-1/3 flex flex-col items-center lg:items-start gap-8'>
        <h2 className='text-base uppercase font-bold text-center lg:text-left'>Cập nhật cửa hàng</h2>
        <div className='flex flex-col gap-6 text-base w-full lg:w-fit'>
          <p className='text-center lg:text-left'>
            Hoạt động bán hoa tươi của chúng tôi đã chuyển về Vienna, Virginia. Chúng tôi sẽ mở lại góc nhận hoa tại số
            705 đường Kennedy St NW sớm nhất có thể. Nếu bạn có bất kỳ câu hỏi nào, vui lòng gửi email cho chúng tôi
            hoặc gọi điện.
          </p>
        </div>
      </div>
    </div>
  );
}
