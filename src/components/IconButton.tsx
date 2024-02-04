import { PropsWithChildren, ReactNode } from 'react';
import cx from 'classnames';

interface IIconButtonProps {
  className?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

export function IconButton({ startIcon, endIcon, children, className }: PropsWithChildren<IIconButtonProps>) {
  return (
    <button
      className={cx(
        'text-black uppercase hover:opacity-70 active:opacity-80 duration-75 flex gap-4 items-center w-full',
        className,
      )}
    >
      {startIcon}
      <div className='flex-1'>{children}</div>
      {endIcon}
    </button>
  );
}
