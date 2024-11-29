import Link from 'next/link';

import { AngleRightIcon } from '@/assets/images/icons';
import { HeadingCustom, IconButton, ProductCard } from '@/components';
import { productService } from '@/services';
import { Category } from '@/services/category/types';

interface ICollectionsProps {
  category: Category;
}

export async function Collections({ category }: ICollectionsProps) {
  const products = await productService.getAll({ categorySlug: category.slug, page: 1, pageSize: 8 });

  return (
    <div className='container'>
      <div className='flex flex-col gap-[50px]'>
        {products?.data.length > 0 && (
          <>
            <HeadingCustom isSecond title={category.displayTitle} />
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4  gap-[2rem] md:gap-[2.25rem] lg:gap-[2.5rem] xl:gap-[3rem]'>
              {products.data?.map((product) => (
                <div className='col-span-1' key={product.id}>
                  <ProductCard data={product.attributes} />
                </div>
              ))}
            </div>
            {products?.meta.pagination.pageCount > 1 && (
              <Link prefetch={false} href={`/collections/${category.slug}`}>
                <IconButton className='w-fit text-[1.6rem] mx-auto' endIcon={<AngleRightIcon width={12} height={12} />}>
                  <h2>Xem tất cả</h2>
                </IconButton>
              </Link>
            )}
          </>
        )}
      </div>
    </div>
  );
}
