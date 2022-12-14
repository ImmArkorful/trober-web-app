import Heading from '../../Components/Common/heading';

interface FeatureProps {
  background: string;
  header: string;
  description: string;
  list: boolean;
  reverse: boolean;
  src: string;
}

const Features = ({
  background,
  header,
  description,
  list,
  reverse,
  src,
}: FeatureProps) => {
  return (
    <div
      className={` rounded-3xl lg:items-center py-10 md:py-0 md:m-0 md:rounded-none flex md:h-96 lg:h-128 flex-col md:flex-row justify-between mx-2 my-10 shadow-xl ${background} ${
        reverse
          ? 'md:flex-row-reverse lg:pl-64 md:pl-36 md:pr-24'
          : 'md:pr-0 md:pl-24'
      }`}
    >
      <img
        className="self-center h-52 w-52 md:h-72 md:w-72 lg:h-128 lg:w-128"
        alt="illustratoin"
        src={src}
      />
      <div className="flex flex-col pt-10 md:pt-24 md:w-6/12 lg:w-3/6 md:pb-44">
        <Heading text={header} color={reverse ? 'featuresheader' : 'white'} />
        <p
          className={`mt-5 px-5 md:px-0 text-sm lg:text-xl text-center md:text-base md:text-left font-medium tracking-wide md:w-5/6 ${
            reverse ? 'text-featuresdescription' : 'text-white'
          }`}
        >
          {description}
        </p>
        {list && (
          <ul className="hidden ml-5 text-sm font-medium text-white list-disc md:text-base lg:text-xl md:block ">
            <li>Choose your route</li>
            <li>Set your pickup bus stop</li>
            <li>Set your destination bus stop</li>
            <li>Review and confirm</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Features;
