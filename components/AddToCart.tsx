'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

function AddToCart() {
  const router = useRouter();
  const AddToCart = () => {
    console.log('hy');
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
