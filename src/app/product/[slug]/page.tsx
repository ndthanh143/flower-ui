import { SlideShow } from '@/components';

export default function ProductDetail({ params }: { params: { slug: string } }) {
  return (
    <div className='flex flex-col gap-[4rem]'>
      <div className='flex flex-col items-center'>
        <h1 className='uppercase text-lg text-center leading-[4rem]'>Designer choice bouquet</h1>
        <span className='block w-[40px] h-[4px] rounded-lg bg-yellow-400' />
      </div>
      <div className='container max-w-5xl mx-auto'>
        <SlideShow
          images={[
            'https://therootsandblooms.com/cdn/shop/files/11DE57B8-558A-48F9-9BAB-12897D411A93_540x.heic?v=1701986798',
            'https://therootsandblooms.com/cdn/shop/files/7FD8B49F-AE3F-426C-9630-5F15762F7FD4_900x.heic?v=1701986798',
            'https://therootsandblooms.com/cdn/shop/files/11DE57B8-558A-48F9-9BAB-12897D411A93_900x.heic?v=1701986798',
          ]}
        />
      </div>
    </div>
  );
}
