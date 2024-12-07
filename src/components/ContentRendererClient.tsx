'use client';

import Image from 'next/image';

import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export function ContentRendererClient({ content }: { readonly content: string }) {
  if (!content) return null;

  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      components={{
        img: ({ src, alt }) => {
          if (!src) return null;
          return (
            <div className='w-[100%] md:w-[80%] lg:w-[60%] xl:w-[60%] h-[50%] xl:h-[40%] mx-auto relative mt-4'>
              <Image
                src={src}
                alt={alt || ''}
                width={0}
                height={0}
                sizes='100vw'
                className='rounded-lg w-full object-contain'
              />
            </div>
          );
        },
        h1: ({ children }) => <h1 className='text-4xl'>{children}</h1>,
        h2: ({ children }) => <h2 className='text-xl lg:text-2xl mt-8 mb-3'>{children}</h2>,
        h3: ({ children }) => (
          <h3 className='text-lg lg:text-xl leading-[28px] lg:leading-[36px] mt-2 mb-2'>{children}</h3>
        ),
        h4: ({ children }) => (
          <h4 className='text-lg lg:text-xl leading-[28px] lg:leading-[36px] mt-2 mb-2'>{children}</h4>
        ),
        h5: ({ children }) => (
          <h5 className='text-lg lg:text-xl leading-[28px] lg:leading-[36px] mt-2 mb-2'>{children}</h5>
        ),
        h6: ({ children }) => (
          <h6 className='text-lg lg:text-xl leading-[28px] lg:leading-[36px] mt-2 mb-2'>{children}</h6>
        ),
        ul: ({ children }) => <ul className='list-disc ml-8'>{children}</ul>,
        ol: ({ children }) => <ol className='list-decimal ml-8'>{children}</ol>,
        li: ({ children }) => <li className='mb-2 text-base'>{children}</li>,
        a: ({ href, children }) => (
          <a href={href} target='_blank' rel='noopener noreferrer' className='hover:underline text-blue-600'>
            {children}
          </a>
        ),
        p: ({ children }) => <p className='text-base py-1'>{children}</p>,
      }}
    >
      {content}
    </Markdown>
  );
}
