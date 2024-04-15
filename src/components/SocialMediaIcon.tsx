import Link from 'next/link';
import { ReactNode } from 'react';

import { FacebookIcon } from '@/assets/images/icons';

type TSocialMediaType = 'facebook';

interface ISocialMediaIconProps {
  link: string;
  type: TSocialMediaType;
}

export function SocialMediaIcon({ link, type }: ISocialMediaIconProps) {
  const socialIcon: Record<TSocialMediaType, ReactNode> = { facebook: <FacebookIcon className='w-1/4 h-1/4 m-auto' /> };
  return (
    <Link prefetch href={link}>
      <div className='rounded-full border w-full h-full flex items-center hover:border-black transition-all duration-150'>
        <span>{socialIcon[type]}</span>
      </div>
    </Link>
  );
}
