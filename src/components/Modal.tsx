import { DetailedHTMLProps, DetailsHTMLAttributes, PropsWithChildren } from 'react';

interface IModalProps
  extends PropsWithChildren<DetailedHTMLProps<DetailsHTMLAttributes<HTMLDivElement>, HTMLDivElement>> {}

export function Modal({ children, ...props }: IModalProps) {
  return (
    <div className='w-screen h-screen' {...props}>
      <div className='fixed inset-0 bg-[rgba(0,0,0,0.7)] z-10'>
        <div className='flex justify-center items-center h-full'>
          <div className='bg-white rounded-xl overflow-hidden max-w-[800px] max-h-[700px] h-[500px] md:h-[600px] lg:h-[650px] xl:h-[700px] w-[400px] md:w-[500px] lg:w-[700px] xl:w-[800px] mx-8'>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
