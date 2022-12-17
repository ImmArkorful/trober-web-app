import React from 'react';

const ContactUs = () => {
  return (
    <div className="w-full my-32  md:min-h-[70%] 2xl:min-h-[90%] flex flex-col items-center justify-between p-14 2xl:py-44 bg-businesswoman-mobile-bg md:bg-businesswoman-image 2xl:bg-business-woman-largeSC bg-cover object-cover ">
      <span className="text-3xl underline text-white decoration-underlinecolor">
        Contact Us
      </span>
      <div className="mt-24 flex flex-col items-center  md:flex-row md:justify-evenly w-full mb-10 2xl:px-44">
        <div className="flex flex-col items-center justify-center">
          <input
            type="text"
            className="mb-4 md:mb-10 w-80 2xl:w-96 h-12 rounded-md border-gray-300 border-2 bg-gray-200 p-2 opacity-70 placeholder-gray-600"
            placeholder="Name"
          />
          <input
            type="text"
            className="mb-4 md:mb-10 w-80 2xl:w-96 h-12 rounded-md border-gray-300 border-2 bg-gray-200 p-2 opacity-70 placeholder-gray-600"
            placeholder="Phone Number"
          />
          <input
            type="text"
            className="w-80 h-12 rounded-md 2xl:w-96 border-gray-300 border-2 bg-gray-200 p-2 opacity-70 placeholder-gray-600"
            placeholder="Email"
          />
        </div>
        <div className="flex mt-4 md:mt-0 md:items-end">
          <textarea
            name="message"
            id="message"
            className="h-40 w-80 2xl:w-96 border-gray-300 rounded-md bg-gray-200 p-2 opacity-70 placeholder-gray-600 2xl:w-96 resize-none"
            placeholder="Message"
          />
        </div>
      </div>
      <button
        className="mt-2 bg-[#ACFE14] text-black rounded-xl p-3 w-32 font-bold "
        type="button"
      >
        Submit
      </button>
    </div>
  );
};

export default ContactUs;
