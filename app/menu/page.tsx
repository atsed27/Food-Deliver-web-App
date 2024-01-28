import MenuNav from '@/components/MenuNav';
import Appetizers from '@/components/menu/Appetizers';
import Pizza from '@/components/menu/Pizza';
import Soups from '@/components/menu/Soups';
import React from 'react';

function Menu() {
  return (
    <div className="px-3 md:px-10  xl:px-20 ">
      <MenuNav />
      <Appetizers />
      <Soups />
      <Pizza />
    </div>
  );
}

export default Menu;
