import Form from './Common/form';

const Banner = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full mb-48 text-center py-14 lg:h-screen lg:px-20 lg:flex-row bg-gradient-to-r from-gradientstart to-gradientend">
        <div className="flex flex-col w-full text-center text-white lg:text-left lg:w-6/12 sm:pb-24">
          <h1 className="my-10 text-5xl font-semibold text-white mt-36 lg:mt-0 md:text-6xl lg:text-8xl">
            Move around <br /> the city with <br className="hidden lg:block" />{' '}
            ease
          </h1>
          <p className="mb-10 text-sm font-light text-white md:font-normal md:text-lg lg:mb-0 lg:font-medium lg:text-2xl">
            Comfort, Convenient and Reliable rides for everyday{' '}
            <br className="hidden lg:block" />
            commute
          </p>
        </div>
        <Form display="hidden lg:block" />
      </div>
      <Form display="block lg:hidden -mt-10" />
    </>
  );
};

export default Banner;
