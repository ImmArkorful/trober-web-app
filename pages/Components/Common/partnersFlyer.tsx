import React from 'react';
import PartnerArrow from '../Svgs/PartnerArrow';

interface PartnersFlyerProps {
  image: string;
  heading: string;
  underLinedHeading: string;
  text: string;
}

const PartnersFlyer = ({
  image,
  heading,
  text,
  underLinedHeading,
}: PartnersFlyerProps) => {
  return (
    <div>
      <div className="relative flex w-full md:h-80 bg-gradient-to-r from-gradientstart to-gradientend">
        <img
          src={image}
          alt="partner"
          className="absolute h-60 ml-5 md:ml-16 w-[90%] md:w-80 lg:w-112 -top-6 rounded-xl "
        />
        <div className="md:h-48 md:w-[45%] px-2 text-white  mt-[15rem] md:mt-0 lg:mt-0 md:ml-[25rem] lg:ml-[32rem] flex flex-col  md:justify-end ">
          <h1 className="flex flex-row w-full text-2xl font-semibold md:text-left">
            <span className="border-b-2 border-underlinecolor ">
              {underLinedHeading}
            </span>
            <span>{heading}</span>
            <span className="mt-auto">
              <PartnerArrow />
            </span>
          </h1>

          <p className="text-lg text-center md:text-left">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default PartnersFlyer;
