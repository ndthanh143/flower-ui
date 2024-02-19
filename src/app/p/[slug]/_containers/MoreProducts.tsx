import { ProductCard } from '@/components';
import { productService } from '@/services';
import { Category } from '@/services/category/types';
import { Product } from '@/services/product/types';

interface IMoreProductProps {
  category: Category;
  product: Product;
}

export async function MoreProducts({ category, product }: IMoreProductProps) {
  const products = await productService.getAll({
    categorySlug: category.slug,
    excludeItem: product.slug,
    page: 1,
    pageSize: 3,
  });

  return (
    <div className='flex flex-col gap-8'>
      <div className='flex flex-col items-center'>
        <h2 className='uppercase text-lg text-center leading-[4rem]'>You may also like</h2>
        <span className='block w-[40px] h-[4px] rounded-lg bg-yellow-400' />
      </div>
      <div className='grid grid-cols-3 gap-[160px]'>
        {products.data.map((product) => (
          <div className='col-span-1' key={product.id}>
            <ProductCard data={product.attributes} />
          </div>
        ))}
      </div>
    </div>
  );
}
