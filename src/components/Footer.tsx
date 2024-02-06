import Link from 'next/link';

export function Footer() {
  return (
    <div className='border-t py-[80px] px-[40px] lg:flex justify-between'>
      <div className='w-full xl:w-1/3 flex flex-col gap-8'>
        <h2 className='text-lg uppercase'>Menu</h2>
        <div className='flex flex-col gap-6 text-base'>
          <Link href='/'>Contact us & Order inquiry</Link>
          <Link href='/'>Refund and exchange policy</Link>
          <Link href='/'>Flower delivery policy</Link>
        </div>
      </div>
      <div className='w-full xl:w-1/3 flex flex-col gap-8'>
        <h2 className='text-lg uppercase'>CONTACT</h2>
        <div className='flex flex-col gap-6 text-base'>
          <Link href='/'>hello@therootsandblooms.com</Link>
          <Link href='/'>202-554-3480</Link>
          <Link href='/'>Flower delivery policy</Link>
        </div>
      </div>
      <div className='w-full xl:w-1/3 flex flex-col gap-8'>
        <h2 className='text-lg uppercase'>STORE UPDATE</h2>
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
