import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <footer className="flex  flex-col  items-center justify-center bg-primary mt-10 md:mt-20  mx-3 md:mx-10 pt-7 xl:px-20 ">
      <div className="w-full flex items-center justify-center ">
        <div className="grid sm:grid-cols-2  gap-4 mx-3 my-2  md:grid-cols-4">
          <div className="flex items-center flex-col">
            <h2 className="mb-4 text-xl font-bold md:text-2xl">
              <span className="bg-green-500 text-white px-2 rounded-md ">
                D
              </span>
              oro
            </h2>
            <p className="text-center">
              Lorem ipsum dolor sit amet,consectetur adipiscing elit. Lorem
              ipsum dolor sit amet,consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex items-center flex-col ">
            <h2 className="mb-4 text-xl font-bold ">Useful links</h2>
            <div className="">
              <Link href={'/'}>
                <h2 className="py-1"> About us</h2>
              </Link>{' '}
              <Link href={'/'}>
                <h2 className="py-1"> Events</h2>
              </Link>
              <Link href={'/'}>
                <h2 className="py-1"> Blogs</h2>
              </Link>
              <Link href={'/'}>
                <h2 className="py-1"> FAQ</h2>
              </Link>
            </div>
          </div>
          <div className="flex items-center flex-col">
            <h2 className="mb-4 text-xl font-bold">Main Menu</h2>
            <div className="">
              <Link href={'/'}>
                <h2 className="py-1"> Home</h2>
              </Link>{' '}
              <Link href={'/'}>
                <h2 className="py-1"> Offers</h2>
              </Link>
              <Link href={'/'}>
                <h2 className="py-1"> Menu</h2>
              </Link>
              <Link href={'/'}>
                <h2 className="py-1"> Reservation</h2>
              </Link>
            </div>
          </div>
          <div className="flex items-center flex-col">
            <h2 className="mb-4 text-xl font-bold">Contact Us</h2>
            <div className="">
              <Link href={'/'}>
                <h2 className="py-1">danielnigtu09@gmail.com</h2>
              </Link>{' '}
              <Link href={'/'}>
                <h2 className="py-1">+251 916 213 371</h2>
              </Link>
              <Link href={'/'}>
                <h2 className="py-1">social media</h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="my-4 flex flex-col sm:flex-row items-center ">
        <div className="mr-5">Social media </div>
        <h2 className="text-lg">Copyright @ 2023 Dani | All right reserved</h2>
      </div>
    </footer>
  );
}

export default Footer;
