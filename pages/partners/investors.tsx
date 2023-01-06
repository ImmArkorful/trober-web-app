import React from 'react';
import ContactUs from '../Components/Common/contactUs';
import PartnersFlyer from '../Components/Common/partnersFlyer';
import Footer from '../Components/footer';
import TestHeader from '../Components/newTestHeader';

const Investors = () => {
  return (
    <div>
      <TestHeader />
      <div className="w-full mt-28">
        <PartnersFlyer
          image="/images/fleetManagers.jpg"
          underLinedHeading="Investors"
          heading=""
          headingSize="text-5xl mb-14 md:mb-0"
          borderSize="border-b-8 pb-2"
          text=""
          route=""
          arrowPresent={false}
        />
      </div>
      <div className="flex flex-col items-center justify-center mt-24 mx-11 md:text-3xl">
        <p className="mb-8">
          Earn extra income by listing your bus on our platform. We can assist
          in getting a driver for your bus even if you do not have one. Earn
          extra income by listing your bus on our platform. We can assist in
          getting a driver for your bus even if you do not have one.
        </p>
        <p className="mb-8">
          Earn extra income by listing your bus on our platform. We can assist
          in getting a driver for your bus even if you do not have one. Earn
          extra income by listing your bus on our platform. We can assist in
          getting a driver for your bus even if you do not have one.
        </p>
        <p className="mb-8">
          Earn extra income by listing your bus on our platform. We can assist
          in getting a driver for your bus even if you do not have one. Earn
          extra income by listing your bus on our platform. We can assist in
          getting a driver for your bus even if you do not have one.
        </p>
        <p className="mb-8">
          Earn extra income by listing your bus on our platform. We can assist
          in getting a driver for your bus even if you do not have one. Earn
          extra income by listing your bus on our platform. We can assist in
          getting a driver for your bus even if you do not have one.
        </p>
      </div>
      <ContactUs
        backgroundLg="md:bg-investors-lg"
        backgroundSm="bg-investors-lg"
      />
      <Footer />
    </div>
  );
};

export default Investors;
