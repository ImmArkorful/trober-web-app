/* eslint-disable global-require */
import React from 'react';

import Arrow from '../Svgs/Arrow';

interface OfferingProps {
  heading: string;
  text: string;
  color: string;
  src: string;
}

const IndividualOffering = ({ heading, text, color, src }: OfferingProps) => {
  return (
    <div className="pt-10 h-72 md:h-80 lg:h-96 relative mx-2 mt-10 bg-white shadow-md hover:cursor-pointer md:mx-0 md:mt-0 md:w-5/12 lg:w-4/12 rounded-3xl">
      <div className="px-3 md:px-10">
        <div className="flex flex-row items-center ">
          <p className="mr-4 text-2xl font-medium tracking-wide md:text-4xl">
            {heading}
          </p>
          <Arrow color={color} />
        </div>
        <p className="w-10/12 pt-5 pb-5 text-base tracking-wide md:text-lg">
          {text}
        </p>
      </div>
      <div className="flex justify-end absolute bottom-0 w-full">
        <img src={src} alt="Businesses" width="100%" className="rounded-3xl" />
      </div>
    </div>
  );
};

export default IndividualOffering;
