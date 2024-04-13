import cx from 'classnames';
import { SVGProps } from 'react';

export function SearchIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={cx('h-[20px] w-[20px] text-gray-600', className)}
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      viewBox='0 0 24 24'
      stroke='currentColor'
      {...props}
    >
      <path d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
    </svg>
  );
}
