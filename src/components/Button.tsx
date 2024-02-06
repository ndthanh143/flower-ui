import cx from 'classnames';
import { ButtonHTMLAttributes, DetailedHTMLProps, PropsWithChildren } from 'react';

interface IButtonProps
  extends PropsWithChildren<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> {}

export function Button({ children, className, ...props }: IButtonProps) {
  return (
    <button
      className={cx('bg-yellow-400 hover:bg-yellow-300 active:bg-yellow-400 rounded-lg py-8 px-12 text-lg', className)}
      {...props}
    >
      {children}
    </button>
  );
}
