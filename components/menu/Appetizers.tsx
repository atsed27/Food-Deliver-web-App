import React from 'react';

function Appetizers() {
  return (
    <div className="mt-4">
      <div>
        <h1 className="md:text-3xl xl:text-5xl text-2xl font-bold">
          Appetizers
        </h1>
        <div className="overflow-x-scroll sm:overflow-hidden mt-4">
          <div className="flex w-max sm:w-full  sm:flex-col  ">
            <div className="w-screen sm:w-full justify-between flex-col sm:flex-row flex  sm:border ">
              <div className="flex flex-col   sm:flex-row items-center sm:items-start justify-center sm:justify-start w-11/12 h-11/12 sm:w-1/2">
                <img className="  sm:w-1/3" src="/temporary/p6.png" alt="ap1" />
                <div className="flex mt-4  flex-col sm:ml-5 sm:mt-5 items-center sm:items-start justify-center sm:flex-row sm:justify-start ">
                  <h3 className="text-xl font-bold my-3">Appetize 1 (450g) </h3>
                  <h3 className="text-xl font-bold mb-3 sm:hidden">$21.00</h3>
                </div>
              </div>
              <div className="  sm:hidden bg-amber-500 mx-5 flex items-center justify-center sm:justify-start   ">
                <button className="text-lg py-[6px]">Order Now</button>
              </div>
              <div className=" hidden  mb-3 bottom-0 sm:flex mx-5 items-end justify-end ">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold mr-5">$ 21.00 </h3>
                  <button className="text-lg px-8 rounded-md py-1  bg-amber-500">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
            <div className="w-screen sm:w-full justify-between flex-col sm:flex-row flex  sm:border ">
              <div className="flex flex-col   sm:flex-row items-center sm:items-start justify-center sm:justify-start w-11/12 h-11/12 sm:w-1/2">
                <img className="  sm:w-1/3" src="/temporary/p2.png" alt="ap1" />
                <div className="flex mt-4  flex-col sm:ml-5 sm:mt-5 items-center sm:items-start justify-center sm:flex-row sm:justify-start ">
                  <h3 className="text-xl font-bold my-3">Appetize 1 (450g) </h3>
                  <h3 className="text-xl font-bold mb-3 sm:hidden">$21.00</h3>
                </div>
              </div>
              <div className="  sm:hidden bg-amber-500 mx-5 flex items-center justify-center sm:justify-start   ">
                <button className="text-lg py-[6px]">Order Now</button>
              </div>
              <div className=" hidden  mb-3 bottom-0 sm:flex mx-5 items-end justify-end ">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold mr-5">$ 21.00 </h3>
                  <button className="text-lg px-8 rounded-md py-1  bg-amber-500">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appetizers;
