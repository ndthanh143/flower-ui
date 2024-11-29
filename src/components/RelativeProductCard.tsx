import { Product } from '@/services/product/types';
import { convertImageUrl } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';

interface IRelativeProductCardProps {
  data: Product;
}

export function RelativeProductCard({ data }: IRelativeProductCardProps) {
  return (
    <Link prefetch={false} href={'/'}>
      <div className='flex flex-col cursor-pointer'>
        <div className='w-full h-[80px]'>
          <Image
            src={convertImageUrl(data.images?.data[0], 'thumbnail')}
            alt='flower'
            width={0}
            height={0}
            sizes='100vw'
            className='w-full h-full'
          />
        </div>
        <p>
          {data.name} ({Number(data.price).toLocaleString('vi')}đ)
        </p>
      </div>
    </Link>
  );
}
