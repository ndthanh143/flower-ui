import { Rating } from '@/components';
import { Review } from '@/services/review/types';
import { convertImageUrl } from '@/utils';
import { format } from 'date-fns';
import Image from 'next/image';

interface IReviewCardProps {
  data: Review;
}

export function ReviewCard({ data }: IReviewCardProps) {
  return (
    <div className='rounded-lg border overflow-hidden shadow-sm cursor-pointer h-full'>
      <div className='w-full h-[150px] md:h-[200px] lg:h-[250px] xl:h-[300px]'>
        <Image
          src={(data.photo?.data && convertImageUrl(data.photo.data, 'medium')) || ''}
          alt='review-image'
          width={0}
          height={0}
          sizes='100vw'
          className='w-full h-full object-cover'
        />
      </div>
      <div className='p-4 flex flex-col gap-2 h-full'>
        <p className='font-bold text-lg'>
          {data.firstName} {data.lastName}
        </p>
        <p>{format(new Date(data.createdAt), 'dd/MM/yyyy')}</p>
        <Rating value={data.rate} size='small' readonly />
        <p className='text-base'>{data.content}</p>
      </div>
    </div>
  );
}
