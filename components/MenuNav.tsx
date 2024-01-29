import React from 'react';
import axios from 'axios';
import { category } from '@/types/Types';

const getData = async () => {
  try {
    const res = await axios.get('http://localhost:3000/api/category');
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

async function MenuNav() {
  const category: category = await getData();
  return (
    <div className="flex items-start justify-center">
      <div className="overflow-x-scroll sm:overflow-hidden">
        <div className="flex items-center justify-between">
          {category.map((item) => (
            <div className="mr-3 bg-orange-300 rounded-full">
              <h3 className=" px-4 text-lg py-[2px] font-bold ">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MenuNav;
