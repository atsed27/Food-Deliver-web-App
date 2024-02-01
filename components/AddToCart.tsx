'use client';

import { productType } from '@/types/Types';
import { cartStore } from '@/utils/store';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

function AddToCart({ product }: { product: productType }) {
  const { addToCart } = cartStore();
  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  console.log(product);
  useEffect(() => {
    cartStore.persist.rehydrate();
  }, []);
  useEffect(() => {
    setTotal(quantity * product.price);
  }, []);
  const AddToCart = () => {
    console.log('hy');
    addToCart({
      id: product.id,
      title: product.title,
      img: product.img,
      price: total,
      quantity: quantity,
    });
    router.push('/cart');
  };
  return (
    <div>
      <button
        onClick={AddToCart}
        className="w-full bg-green-400 py-1 rounded-md"
      >
        Add to cart
      </button>
    </div>
  );
}

export default AddToCart;
