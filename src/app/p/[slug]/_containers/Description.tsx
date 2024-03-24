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
        {data.details && (
          <div className='flex flex-col gap-4'>
            <p className='text-base leading-[2.8rem] font-bold'>Mô tả chi tiết:</p>
            <div className='text-base leading-[2.8rem] flex flex-col gap-2'>
              <BlockRendererClient content={data.details} />
            </div>
          </div>
        )}
        {/* <div>
          <p className='text-base leading-[2.8rem]'>
            <b>Vận chuyển toàn quốc:</b> {data.isLongDistanceShipping ? 'Khả dụng' : 'Không khả dụng'}
          </p>
          {data.delivery && (
            <div className='flex flex-col gap-4'>
              <p className='text-base leading-[2.8rem] font-bold'>Vận chuyển khu vực:</p>
              <div className='text-base leading-[2.8rem] flex flex-col gap-2'>
                <BlockRendererClient content={data.delivery} />
              </div>
            </div>
          )}
        </div> */}
      </div>
    </div>
  );
}
