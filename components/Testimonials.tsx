import React from 'react';

function Testimonials() {
  return (
    <div className=" bg-black/80 text-white py-10  flex flex-col sm:flex-row  px-3 md:px-10  xl:px-20 mt-10  ">
      <div className="flex-1 flex items-center justify-center ">
        <img
          className="w-1/2 xl:w-1/4 object-fill rounded-lg"
          src="/images/home/dani.jpg"
          alt="dani"
        />
      </div>
      <div className="flex-1 py-2 sm:py-0 ">
        <h4 className="text-red-500 text-center text-xl sm:text-start">
          TESTIMONIALS
        </h4>
        <h1 className="text-3xl font-bold">What Our Customers</h1>
        <h1 className="text-3xl font-bold">Say About Us</h1>
        <p className="py-5 text-lg xl:text:xl">
          I had the pleasure of dining at Food last night ,and I'm still raving
          about the eperience! rhe attention to detaile in presentation and
          service was impeccable
        </p>
        <div>Castimer fidback</div>
      </div>
    </div>
  );
}

export default Testimonials;
