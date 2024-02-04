import Link from 'next/link';
import { ReactNode } from 'react';

import { FacebookIcon } from '@/assets/images/icons';

type TSocialMediaType = 'facebook';

interface ISocialMediaIconProps {
  link: string;
  type: TSocialMediaType;
}

export function SocialMediaIcon({ link, type }: ISocialMediaIconProps) {
  const socialIcon: Record<TSocialMediaType, ReactNode> = { facebook: <FacebookIcon /> };
  return (
    <div className='rounded-full border'>
      <Link href={link}>{socialIcon[type]}</Link>
    </div>
  );
}
