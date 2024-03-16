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
  title: 'Hoa tươi biên hoà đẹp - Giao tận nơi nhanh chóng | The Sunny Flower',
  description:
    'Miễn Phí Giao Hoa Nội Thành, Hoa Tươi Biên Hoà Đẹp Nhiều Mẫu Giao Nhanh Có VAT. Địa chỉ uy tín, chất lượng với đa dạng các loại hoa tươi, phù hợp với mọi nhu cầu của khách hàng. Cam kết cung cấp hoa tươi mới nhất, đẹp nhất với giá cả hợp lý nhất.',
  openGraph: {
    title: 'Hoa tươi biên hoà đẹp - Giao tận nơi nhanh chóng | The Sunny Flower',
    description:
      'Miễn Phí Giao Hoa Nội Thành, Hoa Tươi Biên Hoà Đẹp Nhiều Mẫu Giao Nhanh Có VAT. Địa chỉ uy tín, chất lượng với đa dạng các loại hoa tươi, phù hợp với mọi nhu cầu của khách hàng. Cam kết cung cấp hoa tươi mới nhất, đẹp nhất với giá cả hợp lý nhất.',
    images: '/open-graph.jpg',
    url: '/',
  },
  twitter: {
    title: 'Hoa tươi biên hoà đẹp - Giao tận nơi nhanh chóng | The Sunny Flower',
    description:
      'Miễn Phí Giao Hoa Nội Thành, Hoa Tươi Biên Hoà Đẹp Nhiều Mẫu Giao Nhanh Có VAT. Địa chỉ uy tín, chất lượng với đa dạng các loại hoa tươi, phù hợp với mọi nhu cầu của khách hàng. Cam kết cung cấp hoa tươi mới nhất, đẹp nhất với giá cả hợp lý nhất.',
    images: '/open-graph.jpg',
  },
  alternates: {
    canonical: '/',
  },
};

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
