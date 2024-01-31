import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Cart() {
  return (
    <div className="px-3 md:px-10 xl:px-60 mt-10 md:mb-40 lg:mb-52">
      <div>
        <div className="overflow-auto">
          <table className="min-w-full">
            <thead className="border-b">
              <tr>
                <th className="px-5 text-left">Item</th>
                <th className="p-5 ">Des</th>
                <th className="p-5 ">Quantity</th>
                <th className="p-5 text-right">Price</th>
                <th className="p-5 ">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b ">
                <td className="py-10  ">
                  <Link
                    className="flex sm:flex-row flex-col items-center"
                    href="/"
                  >
                    <Image
                      src={'/temporary/p2.png'}
                      alt={'no'}
                      width={100}
                      height={100}
                    />
                    <h2>Burger</h2>
                  </Link>
                </td>
                <td className="p-5 text-center ">hfkjrfnekr kfeirfhk ifier</td>
                <td className="p-5 text-right">
                  <div className="flex items-center justify-center flex-col sm:flex-row">
                    <span className="bg-black/70 px-4 text-lg font-bold rounded-md">
                      +
                    </span>
                    <span className="mx-2">1</span>
                    <span className="bg-gray-200 px-4 text-lg font-bold rounded-md">
                      -
                    </span>
                  </div>
                </td>
                <td className="p-5 text-right">$30</td>
                <td className="p-5 text-center">
                  <button>x</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-8 md:mt-14 flex items-center md:justify-end overflow-auto">
          <div className="flex items-center justify-between border rounded px-3 py-2 mr-4 ">
            <h3 className="text-lg mr-4">Discount</h3>
            <h3 className="text-lg font-bold">$0.00</h3>
          </div>
          <div className="flex items-center justify-between border rounded px-3 py-2 mr-4 ">
            <h3 className="text-lg mr-4">Delivery</h3>
            <h3 className="text-lg font-bold">$0.00</h3>
          </div>
          <div className="flex items-center justify-between border rounded px-3 py-2 mr-4 ">
            <h3 className="text-lg mr-4">SubTotal</h3>
            <h3 className="text-lg font-bold">$150.00</h3>
          </div>
          <div className="flex items-center justify-between border rounded px-3 py-2 mr-4 ">
            <h3 className="text-lg mr-4">Total</h3>
            <h3 className="text-lg font-bold">$120.00</h3>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-xl font-medium">
            If you have promotion cart ,pleas enter here:
          </p>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          <div className=" w-full h-12 md:col-span-2 bg-red-400  bg--500 ">
            <input
              className="lg:w-4/5 sm:3/4 w-3/5 h-full "
              placeholder="Please Enter Promo code"
              autoFocus
            />
            <button className="w-2/5 sm:w-1/4 lg:w-1/5 text-center">
              Apply Discount
            </button>
          </div>
          <div className="">
            <div className="flex items-center w-full ">
              <div className="bg-green-400 px-5  w-4/5 py-2 mr-4">
                <button className="text-lg font-bold">Checkout</button>
              </div>
              <h2 className="bg-green-400 px-5 w-1/5 py-2 ">icon</h2>
            </div>
            <div className="bg-gray-200 my-2 px-5 py-2">
              <button className="text-lg font-bold">Update Quantity</button>
            </div>
            <div className="bg-gray-200 px-5 py-2">
              <button className="text-lg font-bold">Continue Shopping</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
