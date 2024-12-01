'use client';

import { blogService } from '@/services';
import { BlogCard } from '.';
import { useFetch } from '@/hooks';

export function BlogsPageContent() {
  const { data: blogs } = useFetch({ queryFn: () => blogService.getBlogs() });

  return blogs?.data.map((blog) => (
    <div className='col-span-1' key={blog.id}>
      <BlogCard data={blog.attributes} />
    </div>
  ));
}
