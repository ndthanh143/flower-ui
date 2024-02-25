import { PropsWithChildren } from 'react';

export function Modal({ children }: PropsWithChildren) {
  return (
    <div className='w-screen h-screen'>
      <div className='fixed inset-0 bg-[rgba(0,0,0,0.7)] z-10'>
        <div className='flex justify-center items-center h-full'>
          <div className='bg-white rounded-xl overflow-hidden w-[800px] h-[700px]'>{children}</div>
        </div>
      </div>
    </div>
  );
}
