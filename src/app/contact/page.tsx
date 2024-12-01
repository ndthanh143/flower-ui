import Image from 'next/image';
import storeImage from '@/assets/images/contact-page/store.jpg';
import storeImage1 from '@/assets/images/contact-page/store-1.jpg';
import storeImage2 from '@/assets/images/contact-page/store-2.jpg';

import { GoogleMapAddress, SliderImage } from './_components';
import { Metadata } from 'next';
import { seoService } from '@/services';
import { getFullPageUrl, transformMetadata } from '@/utils';
import { ROUTES } from '@/constants';

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await seoService.getSeoService(getFullPageUrl(ROUTES.CONTACT));

  return transformMetadata(seoData.attributes);
}

export default function ContactPage() {
  return (
    <div>
      <div className='container'>
        <div className='flex flex-col gap-8 pb-[60px] pt-[60px]'>
          <div className='flex flex-col items-center gap-4'>
            <h2 className='uppercase font-[400] text-xl text-center'>Liên hệ với cửa hàng</h2>
            <span className='block w-12 h-1 rounded-lg bg-yellow-400' />
          </div>
          <div className='flex flex-col gap-2 container max-w-[1024px]'>
            <p className='text-base text-center'>
              Cảm ơn bạn đã ghé thăm cửa hàng, Hãy để <b>The Sunny Flower</b> Thiết kế hoa theo yêu cầu của bạn tặng
              sinh nhật, ngày kỉ niệm, ngày cưới, khai trương, hoa viếng…🌸 Đào tạo dạy cắm hoa và có xuất hóa đơn VAT
              nếu khách hàng yêu cầu
            </p>
            <p className='text-base text-center'>
              Liên hệ với cửa hàng để đặt hoa ngay, <b>The Sunny Flower</b> rất vui khi được phục vụ những bó hoa tươi
              đẹp nhất tới bạn !
            </p>
          </div>

          <div className='block lg:hidden'>
            <SliderImage />
          </div>

          <div className='hidden lg:flex justify-center gap-8'>
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
      <GoogleMapAddress />
    </div>
  );
}
