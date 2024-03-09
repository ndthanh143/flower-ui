import { Metadata } from 'next';
import { Mulish, Oswald, Great_Vibes, Baskervville } from 'next/font/google';

import { Footer, Header } from '@/components';

import 'react-loading-skeleton/dist/skeleton.css';
import '@/assets/stylesheets/globals.css';
import { FacebookChatbot } from './_components';

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});
const mulish = Mulish({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  variable: '--font-logo-sub',
  weight: ['400'],
  display: 'swap',
});

const baskervville = Baskervville({
  subsets: ['latin'],
  variable: '--font-logo-main',
  weight: ['400'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'The Sunny Flower: Hoa Tươi Tươi Mỗi Ngày - Mua Hoa Trực Tuyến Ngay Hôm Nay',
  description:
    'Khám phá vẻ đẹp tươi mới mỗi ngày với The Sunny Flower. Chúng tôi cung cấp các loại hoa tươi tinh khiết, từ hoa cắt cành cho đến bó hoa sắp xếp tinh tế. Mua hoa trực tuyến và làm cho mọi dịp trở nên đặc biệt hơn ngay hôm nay!!',
};

export const dynamic = 'force-dynamic';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${oswald.variable} ${mulish.variable} ${greatVibes.variable} ${baskervville.variable}`}>
      <head>
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8150668551715727`}
          crossOrigin='anonymous'
        />
      </head>
      <body>
        <FacebookChatbot />
        <div className='min-h-screen flex flex-col'>
          <Header />
          <div className='my-auto'>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
