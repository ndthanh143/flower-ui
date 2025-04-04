import { Metadata } from 'next';
import { Mulish, Oswald, Great_Vibes, Baskervville } from 'next/font/google';

import { FloatingButton, Footer, Header } from '@/components';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-loading-skeleton/dist/skeleton.css';
import '@/assets/stylesheets/globals.css';
import { categoryService, seoService } from '@/services';
import { convertImageUrl, getFullPageUrl, transformMetadata } from '@/utils';
import { ROUTES } from '@/constants';
// import { FacebookChatbot } from './_components';

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

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await seoService.getSeoService(getFullPageUrl(ROUTES.HOME));

  return {
    ...transformMetadata(seoData.attributes),
    verification: {
      google: 'pRXlfr6P1IUxJeTqCD6CM-UUtWLAzprp_BGhHrC8ei0',
    },
    metadataBase: new URL(process.env.NEXT_PUBLIC_URI_CLIENT || ''),
  };
}

// export const metadata: Metadata = {
//   title: 'Hoa tươi biên hoà đẹp - Giao tận nơi nhanh chóng | The Sunny Flower',
//   description:
//     'Miễn Phí Giao Hoa Nội Thành, Hoa Tươi Biên Hoà Đẹp Nhiều Mẫu Giao Nhanh Có VAT. Địa chỉ uy tín, chất lượng với đa dạng các loại hoa tươi, phù hợp với mọi nhu cầu của khách hàng. Cam kết cung cấp hoa tươi mới nhất, đẹp nhất với giá cả hợp lý nhất.',
//   openGraph: {
//     title: 'Hoa tươi biên hoà đẹp - Giao tận nơi nhanh chóng | The Sunny Flower',
//     description:
//       'Miễn Phí Giao Hoa Nội Thành, Hoa Tươi Biên Hoà Đẹp Nhiều Mẫu Giao Nhanh Có VAT. Địa chỉ uy tín, chất lượng với đa dạng các loại hoa tươi, phù hợp với mọi nhu cầu của khách hàng. Cam kết cung cấp hoa tươi mới nhất, đẹp nhất với giá cả hợp lý nhất.',
//     images: '/open-graph.jpg',
//     url: '/',
//   },
//   twitter: {
//     title: 'Hoa tươi biên hoà đẹp - Giao tận nơi nhanh chóng | The Sunny Flower',
//     description:
//       'Miễn Phí Giao Hoa Nội Thành, Hoa Tươi Biên Hoà Đẹp Nhiều Mẫu Giao Nhanh Có VAT. Địa chỉ uy tín, chất lượng với đa dạng các loại hoa tươi, phù hợp với mọi nhu cầu của khách hàng. Cam kết cung cấp hoa tươi mới nhất, đẹp nhất với giá cả hợp lý nhất.',
//     images: '/open-graph.jpg',
//   },
//   alternates: {
//     canonical: '/',
//   },
//   verification: {
//     google: 'pRXlfr6P1IUxJeTqCD6CM-UUtWLAzprp_BGhHrC8ei0',
//   },
// };

export const revalidate = 60;

export type CategoryMappedList = {
  label: string;
  href: string;
  images: {
    id: number;
    url: string;
  }[];
}[];

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categories = await categoryService.getAll();

  const categoriesList =
    categories?.data.map((category) => ({
      label: category.attributes.name,
      href: `/collections/${category.attributes.slug}`,
      images:
        category.attributes.images.data?.map((item) => ({ id: item.id, url: convertImageUrl(item, 'medium') })) || [],
    })) || [];

  const seoData = await seoService.getSeoService(getFullPageUrl(ROUTES.HOME));

  return (
    <html lang='en' className={`${oswald.variable} ${mulish.variable} ${greatVibes.variable} ${baskervville.variable}`}>
      <head>
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8150668551715727`}
          crossOrigin='anonymous'
        />
        <script async src='https://www.googletagmanager.com/gtag/js?id=G-KV0M69DSTG'></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-DJCXC26SBQ');`,
          }}
        />
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=G-KV0M69DSTG`}
          crossOrigin='anonymous'
        />
      </head>
      <body>
        {/* <FacebookChatbot /> */}
        <FloatingButton />
        <div className='min-h-screen flex flex-col'>
          <Header categories={categories} categoriesList={categoriesList} />
          <div className='my-auto'>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
