import { Blog } from '@/services/blog/type';
import { convertImageUrl } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';

interface IBlogCard {
  data: Blog;
}

export function BlogCard({ data }: IBlogCard) {
  return (
    <Link href={`/blogs/${data.slug}`}>
      <div className='group border border-gray-500 rounded'>
        <div className='w-full h-[300px] overflow-hidden'>
          <Image
            src={convertImageUrl(data.thumbnail.data, 'medium')}
            alt='thumbnail'
            width={0}
            height={0}
            sizes='100vw'
            className='w-full h-full object-cover group-hover:scale-110 transition-all duration-500'
          />
        </div>
        <div className='p-8'>
          <h2 className='text-lg mb-2'>{data.title}</h2>
          <p className='text-base'>{data.description}</p>
        </div>
      </div>
    </Link>
  );
}
