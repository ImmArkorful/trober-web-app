interface TextProps {
  text: string;
}

const BoldText = ({ text }: TextProps) => {
  return <span className="font-semibold text-textblue">{text}</span>;
};

const About = () => {
  return (
    <div className="lg:px-24 bg-pagebg lg:pt-48">
      <div className="flex flex-col-reverse lg:flex-row">
        <div className="flex items-center justify-center pt-2 lg:pt-0 lg:w-3/6">
          <p className="px-1 text-lg font-semibold tracking-wide text-center md:w-4/6 lg:w-3/6 md:text-2xl">
            We use our technology to connect riders to independent bus service
            provides.
          </p>
        </div>
        <div className="flex self-center pt-5 lg:pt-0 lg:w-2/6">
          <img
            alt="about illustration"
            src="https://res.cloudinary.com/troberapp-com/image/upload/v1665264638/Web%20app%20assets/Web/ilusstr_1_1_kcuxxw.svg"
          />
        </div>
      </div>
      <div className="flex justify-center w-full px-1 pt-5 lg:pt-24">
        <p className="self-center text-sm leading-loose tracking-wide text-center md:text-base text lg:text-justify lg:text-xl lg:w-2/6">
          Book a ride for your <BoldText text="business" />,
          <BoldText text="event" />, <BoldText text="church" />,
          <BoldText text="school" /> or <br className="block lg:hidden" />
          <BoldText text="daily commute" />. Life is stressful enough, let
          Trober
          <br className="block lg:hidden" /> make commuting{' '}
          <BoldText text="hassle-free" /> for you.
        </p>
      </div>
    </div>
  );
};

export default About;
