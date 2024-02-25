import { Button, QuantitySelection, Rating, RelativeProductCard } from '@/components';
import { Product } from '@/services/product/types';
import cx from 'classnames';

interface IOptionProps {
  data: Product;
}

export function Option({ data }: IOptionProps) {
  return (
    <div className='border p-10 flex flex-col gap-10'>
      <p className='text-xl'>{Number(data.price).toLocaleString('vi')}đ</p>
      <div className='flex gap-4 items-center'>
        <Rating value={4} readonly />
        <span className='text-base'>(4)</span>
      </div>
      <div className='flex flex-col gap-4'>
        <p className='text-gray-400 text-sm'>Kích cỡ:</p>
        <div className='flex flex-wrap gap-8'>
          <div
            className={cx(
              'border px-8 py-1 text-base cursor-pointer hover:border-black hover:shadow-xl transition-all duration-150',
              { 'border-black shadow-xl': true },
            )}
          >
            Small
          </div>
          <div
            className={cx(
              'border px-8 py-1 text-base cursor-pointer hover:border-black hover:shadow-xl transition-all duration-150',
              { 'border-black shadow-xl': false },
            )}
          >
            Small
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <p className='text-gray-400 text-sm'>Số lượng:</p>
        <QuantitySelection />
        <p className='text-red-500 font-bold text-sm'>Còn {data.quantity} sản phẩm trong kho</p>
      </div>
      <div>
        <p className='text-lg'>Phụ kiện đi kèm</p>
        <div className='grid grid-cols-5 gap-8'>
          {data.relativeProducts.data.map((item) => (
            <div className='col-span-1' key={item.id}>
              <RelativeProductCard data={item.attributes} />
            </div>
          ))}
        </div>
      </div>
      <Button className='!py-4 !text-base'>Liên hệ đặt hàng</Button>
    </div>
  );
}
