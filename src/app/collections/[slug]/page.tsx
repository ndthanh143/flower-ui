import { ProductCard } from '@/components';
import { categoryService, productService } from '@/services';

interface ICategoryPageProps {
  params: { slug: string | undefined };
}

export default async function CategoryPage({ params }: ICategoryPageProps) {
  const category = await categoryService.getBySlug(params.slug || '');

  const products = await productService.getAll({ categorySlug: params.slug });

  return (
    <div className='py-[40px] container flex flex-col gap-[50px]'>
      <div className='flex flex-col items-center gap-4'>
        <h2 className='uppercase font-[400] text-xl text-center'>{category.attributes.name}</h2>
        <span className='block w-12 h-1 rounded-lg bg-yellow-400' />
      </div>
      <div className='grid grid-cols-3 gap-[120px]'>
        {products.data.map((product) => (
          <div className='col-span-1' key={product.id}>
            <ProductCard data={product.attributes} />
          </div>
        ))}
      </div>
    </div>
  );
}
