import { CloseIcon } from '@/assets/images/icons/CloseIcon';
import { Modal, Rating } from '@/components';
import { Review } from '@/services/review/types';
import { convertImageUrl } from '@/utils';
import { format } from 'date-fns';
import Image from 'next/image';

interface IModalReviewDetailsProps {
  data: Review;
  onClose: () => void;
}

export function ModalReviewDetails({ data, onClose }: IModalReviewDetailsProps) {
  return (
    <Modal>
      <div className='w-full h-full flex flex-col md:flex-row relative'>
        <div
          className='w-[20px] h-[20px] cursor-pointer absolute top-4 left-4 hover:bg-[rgba(0,0,0,0.4)]'
          onClick={onClose}
        >
          <CloseIcon width='100%' height='100%' />
        </div>
        <div className='w-[60%]'>
          <Image
            src={(data.photo?.data && convertImageUrl(data.photo?.data, 'large')) || ''}
            alt='image-product'
            width={0}
            height={0}
            sizes='100vw'
            className='w-full h-full object-cover'
          />
        </div>
        <div className='flex-1 p-8 flex flex-col gap-4'>
          <p className='text-base'>
            {data.firstName} {data.lastName}
          </p>
          <div className='flex justify-between'>
            <Rating value={data.rate} readonly />
            <p>{format(new Date(data.createdAt), 'dd/MM/yyyy')}</p>
          </div>
          <p className='text-base'>{data.content}</p>
        </div>
      </div>
    </Modal>
  );
}
