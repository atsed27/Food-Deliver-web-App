import Link from 'next/link';
import React from 'react';

function Best() {
  return (
    <div className=" px-3 md:px-10 pt-7 xl:px-20 flex flex-col sm:flex-row items-center justify-between">
      <div className=" flex-1 ">
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Doro Bliss ,Evert Roll Flavorful Kiss{' '}
          </h2>
          <p className="text-lg">
            Master of Hbeshan food get her nu be habesha mgboch zena envel enble
            enteta hulu molto aster of Hbeshan food get her nu be habesha mgboch
            zena envel enble enteta hulu molto
          </p>
          <div className="flex items-center justify-evenly py-4">
            <Link
              href={'/order'}
              className="bg-green-500 px-7 py-2 rounded-full shadow-xl "
            >
              Order Now
            </Link>
            <div className="flex items-center justify-around">
              <p className=" mr-2">Watch Video</p>
              <div>Icon</div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex-1 flex items-center justify-center">
        <img
          className="w-4/5 lg:w-2/3 xl:w-1/2 object-contain "
          src="/temporary/p2.png"
          alt="base doro"
        />
      </div>
    </div>
  );
}

export default Best;
