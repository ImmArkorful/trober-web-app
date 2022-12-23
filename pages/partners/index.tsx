import type { NextPage } from 'next';
import ContactUs from '../Components/Common/contactUs';
import Footer from '../Components/footer';
// import Header from '../Components/header';
import TestHeader from '../Components/newTestHeader';
import NoFormBanner from '../Components/noFormBanner';
import AutomatedProcess from '../Components/Svgs/AutomatedProcess';
import BusinessAnalytics from '../Components/Svgs/BusinessAnalytics';
import ComfortableSeats from '../Components/Svgs/ComfortableSeats';

const PartnersPage: NextPage = () => {
  return (
    <>
      <TestHeader />
      <NoFormBanner
        title="Partner with us. Grow 
your business."
        paragraph=" Are you a bus owner, fleet manager or investor? Join forces with us to redefine how people move and let’s grow your business together. "
        buttonText="Get in Touch"
      />
      <div className="flex flex-col items-center justify-center mt-32">
        <h1 className=" text-4xl md:text-5xl mb-5 text-[#0F1A37] font-semibold">
          Why{' '}
          <span className="underline decoration-underlinecolor">
            Join Trober
          </span>
        </h1>
        <div className="p-5 md:m-10 gap-x-2 md:gap-0">
          <div className="grid items-start grid-cols-1 gap-5 mb-5 grid-row-3 md:grid-row-1 md:grid-cols-3 justify-evenly">
            <div className="grid grid-cols-3 grid-rows-2">
              <div className="flex items-center justify-center ">
                <BusinessAnalytics />
              </div>
              <h1 className="flex items-center justify-start col-span-2 text-lg font-bold">
                Business Analytics
              </h1>
              <p className="col-span-2 col-start-2 justify-self-start ">
                Make informed decisions with data on drivers performance and
                optimal routes for your buses.
              </p>
            </div>
            <div className="grid grid-cols-3 grid-rows-2">
              <div className="flex items-center justify-center ">
                <AutomatedProcess />
              </div>
              <h1 className="flex items-center justify-start col-span-2 text-lg font-bold">
                Automated Process
              </h1>
              <p className="col-span-2 col-start-2 justify-self-start ">
                Manage trips form a central platform. Seamless booking,
                increased ridership.
              </p>
            </div>
            <div className="grid grid-cols-3 grid-rows-2">
              <div className="flex items-center justify-center ">
                <ComfortableSeats />
              </div>
              <h1 className="flex items-center justify-start col-span-2 text-lg font-bold">
                Earn Income
              </h1>
              <p className="col-span-2 col-start-2 justify-self-start ">
                Register your drivers and fleet of buses on Trober to earn extra
                income.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="relative w-full bg-gray-400 h-80">
          <img
            src="/images/bus-owner.jpg"
            alt=""
            className="absolute h-56 ml-16 w-128 -top-6"
          />
          <div className="h-48 bg-green-400 w-128 ml-[37rem] flex flex-col justify-end ">
            <h1>Bus Owners</h1>
            <p>
              Earn extra income by listing your bus on our platform. We can
              assist in getting a driver for your bus even if you do not have
              one.
            </p>
          </div>
        </div> */}
      </div>
      <ContactUs />
      <Footer />
    </>
  );
};

export default PartnersPage;
