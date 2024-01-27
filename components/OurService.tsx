import Link from 'next/link';
import React from 'react';

function OurService() {
  return (
    <div className="px-3 md:px-10  xl:px-20 mt-10">
      <div className="flex  sm:flex-row flex-col items-center justify-between">
        <div className="flex-1">
          <h4 className="text-red-500 text-center sm:text-start my-4">
            OUR STOR AND SERVICE
          </h4>
          <h1 className="text-3xl font-bold ">Our Culinary Journey</h1>
          <h1 className="text-3xl font-bold">And Service</h1>
          <p className="text-lg mb-4 mt-6">
            I had the pleasure of dining at Food last night ,and I'm still
            raving about the eperience! rhe attention to detaile in presentation
            and service was impeccable I had the pleasure of dining at Food last
            night ,and I'm still raving about the eperience! rhe attention to
            detaile in presentation and service was impeccable
          </p>
          <Link
            className="text-xl shadow-lg font-semibold text-white bg-green-500 rounded-full px-5 py-2 "
            href={'/services'}
          >
            Explore
          </Link>
        </div>
        <div className="flex-1 my-10 w-full overflow-x-scroll sm:overflow-hidden sm:w-auto">
          <div className="w-max sm:w-auto flex sm:grid sm:grid-cols-2 gap-4">
            <div className="flex items-center justify-center w-screen sm:w-auto">
              <div className="bg-slate-50 rounded-lg  w-4/5 flex flex-col  items-center justify-center mb-4 ">
                <div className="flex flex-col items-center justify-center pt-4">
                  <img
                    className="w-1/2 object-fill"
                    src="/temporary/p6.png"
                    alt="dani"
                  />
                  <h2 className="flex uppercase text-center text-green-500 py-3">
                    {' '}
                    Catering
                  </h2>
                </div>
                <div>
                  <p className="text-center px-4 pb-4">
                    Delight your guest with our favors and presentation
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center w-screen sm:w-auto">
              <div className="bg-slate-50 rounded-lg  w-4/5 flex flex-col  items-center justify-center mb-4 ">
                <div className="flex flex-col items-center justify-center pt-4">
                  <img
                    className="w-1/2 object-fill"
                    src="/temporary/p6.png"
                    alt="dani"
                  />
                  <h2 className="flex uppercase text-center text-green-500 py-3">
                    {' '}
                    Catering
                  </h2>
                </div>
                <div>
                  <p className="text-center px-4 pb-4">
                    Delight your guest with our favors and presentation
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center w-screen sm:w-auto">
              <div className="bg-slate-50 rounded-lg  w-4/5 flex flex-col  items-center justify-center mb-4 ">
                <div className="flex flex-col items-center justify-center pt-4">
                  <img
                    className="w-1/2 object-fill"
                    src="/temporary/p6.png"
                    alt="dani"
                  />
                  <h2 className="flex uppercase text-center text-green-500 py-3">
                    {' '}
                    Catering
                  </h2>
                </div>
                <div>
                  <p className="text-center px-4 pb-4">
                    Delight your guest with our favors and presentation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurService;
