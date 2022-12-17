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
        <div className="h-screen w-full flex flex-col md:flex-row items-center justify-evenly mt-16 md:mt-0  mb-16 md:mb-0">
          <div
            className="rounded-lg bg-gradient-to-r from-gradientstart to-gradientend
         text-white w-[40%] 2xl:w-[30%] h-112 flex flex-col items-center justify-center p-5 mb-10 md:mb-0"
          >
            <h1 className="decoration-underlinecolor underline text-3xl mb-9">
              Mission Statement
            </h1>
            <p className="text-center">
              To build technologies that power mass transportation in Africa for
              convenient, affordable and reliable commutes.
            </p>
          </div>
          <div
            className="rounded-lg bg-gradient-to-r from-gradientstart to-gradientend
         text-white w-[40%] 2xl:w-[30%] h-112 flex flex-col items-center justify-center p-5"
          >
            <h1 className="decoration-underlinecolor underline text-3xl mb-9">
              Vision
            </h1>
            <p className="text-center">
              To be the leading shared mobility provider in Africa.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center lg:p-20 ">
          <h1 className="decoration-underlinecolor underline text-3xl mb-10">
            Our Core Values
          </h1>
          <div className="flex flex-row md:flex-col md:m-10">
            <div className="grid gird-rows-3 md:grid-cols-3 items-start justify-evenly md:m-5">
              <div className="flex flex-row p-5 ">
                <NurturingRelationships />
                <div className="ml-2 ">
                  <h1 className="text-lg font-bold">Nurturing Relationships</h1>
                  <p className="mt-5">
                    Relationships matter to us. We prioritize the wellbeing of
                    our employees, partners and customers.
                  </p>
                </div>
              </div>
              <div className="flex flex-row p-5">
                <Intergrity />
                <div className="ml-2 ">
                  <h1 className="text-lg font-bold">Integrity</h1>
                  <p className="mt-5">
                    Our word is our bond. We stay true to our values and walk
                    the talk.
                  </p>
                </div>
              </div>
              <div className="flex flex-row p-5">
                <ImpactDriven />
                <div className="ml-2 ">
                  <h1 className="text-lg font-bold">Impact-Driven</h1>
                  <p className="mt-5">
                    Shared mobility for sustainable cities. We are saving the
                    planet by ensuring mass transportation to reduce CO2
                    emissions.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gird-rows-3 md:grid-cols-3 items-start justify-evenly  md:m-5">
              <div className="flex flex-row p-5">
                <Teamwork />
                <div className="ml-2 ">
                  <h1 className="text-lg font-bold">Teamwork</h1>
                  <p className="mt-5">
                    Alone we can do little but together, we can do so much. We
                    work together to make Trober a reality.
                  </p>
                </div>
              </div>
              <div className="flex flex-row p-5">
                <BeProductive />
                <div className="ml-2 ">
                  <h1 className="text-lg font-bold">Be Productive</h1>
                  <p className="mt-5">
                    Effective and efficient work output. We pride ourseves in
                    providing services that meets high quality standards.
                  </p>
                </div>
              </div>
              <div className="flex flex-row p-5">
                <Innovation />
                <div className="ml-2 ">
                  <h1 className="text-lg font-bold">Innovation</h1>
                  <p className="mt-5">
                    We continuously improve our products and services with a
                    customer focused approach.
                  </p>
                </div>
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
