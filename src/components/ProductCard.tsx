import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/services/product/types';
import { convertImageUrl } from '@/utils';

interface IProductCardProps {
  data: Product;
}

export function ProductCard({ data }: IProductCardProps) {
  return (
    <Link href={`/p/${data.slug}`}>
      <div className='flex flex-col gap-4 relative'>
        <div className='w-full h-[40rem] cursor-pointer overflow-hidden'>
          <Image
            src={convertImageUrl(data.images.data?.[0], 'medium') || ''}
            alt={data.name}
            width={0}
            height={0}
            sizes='100vw'
            className='w-full h-full hover:scale-110 duration-500'
          />
        </div>
        <div className='text-center'>
          <p className='uppercase text-base mb-2 hover:opacity-60 transition-opacity duration-150'>{data.name}</p>
          <p className='text-base hover:opacity-60 transition-opacity duration-150'>
            {Number(data.price).toLocaleString('vi')}đ
          </p>
        </div>
        {data.quantity === 0 && (
          <span className='uppercase px-8 py-4 bg-gray-200 absolute right-0 text-sm'>Sold out</span>
        )}
      </div>
    </Link>
  );
}
