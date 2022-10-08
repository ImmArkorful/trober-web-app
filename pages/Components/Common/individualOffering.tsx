/* eslint-disable global-require */
// import BusinessesIllustration from '../Svgs/BusinessesIllustration';

import Arrow from '../Svgs/Arrow';

interface OfferingProps {
  heading: string;
  text: string;
  color: string;
}

const IndividualOffering = ({ heading, text, color }: OfferingProps) => {
  return (
    <div className="px-3 py-10 mx-2 mt-10 bg-white shadow-md md:px-10 md:mx-0 md:mt-0 md:w-5/12 lg:w-4/12 rounded-3xl">
      <div>
        <div className="flex flex-row items-center">
          <p className="mr-4 text-2xl font-bold tracking-wide md:text-4xl">
            {heading}
          </p>
          <Arrow color={color} />
        </div>
        <p className="w-10/12 pt-5 text-base tracking-wide md:text-lg">
          {text}
        </p>
      </div>
      <div className="flex flex-1">
        <img src="/image4.png" alt="Businesses" width="100%" />
      </div>
    </div>
  );
};

export default IndividualOffering;
