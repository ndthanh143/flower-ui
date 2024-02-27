import { DetailedHTMLProps, DetailsHTMLAttributes, PropsWithChildren } from 'react';

interface IModalProps
  extends PropsWithChildren<DetailedHTMLProps<DetailsHTMLAttributes<HTMLDivElement>, HTMLDivElement>> {}

export function Modal({ children, ...props }: IModalProps) {
  return (
    <div className='w-screen h-screen' {...props}>
      <div className='fixed inset-0 bg-[rgba(0,0,0,0.7)] z-10'>
        <div className='flex justify-center items-center h-full'>
          <div className='bg-white rounded-xl overflow-hidden w-[800px] h-[700px]'>{children}</div>
        </div>
      </div>
    </div>
  );
}
