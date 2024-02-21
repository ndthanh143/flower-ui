'use client';

import { useEffect, useState } from 'react';
import { BlogCard } from './_components';
import { GetBlogsResponse } from '@/services/blog/type';
import { blogService } from '@/services/blog';

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<GetBlogsResponse>();

  useEffect(() => {
    const fetchBlogs = async () => {
      return blogService.getBlogs();
    };

    fetchBlogs()
      .then((data) => setBlogs(data))
      .finally(() => {});
  }, []);

  return (
    <div className='container flex flex-col gap-[40px] py-[60px]'>
      <div className='flex flex-col items-center gap-4'>
        <h2 className='uppercase font-[400] text-xl text-center'>Bài viết mới nhất</h2>
        <span className='block w-12 h-1 rounded-lg bg-yellow-400' />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
        {blogs?.data.map((blog) => (
          <div className='col-span-1' key={blog.id}>
            <BlogCard data={blog.attributes} />
          </div>
        ))}
      </div>
    </div>
  );
}
