'use client';

import { Button } from '@/components';
import { configs } from '@/configs';
import { Product } from '@/services/product/types';

export function PlaceOrderButton({ product }: { product: Product }) {
  const urlSite = `${configs.uriClient}/p/${product.slug}`;
  const sendToFacebook = () => {
    const message = encodeURIComponent(`Xin Chào, mình muốn hỏi mua sản phẩm: ${product.name}, link: ${urlSite}`);
    const zaloLink = `https://m.me/108746482150895?text=${message}`;
    window.open(zaloLink, '_blank');
  };

  const sendToZalo = () => {
    const message = encodeURIComponent(`Xin Chào, mình muốn hỏi mua sản phẩm: ${product.name}, link: ${urlSite}`);
    const zaloLink = `zalo://send?phone=84705740407&text=${message}`;
    window.open(zaloLink, '_blank');
  };

  return (
    <div className='flex flex-col gap-2'>
      <Button className='!py-4 !text-base' onClick={sendToFacebook}>
        Đặt hàng qua Facebook
      </Button>
      <Button className='!py-4 !text-base' onClick={sendToZalo}>
        Đặt hàng qua Zalo
      </Button>
    </div>
  );
}
