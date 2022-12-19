import type { NextPage } from 'next';
import ContactUs from '../Components/Common/contactUs';
import Footer from '../Components/footer';
import Header from '../Components/header';
import NoFormBanner from '../Components/noFormBanner';
import BeProductive from '../Components/Svgs/BeProductive';
import ImpactDriven from '../Components/Svgs/ImpactDriven';
import Innovation from '../Components/Svgs/Innovation';
import Intergrity from '../Components/Svgs/Intergrity';
import NurturingRelationships from '../Components/Svgs/NurturingRelationships';
import Teamwork from '../Components/Svgs/Teamwork';

const AboutPage: NextPage = () => {
  return (
    <>
      <Header />

      <div className=" bg-pagebg">
        <NoFormBanner
          title="Building the rails for shared mobility in Africa"
          buttonText="Get in Touch"
          paragraph="We are a  mobility as a service provider 
        that uses a tech enabled ride sharing platform to connect riders to independent bus service providers."
        />
        <div className="flex flex-col items-center w-full h-screen mt-16 mb-16 md:flex-row justify-evenly md:mt-0 md:mb-0">
          <div
            className="rounded-lg bg-gradient-to-r from-gradientstart to-gradientend
         text-white w-[70%] md:w-[40%] 2xl:w-[30%] h-112 flex flex-col items-center justify-center p-5 mb-10 md:mb-0"
          >
            <h1 className="text-3xl text-center underline decoration-underlinecolor mb-9">
              Mission Statement
            </h1>
            <p className="text-center">
              To build technologies that power mass transportation in Africa for
              convenient, affordable and reliable commutes.
            </p>
          </div>
          <div
            className="rounded-lg bg-gradient-to-r from-gradientstart to-gradientend
         text-white w-[70%] md:w-[40%] 2xl:w-[30%] h-112 flex flex-col items-center justify-center p-5"
          >
            <h1 className="text-3xl underline decoration-underlinecolor mb-9">
              Vision
            </h1>
            <p className="text-center">
              To be the leading shared mobility provider in Africa.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full lg:p-20 ">
          <h1 className="mb-10 text-3xl underline decoration-underlinecolor">
            Our Core Values
          </h1>
          <div className="p-5 md:m-10 gap-x-2 md:gap-0">
            <div className="grid items-start grid-cols-1 gap-5 mb-5 grid-row-6 md:grid-row-3 lg:grid-row-3 md:grid-cols-2 lg:grid-cols-3 justify-evenly">
              <div className="grid grid-cols-3 grid-rows-2">
                <div className="flex items-center justify-center ">
                  <NurturingRelationships />
                </div>
                <h1 className="flex items-center justify-start col-span-2 text-lg font-bold">
                  Nurturing Relationships
                </h1>
                <p className="col-span-2 col-start-2 justify-self-start ">
                  Relationships matter to us. We prioritize the wellbeing of our
                  employees, partners and customers.
                </p>
              </div>
              <div className="grid grid-cols-3 grid-rows-2">
                <div className="flex items-center justify-center ">
                  <Intergrity />
                </div>
                <h1 className="flex items-center justify-start col-span-2 text-lg font-bold">
                  Integrity
                </h1>
                <p className="col-span-2 col-start-2 justify-self-start ">
                  Relationships matter to us. We prioritize the wellbeing of our
                  employees, partners and customers.
                </p>
              </div>
              <div className="grid grid-cols-3 grid-rows-2">
                <div className="flex items-center justify-center ">
                  <ImpactDriven />
                </div>
                <h1 className="flex items-center justify-start col-span-2 text-lg font-bold">
                  Impact-driven
                </h1>
                <p className="col-span-2 col-start-2 justify-self-start ">
                  Relationships matter to us. We prioritize the wellbeing of our
                  employees, partners and customers.
                </p>
              </div>
              <div className="grid grid-cols-3 grid-rows-2">
                <div className="flex items-center justify-center ">
                  <Teamwork />
                </div>
                <h1 className="flex items-center justify-start col-span-2 text-lg font-bold">
                  Teamwork
                </h1>
                <p className="col-span-2 col-start-2 justify-self-start ">
                  Relationships matter to us. We prioritize the wellbeing of our
                  employees, partners and customers.
                </p>
              </div>
              <div className="grid grid-cols-3 grid-rows-2">
                <div className="flex items-center justify-center ">
                  <BeProductive />
                </div>
                <h1 className="flex items-center justify-start col-span-2 text-lg font-bold">
                  Be Productive
                </h1>
                <p className="col-span-2 col-start-2 justify-self-start ">
                  Relationships matter to us. We prioritize the wellbeing of our
                  employees, partners and customers.
                </p>
              </div>
              <div className="grid grid-cols-3 grid-rows-2">
                <div className="flex items-center justify-center ">
                  <Innovation />
                </div>
                <h1 className="flex items-center justify-start col-span-2 text-lg font-bold">
                  Innovation
                </h1>
                <p className="col-span-2 col-start-2 justify-self-start ">
                  Relationships matter to us. We prioritize the wellbeing of our
                  employees, partners and customers.
                </p>
              </div>
            </div>
          </div>
        </div>
        <ContactUs />
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
