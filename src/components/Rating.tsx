'use client';

import { useState } from 'react';
import { StarIcon } from '@/assets/images/icons';
import cx from 'classnames';

interface IRatingProps {
  value?: number;
  size?: 'small' | 'medium' | 'large';
  onChange?: (value: number) => void;
  readonly?: boolean;
}

export function Rating({ value = 0, size = 'medium', readonly = false, onChange }: IRatingProps) {
  const [hoverValue, setHoverValue] = useState<number | null>(null);

  const handleStarClick = (clickedValue: number) => {
    if (onChange) {
      onChange(clickedValue);
    }
  };

  const handleMouseEnter = (starValue: number) => {
    !readonly && setHoverValue(starValue);
  };

  const handleMouseLeave = () => {
    !readonly && setHoverValue(null);
  };

  const starElements = [];

  for (let i = 1; i <= 5; i++) {
    const isFullStar = (hoverValue ?? value) >= i;

    starElements.push(
      <div
        key={i}
        onClick={() => handleStarClick(i)}
        onMouseEnter={() => handleMouseEnter(i)}
        onMouseLeave={handleMouseLeave}
      >
        <StarIcon
          className={cx({
            'w-[20px] h-[20px]': size === 'medium',
            'w-[16px] h-[16px]': size === 'small',
            'w-[24px] h-[24px]': size === 'large',
            'text-yellow-500': isFullStar,
            'text-gray-200': !isFullStar,
          })}
        />
      </div>,
    );
  }

  return <div className='flex'>{starElements}</div>;
}
