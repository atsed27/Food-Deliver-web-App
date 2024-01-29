import React from 'react';

function MenuNav() {
  return (
    <div className="flex items-start justify-center">
      <div className="overflow-x-scroll sm:overflow-hidden">
        <div className="flex items-center justify-between">
          <div className="mr-3 bg-orange-300 rounded-full">
            <h3 className=" px-4 text-lg py-[2px] font-bold ">Appetizers</h3>
          </div>
          <div className="mr-3 bg-orange-300 rounded-full">
            <h3 className=" px-4 text-lg py-[2px] font-bold ">Soup</h3>
          </div>
          <div className="mr-3 bg-orange-300 rounded-full">
            <h3 className=" px-4 text-lg py-[2px] font-bold "> Pizza </h3>
          </div>
          <div className="mr-3 bg-orange-300 rounded-full">
            <h3 className=" px-4 text-lg py-[2px] font-bold ">Drink </h3>
          </div>
          <div className="mr-3 bg-orange-300 rounded-full">
            <h3 className=" px-4 text-lg py-[2px] font-bold "> Burger </h3>
          </div>
          <div className="mr-3 bg-orange-300 rounded-full">
            <h3 className=" px-4 text-lg py-[2px] font-bold "> Desserts </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuNav;
