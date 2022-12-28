import React from 'react';

import HeaderTextAndColouredArrow from './HeaderTextAndColouredArrow';

interface OfferingProps {
  heading: string;
  text: string;
  color: string;
  src: string;
}

const IndividualOffering = ({ heading, text, color, src }: OfferingProps) => {
  return (
    <div className="relative pt-10 mx-2 mt-10 bg-white shadow-md h-72 md:h-80 lg:h-96 md:mx-0 md:mt-0 md:w-5/12 lg:w-4/12 rounded-3xl">
      <div className="px-3 md:px-10">
        <HeaderTextAndColouredArrow heading={heading} color={color} />
        <p className="w-10/12 pt-5 pb-5 text-base tracking-wide md:text-lg">
          {text}
        </p>
      </div>
      <div className="absolute bottom-0 flex justify-end w-full">
        <img src={src} alt="Businesses" width="100%" className="rounded-3xl" />
      </div>
    </div>
  );
};

export default IndividualOffering;
