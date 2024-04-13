import { ProductCard } from '@/components';
import { GetProductsResponse } from '@/services/product/types';

interface ICollectionsProps {
  data: GetProductsResponse;
}

export function Collections({ data }: ICollectionsProps) {
  return (
    <div className='grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-[2rem] md:gap-[2.25rem] xl:gap-[4rem]'>
      {data.data.map((product) => (
        <div className='col-span-1' key={product.id}>
          <ProductCard data={product.attributes} />
        </div>
      ))}
    </div>
  );
}
