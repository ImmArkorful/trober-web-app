import Link from 'next/link';
import React from 'react';
import PartnerArrow from '../Svgs/PartnerArrow';

interface PartnersFlyerProps {
  image: string;
  heading: string;
  underLinedHeading: string;
  text: string;
  route: string;
  pageFlyer: boolean;
}

const PartnersFlyer = ({
  image,
  heading,
  text,
  underLinedHeading,
  route,
  pageFlyer,
}: PartnersFlyerProps) => {
  return (
    <div>
      <div
        className={`relative flex justify-around w-full p-8 md:h-80 lg:h-112  ${
          pageFlyer && `2xl:h-[36rem]`
        } bg-gradient-to-r from-gradientstart to-gradientend`}
      >
        <img
          src={image}
          alt="partner"
          className={`absolute lg:h-72 ml-5 md:ml-16 w-[90%] md:w-80 lg:w-112 2xl:w-[40rem] -top-6 left-0 lg:left-16 rounded-xl object-cover ${
            pageFlyer && `2xl:w-[45%] 2xl:h-96 `
          }`}
        />
        <div
          className={`md:h-48 md:w-[45%] px-2 text-white  mt-[15rem] 
          ${
            pageFlyer
              ? `2xl:ml-[62rem] 2xl:mt-14 md:mt-0 md:pt-16 `
              : `md:mt-0 md:justify-end `
          } md:ml-[20rem] lg:ml-[28rem] 2xl:ml-128 flex flex-col   `}
        >
          <Link href={`${route}`}>
            <h1
              className={`flex flex-row cursor-pointer justify-center w-full ${
                pageFlyer
                  ? `text-5xl 2xl:text-8xl mb-14 md:mb-0 lg:mt-10 `
                  : `text-2xl : 2xl:text-5xl`
              } font-semibold align-center md:justify-start md:text-left`}
            >
              <span
                className={`${
                  pageFlyer ? `border-b-8 pb-3` : `border-b-2`
                } border-underlinecolor `}
              >
                {underLinedHeading}
              </span>
              <span>{heading}</span>
              {!pageFlyer && (
                <div className="items-center hidden md:flex">
                  <PartnerArrow />
                </div>
              )}
            </h1>
          </Link>

          <p className="text-lg text-center md:w-5/6 md:text-left 2xl:text-2xl">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PartnersFlyer;
