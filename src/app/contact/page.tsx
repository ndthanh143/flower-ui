import Image from 'next/image';
import { ContactForm } from './_components';

import storeImage from '@/assets/images/contact-page/store.jpg';
import storeImage1 from '@/assets/images/contact-page/store-1.jpg';
import storeImage2 from '@/assets/images/contact-page/store-2.jpg';

export default function ContactPage() {
  return (
    <div>
      <div className='container'>
        <div className='flex flex-col gap-8 pb-[60px] pt-[60px]'>
          <div className='flex flex-col items-center gap-4'>
            <h2 className='uppercase font-[400] text-xl text-center'>Liên hệ với chúng tôi</h2>
            <span className='block w-12 h-1 rounded-lg bg-yellow-400' />
          </div>
          <p className='text-base text-center'>
            TÌNH TRẠNG GIAO HÀNG, CHĂM SÓC HOA, HỖ TRỢ ĐẶT HÀNG THEO YÊU CẦU XIN VUI LÒNG ĐỂ CHÚNG TÔI GIÚP BẠN.
          </p>
          <p className='text-base text-center'>GỬI CHO CHÚNG TÔI MỘT TIN NHẮN, CHÚNG TÔI SẼ TRẢ LỜI NGAY KHI CÓ THỂ.</p>
          <div className='flex justify-center gap-8'>
            <div className='hidden lg:block w-[300px] h-[400px]'>
              <Image src={storeImage1} alt='store-image' width={0} height={0} sizes='100vw' className='w-auto h-full' />
            </div>
            <div className='h-[400px]'>
              <Image src={storeImage} alt='store-image' width={0} height={0} sizes='100vw' className='w-auto h-full' />
            </div>
            <div className='hidden lg:block w-[300px] h-[400px]'>
              <Image src={storeImage2} alt='store-image' width={0} height={0} sizes='100vw' className='w-auto h-full' />
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center bg-gray-100 py-[40px]'>
        <div className='container max-w-6xl'>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
