import { HeadingCustom, ProductCard } from '@/components';
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
      <HeadingCustom isSecond title='Có thể bạn sẽ thích' />
      <div className='grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-[3rem] md:gap-[4rem] lg:gap-[5rem] xl:gap-[6rem]'>
        {products.data.map((product) => (
          <div className='col-span-1' key={product.id}>
            <ProductCard data={product.attributes} />
          </div>
        ))}
      </div>
    </div>
  );
}
