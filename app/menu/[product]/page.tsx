import { productType } from '@/types/Types';
import axios from 'axios';
import Link from 'next/link';
import React from 'react';

const getData = async (id: string) => {
  try {
    const res = await axios.get(`http://localhost:3000/api/product/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
    throw new Error('failed');
  }
};

type Props = {
  params: { product: string };
};
async function OneProduct({ params }: Props) {
  console.log(params.product);
  const singleProduct: productType = await getData(params.product);
  return (
    <div className="px-3 md:px-0  lg:px-20 ">
      <div className="py-2">
        <Link href={'/'}>back to product</Link>
      </div>
      <div className="grid gap-4 md:grid-cols-4 md:gap-2 lg:gap-5 mt-4">
        <div className="md:col-span-2   w-full md:w-3/4">
          {singleProduct.img && <img src={singleProduct.img} alt={'pizza'} />}
        </div>
        <div className="">
          <ul>
            <li>
              <h1 className="text-lg font-bold"> {singleProduct.title} </h1>
            </li>
            <li>Category:Pizza</li>
            <li>Brand:Brand</li>
            <li>5 of 4 reviews</li>
            <li>
              Description:Dnie berger ywedalDnie berger ywedalDnie berger
              ywedalDnie berger ywedalDnie berger ywedalDnie berger ywedalDnie
              berger ywedal
            </li>
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
            <button className="w-full bg-green-400 py-1 rounded-md">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OneProduct;
