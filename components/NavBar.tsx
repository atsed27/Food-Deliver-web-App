'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

function NavBar() {
  const router = useRouter();
  const [InOut, setInOut] = useState(false);
  console.log(InOut);
  return (
    <>
      <div className="flex items-center justify-between text-xl pt-2 mb-4 md:mb-10 px-3 md:px-10 xl:20">
        <div className="text-2xl font-bold hidden sm:flex ">
          <span className="bg-green-500 text-white px-2 rounded-md ">D</span>
          oro
        </div>
        <div onClick={() => setInOut(!InOut)} className="flex sm:hidden">
          <Image src="/Icon/menu.svg" width={30} height={30} alt="menu" />
        </div>
        <div className="hidden sm:flex items-center justify-center">
          <Link className="mr-2 xl:mr-5 text-green-500" href={'/'}>
            Home
          </Link>
          <div className="mr-2 xl:mr-5 flex items-center">
            <Link href={'/'} className="mr-2">
              Menu
            </Link>
            <div>do</div>
          </div>
          <Link href={'/'} className="mr-2 xl:mr-5">
            About As
          </Link>
          <div className="mr-2 flex items-center xl:mr-5">
            <Link href={'/'} className="mr-2">
              Services
            </Link>
            <div>do</div>
          </div>
          <Link href={'/'}>Offers</Link>
        </div>
        <div className="flex items-center justify-between">
          <div className="mr-2">
            <Link href={'/cart'}>
              Cart{' '}
              <span className="rounded-full px-2 text-white bg-green-400">
                1
              </span>
            </Link>
          </div>
          <Link className="bg-slate-200 px-2 rounded-xl" href={'/login'}>
            Sign In
          </Link>
        </div>
      </div>
      {/**Mobile nav bar */}
      <div
        className={
          InOut
            ? 'top-0 left-0 h-screen bg-black/70 w-full fixed md:hidden'
            : ''
        }
      >
        <div
          className={
            InOut
              ? 'bg-[#ecf0f3] h-screen w-3/4 sm:w-8/12 top-0 overflow-y-scroll eas duration-500  left-0 fixed md:hidden flex flex-col justify-between'
              : 'fixed left-[-100%] top-0 ease-in duration-500 h-screen md:hidden'
          }
        >
          <div className="p-10 flex justify-between ">
            <div>
              <div className="text-2xl font-bold mb-5 ">
                <span className="bg-green-500 text-white px-2 rounded-md ">
                  D
                </span>
                oro
              </div>
              <div className="flex flex-col py-4">
                <ul className="">
                  <Link onClick={() => setInOut(!InOut)} href={'/'}>
                    <li className="py-4 text-smt text-green-500">Home</li>
                  </Link>
                  <Link onClick={() => setInOut(!InOut)} href={'/menu'}>
                    <li className="py-4 text-sm">Menu</li>
                  </Link>
                  <Link onClick={() => setInOut(!InOut)} href={'/about'}>
                    <li className="py-4 text-sm">About Us</li>
                  </Link>
                  <Link onClick={() => setInOut(!InOut)} href={'/services'}>
                    <li className="py-4 text-sm">Project</li>
                  </Link>
                  <Link onClick={() => setInOut(!InOut)} href={'/offers'}>
                    <li className="py-4 text-sm">Offers</li>
                  </Link>
                </ul>
              </div>
            </div>
            <div className="rounded-full  ">
              <h1 onClick={() => setInOut(!InOut)} className="text-2xl">
                X
              </h1>
            </div>
          </div>
          <div className=" p-10  flex flex-col items-baseline  justify-end">
            social
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
