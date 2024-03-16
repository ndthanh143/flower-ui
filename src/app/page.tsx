import { Button, HeadingCustom } from '@/components';
import Image from 'next/image';

import bannerHome from '@/assets/images/home-page/banner.webp';
import { categoryService } from '@/services';
import { Collections } from './_components';
import Link from 'next/link';

function Banner() {
  return (
    <div className='w-screen flex flex-col gap-12 items-center'>
      <div className='w-full'>
        <Image
          src={bannerHome}
          alt='banner-home-page'
          width={0}
          height={0}
          sizes='100vw'
          className='object-cover w-full'
        />
      </div>
      <div className='w-[3/5]'>
        <Link href='https://zalo.me/84705740407'>
          <Button className='uppercase mx-auto w-full'>Liên hệ đặt hoa ngay</Button>
        </Link>
      </div>
    </div>
  );
}

export default async function Home() {
  const categories = await categoryService.getAll();

  return (
    <div className='flex flex-col gap-[80px] py-[50px]'>
      {categories.data.map((category, index) => (
        <>
          <div className='container'>
            <div className='flex flex-col gap-[50px]' key={category.id}>
              <HeadingCustom isSecond title={category.attributes.displayTitle} />
              <Collections categorySlug={category.attributes.slug} />
            </div>
          </div>
          {index === 0 && <Banner />}
        </>
      ))}
    </div>
  );
}
