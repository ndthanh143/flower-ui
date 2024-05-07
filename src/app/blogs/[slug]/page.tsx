import { Metadata } from 'next';

import { configs } from '@/configs';
import { blogService } from '@/services';
import { convertImageUrl } from '@/utils';
import { BlockRendererClient } from '@/components';
import Image from 'next/image';

interface IBlogDetailPageProps {
  params: {
    slug: string | undefined;
  };
}
export const dynamicParams = true;

export async function generateStaticParams() {
  const data = await blogService.getBlogs();

  return data.data.map((data) => ({
    slug: data.attributes.slug,
  }));
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
    <div className='container py-[20px]'>
      <h1 className='text-xl leading-[36px] md:text-2xl md:leading-[48px] lg:text-3xl lg:leading-[60px] xl:text-4xl xl:leading-[80px]'>
        {data.title}
      </h1>
      <div className='flex my-8'>
        <div className='h-[400px] w-auto mx-auto rounded-lg overflow-hidden'>
          <Image
            src={convertImageUrl(data.thumbnail.data, 'large')}
            alt={data.title}
            width={0}
            height={0}
            sizes='100vw'
            className='w-auto h-full'
          />
        </div>
      </div>
      <div className='text-base py-4'>
        <BlockRendererClient content={data.content} />
      </div>
    </div>
  );
}
