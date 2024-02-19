'use client';

import { useState } from 'react';

interface IQuantitySelectionProps {
  onChange?: (value: number) => void;
}

export function QuantitySelection({ onChange }: IQuantitySelectionProps) {
  const [value, setValue] = useState(1);
  const handleChange = (type: 'increase' | 'decrease') => () => {
    if (type === 'increase') {
      setValue((prev) => prev + 1);
    } else {
      if (value > 1) {
        setValue((prev) => prev - 1);
      }
    }
  };
  return (
    <div className='flex'>
      <button className='border px-4 py-2 text-base cursor-pointer' onClick={handleChange('decrease')}>
        <span>-</span>
      </button>
      <span className='border px-4 py-2 text-base'>{value}</span>
      <button className='border px-4 py-2 text-base cursor-pointer' onClick={handleChange('increase')}>
        <span>+</span>
      </button>
    </div>
  );
}
