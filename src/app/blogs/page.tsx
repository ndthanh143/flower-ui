import { Metadata } from 'next';

import { ROUTES } from '@/constants';
import { seoService } from '@/services';
import { getFullPageUrl, transformMetadata } from '@/utils';

import { BlogsPageContent } from './_components';

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await seoService.getSeoService(getFullPageUrl(ROUTES.BLOGS.index));

  return transformMetadata(seoData.attributes);
}

export default function BlogsPage() {
  return (
    <div className='container flex flex-col gap-[40px] py-[60px]'>
      <div className='flex flex-col items-center gap-4'>
        <h2 className='uppercase font-[400] text-xl text-center'>Bài viết mới nhất</h2>
        <span className='block w-12 h-1 rounded-lg bg-yellow-400' />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
        <BlogsPageContent />
      </div>
    </div>
  );
}
