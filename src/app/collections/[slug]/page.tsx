<<<<<<< Updated upstream
import { ProductCard } from '@/components';
import { categoryService, productService } from '@/services';
=======
import { categoryService } from '@/services';
import { Collections } from './_components';
>>>>>>> Stashed changes

interface ICategoryPageProps {
  params: { slug: string | undefined };
}

export default async function CategoryPage({ params }: ICategoryPageProps) {
<<<<<<< Updated upstream
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
=======
  const slug = params.slug || '';

  const category = await categoryService.getBySlug(params.slug || '');

  return (
    <div className='py-[40px] container flex flex-col gap-[50px]'>
      <div className='flex flex-col items-center gap-4'>
        <h2 className='uppercase font-[400] text-xl text-center'>{category.attributes.displayTitle}</h2>
        <span className='block w-12 h-1 rounded-lg bg-yellow-400' />
>>>>>>> Stashed changes
      </div>
      <Collections categorySlug={slug} />
    </div>
  );
}
