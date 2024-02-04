'use client';

import { Oswald } from 'next/font/google';

import { Footer, Header } from '@/components';
import Ins from '@/components/Ins';

import '@/assets/stylesheets/globals.css';

const inter = Oswald({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8150668551715727`}
          crossOrigin='anonymous'
        />
      </head>
      <body className={inter.className}>
        <div className='min-h-screen flex flex-col'>
          <Header />
          <div className='py-10 my-auto'>{children}</div>
          <Footer />
        </div>
        <Ins />
      </body>
    </html>
  );
}
