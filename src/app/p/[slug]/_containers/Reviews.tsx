'use client';

import { reviewService } from '@/services';
import { Rating } from '@/components';
import { AngleRightIcon } from '@/assets/images/icons';
import { useBoolean, useFetch } from '@/hooks';
import { ModalCreateReview, ModalReviewDetails } from '.';
import { ReviewCard } from './ReviewCard';
import { CreateReviewPayload, Review } from '@/services/review/types';
import { Product } from '@/services/product/types';
import { useState } from 'react';

interface IReviewsProps {
  product: { id: number; attributes: Product };
}

export function Reviews({ product }: IReviewsProps) {
  const { data: reviews, refetch } = useFetch({
    queryFn: () => reviewService.getAll({ productSlug: product.attributes.slug, page: 1, pageSize: 3 }),
  });

  const { value: isOpenCreateModal, setFalse: closeCreateModal, setTrue: openCreateModal } = useBoolean();

  const [selectedReview, setSelectedReview] = useState<Review | null>(null);

  const onSubmitHandler = async (data: CreateReviewPayload) => {
    await reviewService.create({ ...data, product: product.id });

    closeCreateModal();
    refetch();
  };

  return (
    reviews && (
      <>
        <div className='container max-w-[100rem]'>
          <div className='flex justify-center lg:justify-between align-center flex-col lg:flex-row gap-8 mb-10 w-full'>
            <div className='flex justify-center lg:justify-start items-center gap-6 order-2 lg:order-1'>
              <Rating value={4} size='large' readonly />
              <p className='text-lg'>{reviews.meta.pagination.total} Reviews </p>
              <span className='w-[12px] h-[12px] rotate-90'>
                <AngleRightIcon />
              </span>
            </div>

            <div className='flex items-center gap-6 order-1 lg:order-2'>
              <button
                className='text-base p-4 border rounded-lg hover:bg-gray-200 transition-all duration-100 w-full lg:w-fit'
                onClick={openCreateModal}
              >
                Write a review
              </button>
            </div>
          </div>
          <div className='grid grid-cols-2 lg:grid-cols-3 gap-8'>
            {reviews.data.map((review) => (
              <div className='col-span-1' key={review.id} onClick={() => setSelectedReview(review.attributes)}>
                <ReviewCard data={review.attributes} />
              </div>
            ))}
          </div>
        </div>
        {selectedReview && <ModalReviewDetails data={selectedReview} onClose={() => setSelectedReview(null)} />}
        {isOpenCreateModal && <ModalCreateReview onClose={closeCreateModal} onSubmit={onSubmitHandler} />}
      </>
    )
  );
}
