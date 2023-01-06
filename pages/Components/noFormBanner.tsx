import Link from 'next/link';

interface NoFormBannerProps {
  title: string;
  paragraph: string;
  buttonText: string;
}

const NoFormBanner = ({ title, paragraph, buttonText }: NoFormBannerProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-full text-center lg:min-h-screen bg-gradient-to-r from-gradientstart to-gradientend ">
      <div className="flex flex-col items-center justify-between w-full py-20 text-white md:py-52 ">
        <h1 className="px-6 mb-3 text-2xl font-medium md:text-5xl lg:text-8xl md:px-30 md:mb-8">
          {title}
        </h1>
        <p className="px-6 text-sm md:text-base lg:text-3xl lg:font-thin md:px-52 lg:px-52">
          {paragraph}
        </p>
        <Link href="#contact-form">
          <div className="bg-[#ACFE14] text-black rounded-xl p-3 w-32 font-bold mt-14 cursor-pointer">
            {buttonText}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NoFormBanner;
