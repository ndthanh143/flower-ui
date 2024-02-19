import { Product } from '@/services/product/types';
import { BlockRendererClient } from '@/components';

interface IDescriptionProps {
  data: Product;
}

export function Description({ data }: IDescriptionProps) {
  return (
    <div>
      <div className='flex flex-col gap-10'>
        <p className='text-base leading-[2.8rem]'>{data.description}</p>
        <div>
          <p className='text-base leading-[2.8rem]'>
            <b>Long distance Shipping:</b>{' '}
            {data.isLongDistanceShipping ? 'Available for this item' : 'Not Available for this item'}
          </p>
          {data.delivery && (
            <div className='flex flex-col gap-4'>
              <p className='text-base leading-[2.8rem] font-bold'>Local Delivery:</p>
              <div className='text-base leading-[2.8rem] flex flex-col gap-2'>
                <BlockRendererClient content={data.delivery} />
              </div>
            </div>
          )}
        </div>
        {data.details && (
          <div className='flex flex-col gap-4'>
            <p className='text-base leading-[2.8rem] font-bold'>Details:</p>
            <div className='text-base leading-[2.8rem] flex flex-col gap-2'>
              <BlockRendererClient content={data.details} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
