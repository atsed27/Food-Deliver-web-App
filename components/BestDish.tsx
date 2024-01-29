import { product } from '@/types/Types';
import axios from 'axios';
import React from 'react';

const getData = async () => {
  try {
    const res = await axios.get('http://localhost:3000/api/product/best');
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

async function BestDish() {
  const products: product = await getData();

  return (
    <div className="px-3 md:px-10  xl:px-20 mt-10 ">
      <h5 className="text-red-500 py-4">SPECIAL DISHES</h5>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Best Dishes </h1>
          <h1 className="text-3xl font-bold">From Our Menu</h1>
        </div>
        <div className=" hidden sm:flex items-center justify-between">
          <button className="mr-10">B</button>
          <button>F</button>
        </div>
      </div>
      <div className="w-full overflow-x-scroll sm:overflow-hidden">
        <div className="flex sm:grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 w-max sm:w-auto">
          {products?.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-center w-screen sm:w-auto"
            >
              <div className=" bg-slate-50 rounded-lg shadow-xl sm:shadow-md  my-4 w-3/4 ">
                <div className="flex items-center justify-end ">
                  <div className="bg-green-500 px-3 py-2 rounded-tr-lg ">
                    love
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  {item.img && (
                    <img
                      className="w-1/2 object-contain"
                      src={item.img}
                      alt="mainDish"
                    />
                  )}
                </div>
                <div className="flex flex-col items-start justify-between px-3">
                  <h1 className="text-xl font-bold">{item.title}</h1>
                  <p>Description of Item</p>
                </div>
                <div className="flex items-start justify-between px-3">
                  <p className="text-xl font-bold">${item.price}</p>
                  <div className="flex items-center justify-between">
                    <button className="mr-4">Icon</button>
                    <p className="text-sm">4.9</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BestDish;
