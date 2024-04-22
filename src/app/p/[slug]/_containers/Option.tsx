import { Button, QuantitySelection, Rating, RelativeProductCard } from '@/components';
import { reviewService } from '@/services';
import { Product } from '@/services/product/types';
import Link from 'next/link';

interface IOptionProps {
  data: Product;
}

export async function Option({ data }: IOptionProps) {
  const ratings = await reviewService.getAll({ productSlug: data.slug });

  console.log('ratings', ratings);

  const avgRating = ratings.data.reduce((acc, cur) => acc + cur.attributes.rate, 0) / ratings.data.length || 0;
  const totalReviewAmounts = ratings.data.length;

  return (
    <div className='border p-10 flex flex-col gap-10 rounded-xl'>
      {Boolean(Number(data.price)) ? (
        <p className='text-xl'>{Number(data.price).toLocaleString('en-US')} VNĐ</p>
      ) : (
        <p className='text-xl'>Liên hệ để biết thêm về giá</p>
      )}
      <div className='flex gap-4 items-center'>
        <Rating value={avgRating || 5} readonly />
        <span className='text-base'>({totalReviewAmounts})</span>
      </div>
      {/* <div className='flex flex-col gap-4'>
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
      </div> */}
      {/* <div className='flex flex-col gap-4'>
        <p className='text-gray-400 text-sm'>Số lượng:</p>
        <QuantitySelection />
        <p className='text-red-500 font-bold text-sm'>Còn {data.quantity} sản phẩm trong kho</p>
      </div> */}
      {data.relativeProducts.data.length > 0 && (
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
      )}
      <Link prefetch href='https://zalo.me/84705740407' className='block w-full'>
        <Button className='!py-4 !text-base'>Đặt hàng qua zalo</Button>
      </Link>
    </div>
  );
}
