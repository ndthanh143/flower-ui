import { Mulish, Oswald } from 'next/font/google';

import { Footer, Header } from '@/components';

import '@/assets/stylesheets/globals.css';
import { Metadata } from 'next';

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

export const metadata: Metadata = {
  title: 'Roots and Blooms',
  description: 'Flower shop beautifull!',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${oswald.variable} ${mulish.variable}`}>
      <head>
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8150668551715727`}
          crossOrigin='anonymous'
        />
      </head>
      <body>
        <div className='min-h-screen flex flex-col'>
          <Header />
          <div className='my-auto'>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
