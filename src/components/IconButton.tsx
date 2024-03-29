import { ButtonHTMLAttributes, DetailedHTMLProps, PropsWithChildren, ReactNode } from 'react';
import cx from 'classnames';

interface IIconButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  className?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

export function IconButton({ startIcon, endIcon, children, className, ...props }: PropsWithChildren<IIconButtonProps>) {
  return (
    <button
      className={cx(
        'group text-black uppercase hover:opacity-70 active:opacity-80 duration-75 flex gap-4 items-center',
        className,
      )}
      {...props}
    >
      {startIcon}
      <div>{children}</div>
      <span className='group-hover:translate-x-2 transition-all duration-200'>{endIcon}</span>
    </button>
  );
}
