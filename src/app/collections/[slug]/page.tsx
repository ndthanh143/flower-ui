import { categoryService } from '@/services';
import { Collections } from './_components';

interface ICategoryPageProps {
  params: { slug: string | undefined };
}

export default async function CategoryPage({ params }: ICategoryPageProps) {
  const slug = params.slug || '';

  const category = await categoryService.getBySlug(params.slug || '');

  return (
    <div className='py-[40px] container flex flex-col gap-[50px]'>
      <div className='flex flex-col items-center gap-4'>
        <h2 className='uppercase font-[400] text-xl text-center'>{category.attributes.displayTitle}</h2>
        <span className='block w-12 h-1 rounded-lg bg-yellow-400' />
      </div>
      <Collections categorySlug={slug} />
    </div>
  );
}
