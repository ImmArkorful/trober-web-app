import React from 'react';
import ContactUs from '../Components/Common/contactUs';
import PartnersFlyer from '../Components/Common/partnersFlyer';
import Footer from '../Components/footer';
import TestHeader from '../Components/newTestHeader';

const FleetManagers = () => {
  return (
    <div>
      <TestHeader />
      <div className="w-full mt-28">
        <PartnersFlyer
          image="https://res.cloudinary.com/troberapp-com/image/upload/v1673281544/Web%20app%20assets/Web/fleetManagers_g1fgla.jpg"
          underLinedHeading="Fleet Mana"
          heading="gers"
          pageFlyer
          text=""
          route=""
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
        backgroundLg="md:bg-fleet-managers-lg"
        backgroundSm="bg-fleet-managers-lg"
      />
      <Footer />
    </div>
  );
};

export default FleetManagers;
