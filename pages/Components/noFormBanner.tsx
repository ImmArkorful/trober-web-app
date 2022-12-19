interface NoFormBannerProps {
  title: string;
  paragraph: string;
  buttonText: string;
}

const NoFormBanner = ({ title, paragraph, buttonText }: NoFormBannerProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-full text-center lg:min-h-screen  bg-gradient-to-r from-gradientstart to-gradientend ">
      <div className="flex flex-col w-full text-white py-20 justify-between items-center md:py-52 ">
        <h1 className="  text-2xl px-6 font-medium mb-3 md:text-5xl lg:text-8xl md:px-30 md:mb-8 ">
          {title}
        </h1>
        <p className="px-6 text-sm md:text-base lg:text-3xl lg:font-thin md:px-52 lg:px-52">
          {paragraph}
        </p>
        <button
          className="bg-[#ACFE14] text-black rounded-xl p-3 w-32 font-bold mt-14"
          type="button"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default NoFormBanner;
