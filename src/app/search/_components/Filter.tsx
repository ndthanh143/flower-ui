import { Flex, Stack } from '@/components';
import cx from 'classnames';
import { ChangeEvent, InputHTMLAttributes, forwardRef, useEffect, useState } from 'react';
import { FormSearchType } from '../page';
import { debounce } from 'lodash';

const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(function Input(
  { className, ...props },
  ref,
) {
  return (
    <label
      htmlFor={props.name}
      className='border rounded-md flex gap-2 items-center justify-between w-1/2 px-2 text-base'
    >
      <p className='opacity-40 select-none'>đ</p>
      <input className={cx('w-full py-2', className)} ref={ref} {...props} id={props.name} />
    </label>
  );
});

interface IFilterProps {
  form: FormSearchType;
}

export function Filter({ form }: IFilterProps) {
  const { watch, setValue } = form;

  const maxPrice = watch('max');
  const minPrice = watch('min');

  const [range, setRange] = useState({ min: minPrice, max: maxPrice });

  const debounceSetMin = debounce((e: ChangeEvent<HTMLInputElement>) => {
    setRange({ ...range, min: Number(e.target.value) });
  }, 300);

  const debounceSetMax = debounce((e: ChangeEvent<HTMLInputElement>) => {
    setRange({ ...range, max: Number(e.target.value) });
  }, 300);

  useEffect(() => {
    setValue('min', range.min);
    setValue('max', range.max);
  }, [range.min, range.max]);

  return (
    <Stack className='gap-4'>
      <p className='text-lg font-bold border-b pb-2'>Bộ lọc</p>
      <Stack className='gap-4 pb-6 border-b'>
        <Flex className='justify-between'>
          <p className='text-base'>Giá</p>
        </Flex>
        <Flex className='justify-between gap-8'>
          <Input type='number' min={0} max={maxPrice} defaultValue={minPrice} onChange={debounceSetMin} />
          <span className='text-lg font-semiBold select-none'>-</span>
          <Input type='number' min={minPrice} max={maxPrice} defaultValue={maxPrice} onChange={debounceSetMax} />
        </Flex>
      </Stack>
    </Stack>
  );
}
