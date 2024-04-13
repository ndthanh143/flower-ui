import cx from 'classnames';
import { DetailedHTMLProps, DetailsHTMLAttributes, PropsWithChildren } from 'react';

interface IStackProps
  extends PropsWithChildren<DetailedHTMLProps<DetailsHTMLAttributes<HTMLDivElement>, HTMLDivElement>> {}

export function Stack({ children, className, ...props }: IStackProps) {
  return (
    <div className={cx('flex flex-col', className)} {...props}>
      {children}
    </div>
  );
}
