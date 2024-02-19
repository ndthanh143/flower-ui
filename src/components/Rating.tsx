import { StarIcon } from '@/assets/images/icons';
import cx from 'classnames';

interface IRatingProps {
  value?: number;
}

export function Rating({ value = 0 }: IRatingProps) {
  //   const isRoundingNeeded = value % 1 > 0.5;
  //   const roundedValue = isRoundingNeeded ? Math.ceil(value) : value;

  const starElements = [];

  for (let i = 1; i <= 5; i++) {
    const isFullStar = value >= i;

    starElements.push(
      <div key={i}>
        <StarIcon
          className={cx('w-[20px] h-[20px]', { 'text-yellow-500': isFullStar, 'text-gray-200': !isFullStar })}
        />
      </div>,
    );
  }

  return <div className='flex'>{starElements}</div>;
}
