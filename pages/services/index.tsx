import type { NextPage } from 'next';
import ContactUs from '../Components/Common/contactUs';
import Footer from '../Components/footer';
import Header from '../Components/header';
import NoFormBanner from '../Components/noFormBanner';
import SmartBooking from '../Components/Svgs/SmartBooking';

const ServicesPage: NextPage = () => {
  return (
    <>
      <Header />
      <NoFormBanner
        title="Trober for your Employees"
        paragraph="The days of standing in queues and struggling to secure a seat on a bus are over. We connect you and other riders traveling along the same route with bus service providers."
        buttonText="Get in Touch"
      />
      <div className="flex flex-col items-center justify-center mt-20">
        <h1 className=" text-5xl mb-5 text-[#0F1A37] font-semibold">
          The{' '}
          <span className="decoration-underlinecolor underline">Old Way</span>
        </h1>
        <div className="grid grid-cols-1 grid-rows-6 md:grid-cols-2 md:grid-rows-2 align-middle justify-items-center md:px-20 gap-y-12 mt-10 ">
          <div className="flex flex-col w-[80%] lg:w-[60%] ">
            <h2 className="text-2xl lg:text-4xl text-black font-bold mb-6">
              1. Seat Hassle
            </h2>
            <p className="text-xl lg:text-2xl font-thin">
              Book a ride to work daily and connect with other working
              professionals traveling the same route
            </p>
          </div>
          <div className="flex flex-col w-[80%] lg:w-[60%] ">
            <h2 className="text-2xl lg:text-4xl text-black font-bold mb-6">
              2. Payment Hassle
            </h2>
            <p className="text-xl lg:text-2xl font-thin">
              Book a ride to work daily and connect with other working
              professionals traveling the same route
            </p>
          </div>
          <div className="flex flex-col w-[80%] lg:w-[60%] ">
            <h2 className="text-2xl lg:text-4xl text-black font-bold mb-6">
              3. Poor Safety
            </h2>
            <p className="text-xl lg:text-2xl font-thin">
              Book a ride to work daily and connect with other working
              professionals traveling the same route
            </p>
          </div>
          <div className="flex flex-col w-[80%] lg:w-[60%] ">
            <h2 className="text-2xl lg:text-4xl text-black font-bold mb-6">
              4. No Tracking
            </h2>
            <p className="text-xl lg:text-2xl font-thin">
              Book a ride to work daily and connect with other working
              professionals traveling the same route
            </p>
          </div>
          <div className="flex flex-col w-[80%] lg:w-[60%] ">
            <h2 className="text-2xl lg:text-4xl text-black font-bold mb-6">
              5. Time wasting
            </h2>
            <p className="text-xl lg:text-2xl font-thin">
              Book a ride to work daily and connect with other working
              professionals traveling the same route
            </p>
          </div>
          <div className="flex flex-col w-[80%] lg:w-[60%] ">
            <h2 className="text-2xl lg:text-4xl text-black font-bold mb-6">
              6. Cleanliness
            </h2>
            <p className="text-xl lg:text-2xl font-thin">
              Book a ride to work daily and connect with other working
              professionals traveling the same route
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-32">
        <h1 className=" text-5xl mb-5 text-[#0F1A37] font-semibold">
          The{' '}
          <span className="decoration-underlinecolor underline">
            Trober Way
          </span>
        </h1>
        <div className="flex flex-col bg-green-300 w-full items-center justify-center py-10 px-5">
          <div className="grid grid-rows-2 grid-cols-3   ">
            <div className="row-span-2 bg-slate-400 justify-self-end ">
              <SmartBooking />
            </div>
            <h2 className="md:text-5xl font-bold col-span-2 ml-3 bg-red-400">
              Smart Booking
            </h2>
            <p className="md:text-3xl font-medium  col-span-2 ml-3 bg-blue-300">
              Save a seat seamlessly at the click of a few buttons. No hassle at
              all
            </p>
          </div>
        </div>
      </div>
      <ContactUs />
      <Footer />
    </>
  );
};

export default ServicesPage;
