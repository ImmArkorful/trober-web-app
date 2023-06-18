import React from 'react';
import ContactUs from '../Components/Common/contactUs';
import Footer from '../Components/footer';
import TestHeader from '../Components/newTestHeader';
import PartnersFlyer from '../Components/Common/partnersFlyer';

const BusOwners = () => {
  return (
    <div>
      <TestHeader />
      <div className="w-full mt-28">
        <PartnersFlyer
          image="https://res.cloudinary.com/troberapp-com/image/upload/v1673281543/Web%20app%20assets/Web/bus-owners-lg_j6jswq.jpg"
          underLinedHeading="Bus Owner"
          heading="s"
          pageFlyer
          text=""
          route=""
        />
      </div>
      <div className="flex flex-col items-center justify-center mt-24 md:px-20 2xl:px-44 mx-11 md:text-3xl">
        <p className="mb-8">
          Are you a bus owner looking to expand your business and reach more
          customers? Look no further than Trober - the ridesharing platform that
          connects you with passengers looking for safe and reliable bus rides.
        </p>
        <p className="mb-8">
          With Trober, onboarding your bus is quick and easy. Simply sign up and
          create your account, then register your bus and provide all the
          necessary details, such as the bus model, capacity, and availability.
          Once your bus is approved, you can start accepting bookings from
          passengers in your area.
        </p>
        <p className="mb-8">
          Our user-friendly platform makes it easy for you to manage your
          bookings, and track your earnings, so you can focus on providing
          top-notch service to passengers. Plus, with our rating system, you can
          build a strong reputation and attract more customers by providing a
          safe, reliable, and comfortable ride every time. With our platform,
          you can reach more customers, increase your revenue, and take your bus
          business to the next level. Sign up now and become part of the Trober
          family!
        </p>
      </div>
      <ContactUs
        backgroundLg="md:bg-bus-owners-lg"
        backgroundSm="bg-bus-owners-lg"
      />
      <Footer />
    </div>
  );
};

export default BusOwners;
