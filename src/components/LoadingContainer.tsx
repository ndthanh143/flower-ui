import { PropsWithChildren } from 'react';
import { Loading } from '.';
interface ILoadingContainerProps extends PropsWithChildren {
  loading: boolean;
}

export function LoadingContainer({ loading, children }: ILoadingContainerProps) {
  return (
    <>
      {children}
      {loading && (
        <div className='flex items-center justify-center w-full h-full'>
          <div className='fixed inset-0 bg-[rgba(0,0,0,0.7)] z-10 flex justify-center items-center'>
            <Loading />
          </div>
        </div>
      )}
    </>
  );
}
