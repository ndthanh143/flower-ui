import { BlockRendererClient } from '@/components';
import { blogService } from '@/services';

interface IBlogDetailPageProps {
  params: {
    slug: string | undefined;
  };
}

export default async function BlogDetailPage({ params }: IBlogDetailPageProps) {
  const slug = params.slug || '';

  const data = await blogService.getBlogDetail(slug);

  return (
    <div className='container py-[0]'>
      <h1 className='text-2xl leading-[80px]'>{data.title}</h1>
      <div className='text-base'>
        <BlockRendererClient content={data.content} />
      </div>
    </div>
  );
}
