import cx from 'classnames';
import { DetailedHTMLProps, DetailsHTMLAttributes, PropsWithChildren } from 'react';

interface IFlexProps
  extends PropsWithChildren<DetailedHTMLProps<DetailsHTMLAttributes<HTMLDivElement>, HTMLDivElement>> {}

export function Flex({ children, className, ...props }: IFlexProps) {
  return (
    <div className={cx('flex items-center', className)} {...props}>
      {children}
    </div>
  );
}
