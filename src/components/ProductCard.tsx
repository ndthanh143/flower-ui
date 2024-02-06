import Image from 'next/image';

export function ProductCard() {
  return (
    <div className='flex flex-col gap-4 relative'>
      <div className='w-full h-[40rem] cursor-pointer overflow-hidden'>
        <Image
          src={'https://therootsandblooms.com/cdn/shop/files/Screenshot2023-12-07at12.44.17PM_1080x.png?v=1701973786'}
          alt='flower'
          width={0}
          height={0}
          sizes='100vw'
          className='w-full h-full hover:scale-110 duration-500'
        />
      </div>
      <div className='text-center'>
        <h2 className='uppercase text-base mb-2'>Chậu Lan Hồ Điệp Tết - Phú Quý</h2>
        <p className='text-base'>120.000đ</p>
      </div>
      <span className='uppercase px-8 py-4 bg-gray-200 absolute right-0 text-sm'>Sold out</span>
    </div>
  );
}
