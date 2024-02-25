<<<<<<< Updated upstream
=======
import Link from 'next/link';

>>>>>>> Stashed changes
import { AngleRightIcon } from '@/assets/images/icons';
import { IconButton, ProductCard } from '@/components';
import { productService } from '@/services';

interface ICollectionsProps {
  categorySlug: string;
}

export async function Collections({ categorySlug }: ICollectionsProps) {
<<<<<<< Updated upstream
  const products = await productService.getAll({ categorySlug, page: 1, pageSize: 5 });
=======
  const products = await productService.getAll({ categorySlug, page: 1, pageSize: 4 });
>>>>>>> Stashed changes

  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[6rem]'>
        {products.data.map((product) => (
          <div className='col-span-1' key={product.id}>
            <ProductCard data={product.attributes} />
          </div>
        ))}
      </div>
<<<<<<< Updated upstream
      <IconButton className='w-fit text-[1.6rem] mx-auto' endIcon={<AngleRightIcon width={12} height={12} />}>
        <h2>Xem tất cả</h2>
      </IconButton>
=======
      {products.meta.pagination.pageCount > 1 && (
        <Link href={`/collections/${categorySlug}`}>
          <IconButton className='w-fit text-[1.6rem] mx-auto' endIcon={<AngleRightIcon width={12} height={12} />}>
            <h2>Xem tất cả</h2>
          </IconButton>
        </Link>
      )}
>>>>>>> Stashed changes
    </>
  );
}
