import { HeadingCustom } from '.';

export function NewsLetter() {
  return (
    <div className='flex flex-col gap-8 justify-center bg-gray-200 py-[60px]'>
      <HeadingCustom title='Bản tin' isSecond />
      <p className='text-center text-base text-gray-600'>
        Đăng ký nhận tin tức cửa hàng, các chương trình khuyến mãi, giảm giá và nhiều hơn nữa.
      </p>
      <div className='container max-w-6xl rounded-lg overflow-hidden'>
        <div className='w-full grid grid-cols-10'>
          <div className='col-span-8'>
            <input type='text' placeholder='email@example.com' className='w-full h-full p-4 text-base focus' />
          </div>
          <div className='col-span-2'>
            <button className='py-4 px-4 text-sm w-full bg-yellow-400 hover:bg-yellow-300 active:bg-yellow-400'>
              Đăng ký
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
