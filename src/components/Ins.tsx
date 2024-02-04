import React from 'react';

declare global {
  interface Window {
    adsbygoogle: { [key: string]: unknown }[];
  }
}

// TODO: Figure out how to use this component on server-side rendering
// Potential error: When change route, ads will not re-fetch
export default function Ins({ className }: { className?: string }) {
  React.useEffect(() => {
    // The window object is only accessible on the client-side
    try {
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (error) {
      // In development a 'tagerror - All ins elements in the DOM with class=adsbygoogle already have ads in them' will alway be thrown
      // This error occurs because the adsbygoogle script is loaded twice, which is happening because of strict mode
      console.log(error);
    }
  }, []);
  return (
    <ins
      className={`adsbygoogle ${className}`}
      style={{
        display: 'block',
        overflow: 'hidden',
        width: 1200,
        height: 150,
        // border: '1px solid red', // Placeholder for development
      }}
      data-ad-client={'ca-pub-8150668551715727'}
      data-ad-slot={'4212530951'}
      data-ad-format='fluid'
    />
  );
}
