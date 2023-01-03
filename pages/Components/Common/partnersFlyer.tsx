import React from 'react';
import PartnerArrow from '../Svgs/PartnerArrow';

interface PartnersFlyerProps {
  image: string;
  heading: string;
  underLinedHeading: string;
  text: string;
  headingSize: string;
  borderSize: string;
  arrowPresent: boolean;
}

const PartnersFlyer = ({
  image,
  heading,
  text,
  underLinedHeading,
  headingSize,
  borderSize,
  arrowPresent,
}: PartnersFlyerProps) => {
  return (
    <div>
      <div className="relative flex justify-around w-full p-8 md:h-80 lg:h-112 bg-gradient-to-r from-gradientstart to-gradientend">
        <img
          src={image}
          alt="partner"
          className="absolute lg:h-72 ml-5 md:ml-16 w-[90%] md:w-80 lg:w-112 -top-6 left-0 lg:left-16 rounded-xl object-cover"
        />
        <div className="md:h-48 md:w-[45%] px-2 text-white  mt-[15rem] md:mt-0 lg:mt-0 md:ml-[25rem] lg:ml-[32rem] flex flex-col  md:justify-end ">
          <h1
            className={`flex flex-row justify-center w-full ${headingSize} font-semibold align-center md:justify-start md:text-left`}
          >
            <span className={`${borderSize} border-underlinecolor `}>
              {underLinedHeading}
            </span>
            <span>{heading}</span>
            {arrowPresent && (
              <div className="items-center hidden md:flex">
                <PartnerArrow />
              </div>
            )}
          </h1>

          <p className="text-lg text-center md:w-5/6 md:text-left">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default PartnersFlyer;
