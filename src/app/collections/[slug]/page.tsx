import { ProductCard } from '@/components';
import { productService } from '@/services';

interface ICategoryPageProps {
  params: { slug: string | undefined };
}

export default async function CategoryPage({ params }: ICategoryPageProps) {
  const products = await productService.getAll({ categorySlug: params.slug });
  return (
    <div className='py-[40px] container'>
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
