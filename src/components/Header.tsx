import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  const navList = [
    { label: 'Gift box', href: '/' },
    { label: 'Sympathy', href: '/' },
    { label: 'All flowers', href: '/' },
    { label: 'All plants', href: '/' },
    { label: 'Contact us', href: '/' },
    { label: 'Subscription', href: '/' },
    { label: 'Blog', href: '/' },
  ];

  return (
    <div className='bg-[#f7efec] flex flex-col gap-8 py-8'>
      <div className='w-[30rem] cursor-pointer hover:opacity-80 mx-auto'>
        <Image src='/logo.webp' alt='logo' width={0} height={0} sizes='100vw' className='w-full h-full' />
      </div>
      <ul className='flex justify-center gap-8'>
        {navList.map((nav) => (
          <li key={nav.label} className='text-2xl uppercase'>
            <Link href={nav.href}>{nav.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
