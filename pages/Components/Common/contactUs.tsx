interface ContactUsProps {
  backgroundLg: string;
  backgroundSm: string;
}
const ContactUs = ({ backgroundLg, backgroundSm }: ContactUsProps) => {
  return (
    <div
      className={`w-full my-32  md:min-h-[70%] 2xl:min-h-[90%] flex flex-col items-center justify-between py-14 2xl:py-44 
      ${backgroundLg}  ${backgroundSm} bg-cover bg-center `}
      id="contact-form"
    >
      <span className="text-3xl text-white underline decoration-underlinecolor">
        Contact Us
      </span>
      <form className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-col items-center w-full px-10 mt-16 lg:mt-24 md:flex-row md:justify-evenly mb-102xl:px-44">
          <div className="flex flex-col items-center justify-center w-full ">
            <input
              type="text"
              className="mb-4 md:mb-10 w-[100%] md:w-80 2xl:w-96 h-12 rounded-md border-gray-300 border-2 bg-gray-200 p-2 opacity-70 placeholder-gray-600"
              placeholder="Name"
            />
            <input
              type="text"
              className="mb-4 md:mb-10 w-[100%] md:w-80 2xl:w-96 h-12 rounded-md border-gray-300 border-2 bg-gray-200 p-2 opacity-70 placeholder-gray-600"
              placeholder="Phone Number"
            />
            <input
              type="text"
              className=" w-[100%] md:w-80 h-12 rounded-md 2xl:w-96 border-gray-300 border-2 bg-gray-200 p-2 opacity-70 placeholder-gray-600"
              placeholder="Email"
            />
          </div>
          <div className="flex w-full mt-4 md:mt-0 md:items-end">
            <textarea
              name="message"
              id="message"
              className="h-40 w-[100%] md:w-80 border-gray-300 rounded-md bg-gray-200 p-2 opacity-70 placeholder-gray-600 2xl:w-96 resize-none"
              placeholder="Message"
            />
          </div>
        </div>
        <button
          className="mt-2 bg-[#ACFE14] hover:opacity-70 text-black rounded-xl p-3 w-32 font-bold "
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
