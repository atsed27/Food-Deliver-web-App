import React from 'react';

function PopularCategories() {
  return (
    <div className="px-3 md:px-10  xl:px-20 pt-4  ">
      <h4 className="text-red-600 text-center">CUSTOMER FAVORITES</h4>
      <h1 className="text-3xl text-center font-bold">Popular Categories</h1>
      <div className=" grid  justify-end sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-0">
        <div className="flex items-center justify-center">
          <div className=" bg-slate-50 rounded-lg shadow-xl sm:shadow-md py-2 my-4 w-3/4 flex items-center justify-center flex-col">
            <img
              className="w-1/2 object-contain"
              src="/temporary/p1.png"
              alt="mainDish"
            />
            <h1>Main Dish</h1>
            <span>(86 dishes)</span>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className=" bg-slate-50 rounded-lg shadow-xl sm:shadow-md py-2 my-4 w-3/4 flex items-center justify-center flex-col">
            <img
              className="w-1/2 object-contain"
              src="/temporary/p1.png"
              alt="mainDish"
            />
            <h1>Main Dish</h1>
            <span>(86 dishes)</span>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className=" bg-slate-50 rounded-lg shadow-xl sm:shadow-md py-2 my-4 w-3/4 flex items-center justify-center flex-col">
            <img
              className="w-1/2 object-contain"
              src="/temporary/p1.png"
              alt="mainDish"
            />
            <h1>Doro Combo</h1>
            <span>(6 dishes)</span>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className=" bg-slate-50 rounded-lg shadow-xl sm:shadow-md py-2 my-4 w-3/4 flex items-center justify-center flex-col">
            <img
              className="w-1/2 object-contain"
              src="/temporary/p1.png"
              alt="mainDish"
            />
            <h1>Browse All</h1>
            <span>(86 items)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularCategories;
