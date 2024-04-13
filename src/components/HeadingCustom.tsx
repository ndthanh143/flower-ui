'use client';

import cx from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { Modal, Title } from '.';

interface IHeadingCustomProps {
  title: string;
  isSecond?: boolean;
}

export function HeadingCustom({ title, isSecond }: IHeadingCustomProps) {
  const [isInView, setIsInView] = useState<boolean>(false);
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    if (spanRef.current) {
      observer.observe(spanRef.current);
    }

    return () => {
      if (spanRef.current) {
        observer.unobserve(spanRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className='flex flex-col items-center'>
        {isSecond ? (
          <h2 className='uppercase text-lg text-center leading-[4rem]'>{title}</h2>
        ) : (
          <h1 className='uppercase text-lg text-center leading-[4rem]'>{title}</h1>
        )}
        <span
          ref={spanRef}
          className={cx('block h-[4px] rounded-lg bg-yellow-400 transition-all duration-300', {
            'w-0': !isInView,
            'w-[40px]': isInView,
          })}
        />
      </div>
    </>
  );
}
