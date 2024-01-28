import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function OneProduct() {
  return (
    <div>
      <div className="py-2">
        <Link href={'/'}>back to product</Link>
      </div>
      <div className="grid gap-4 md:grid-cols-4 md:gap-10">
        <div className="md:col-span-2">
          <Image
            src={'/temporary/p3.png'}
            alt={'pizza'}
            width={600}
            height={600}
            layout="responsive"
          />
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-lg"> Spacial Pizza </h1>
            </li>
            <li>Category:Pizza</li>
            <li>Brand:Brand</li>
            <li>5 of 4 reviews</li>
            <li>Description:Dnie berger ywedal</li>
          </ul>
        </div>
        <div>
          <div className="p-5 card">
            <div className="flex justify-between mb-2">
              <div>price</div>
              <div>$20</div>
            </div>
            <div className="flex justify-between my-2">
              <div>status</div>
              <div>{1 > 0 ? 'InStack' : 'Unavailable'}</div>
            </div>
            <button className="w-full primary-button">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OneProduct;
