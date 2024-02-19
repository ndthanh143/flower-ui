import { Button } from '@/components';

export function ContactForm() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
      <div className='col-span-1'>
        <div className='flex flex-col gap-2'>
          <label htmlFor='' className='text-base'>
            Name
          </label>
          <input type='text' className='bg-white border border-gray-600 px-6 py-4 text-base rounded w-full' />
        </div>
      </div>

      <div className='col-span-1'>
        <div className='flex flex-col gap-2'>
          <label htmlFor='' className='text-base'>
            Email
          </label>
          <input type='text' className='bg-white border border-gray-600 px-6 py-4 text-base rounded w-full' />
        </div>
      </div>

      <div className='col-span-1 lg:col-span-2'>
        <div className='flex flex-col gap-2'>
          <label htmlFor='' className='text-base'>
            Phone Number
          </label>
          <input type='text' className='bg-white border border-gray-600 px-6 py-4 text-base rounded w-full' />
        </div>
      </div>

      <div className='col-span-1 lg:col-span-2'>
        <div className='flex flex-col gap-2'>
          <label htmlFor='' className='text-base'>
            Message
          </label>
          <textarea className='bg-white border border-gray-600 px-6 py-4 text-base rounded w-full' rows={8} />
        </div>
      </div>

      <div className='col-span-1 lg:col-span-2'>
        <Button className='w-full !py-6'>Send</Button>
      </div>
    </div>
  );
}
