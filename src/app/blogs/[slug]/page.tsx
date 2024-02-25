import { Metadata } from 'next';

import { configs } from '@/configs';
import { blogService } from '@/services';
import { convertImageUrl } from '@/utils';
import { BlockRendererClient } from '@/components';

interface IBlogDetailPageProps {
  params: {
    slug: string | undefined;
  };
}

export async function generateMetadata({ params }: IBlogDetailPageProps): Promise<Metadata> {
  const { slug = '' } = params;

  const data = await blogService.getBlogDetail(slug);

  return data
    ? {
        title: data.metaTitle,
        description: data.metaDescription,
        openGraph: {
          type: 'article',
          url: `${configs.uriClient}/blog/${data.slug}`,
          title: data.metaTitle,
          description: data.metaDescription,
          siteName: configs.uriClient,
          images: [
            {
              url: convertImageUrl(data.thumbnail.data, 'thumbnail'),
              width: 850,
              height: 650,
              alt: data.metaTitle,
            },
          ],
        },
        keywords: data.metaKeyword,
        alternates: {
          canonical: `${configs.uriClient}/blogs/${data.slug}`,
        },
      }
    : {};
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
