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
        className={`relative flex justify-around mx-2 md:mx-0 rounded-md md:rounded-none h-112 md:w-full p-8 md:h-48 lg:h-80 2xl:h-112  ${
          pageFlyer && `2xl:h-[36rem]`
        } bg-gradient-to-r from-gradientstart to-gradientend`}
      >
        <div className="absolute flex items-center md:items-start flex-col md:flex-row md:w-[95%] gap-7 -top-6 lg:-top-10">
          <img
            src={image}
            alt="banner"
            className=" w-[90%] md:w-[30%] rounded-xl"
          />
          <div
            className={`  px-2 text-white self-end  w-full
          ${
            pageFlyer ? ` mt-12 md:mt-0 mb-10` : `md:mt-0 md:justify-end `
          }  flex flex-col   `}
          >
            <Link href={`${route}`}>
              <h1
                className={`flex  flex-row cursor-pointer justify-center w-full ${
                  pageFlyer
                    ? `text-4xl   mb-14 md:mb-0 lg:mt-10 `
                    : `text-2xl 2xl:text-4xl`
                } font-semibold align-center md:justify-start md:text-left`}
              >
                <span
                  className={`${
                    pageFlyer ? `border-b-4 md:border-b-8 pb-3  ` : `border-b-4`
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
    </div>
  );
};

export default PartnersFlyer;
