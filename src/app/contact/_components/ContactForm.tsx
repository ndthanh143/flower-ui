'use client';

import { Button } from '@/components';
import { contactService } from '@/services';
import { TCreateContactPayload } from '@/services/contact/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { object, string } from 'yup';

const schema = object({
  contactName: string().required('Vui lòng điền tên của bạn'),
  phone: string().required('Vui lòng điền số điện thoại'),
  email: string().required('Vui lòng điền email'),
  message: string().required('Vui lòng điền nội dung'),
});

export function ContactForm() {
  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });

  const handleSubmitForm = async (data: TCreateContactPayload) => {
    await contactService.createContact(data);
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
        <div className='col-span-1'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='' className='text-base'>
              Name
            </label>
            <input
              type='text'
              className='bg-white border border-gray-600 px-6 py-4 text-base rounded w-full'
              {...register('contactName')}
            />
          </div>
        </div>

        <div className='col-span-1'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='' className='text-base'>
              Email
            </label>
            <input
              type='text'
              className='bg-white border border-gray-600 px-6 py-4 text-base rounded w-full'
              {...register('email')}
            />
          </div>
        </div>

        <div className='col-span-1 lg:col-span-2'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='' className='text-base'>
              Phone Number
            </label>
            <input
              type='text'
              className='bg-white border border-gray-600 px-6 py-4 text-base rounded w-full'
              {...register('phone')}
            />
          </div>
        </div>

        <div className='col-span-1 lg:col-span-2'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='' className='text-base'>
              Message
            </label>
            <textarea
              className='bg-white border border-gray-600 px-6 py-4 text-base rounded w-full'
              rows={8}
              {...register('message')}
            />
          </div>
        </div>

        <div className='col-span-1 lg:col-span-2'>
          <Button className='w-full !py-6'>Send</Button>
        </div>
      </div>
    </form>
  );
}
