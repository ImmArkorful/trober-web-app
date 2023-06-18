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
      <div className="flex flex-col items-center justify-center mt-24 md:px-20 2xl:px-44 mx-11 md:text-3xl">
        <p className="w-full text-left">Welcome Fleet Managers! </p>
        <p className="mb-8">
          Are you looking for an efficient and cost-effective solution for
          managing your fleet? Look no further than our fleet management
          software (to be released soon) and ridesharing platform!
        </p>
        <p className="mb-8">
          Our platform offers a range of features that are designed to help you
          manage your fleet with ease. From tracking vehicles to scheduling
          rides, our platform makes it easy to streamline your operations and
          save time and money.
        </p>
        <p>With our fleet managment software underway, you can:</p>
        <p className="mb-8">
          Track your vechiles: Our software allows you to track the location and
          status of vehicles in real-time. This makes it easy to monitor your
          fleet and ensure that everything is running smoothly.
        </p>
        <p className="mb-8">
          Schedule maintenance: Our software allows you to schedule routine
          maintenance for your vehicles, ensuring that they are always in top
          condition. This can help you reduce repair costs and prolong the life
          of your vehicles.
        </p>
        <p className="mb-8">
          Manage expenses: Our software allows you to track expenses related to
          your fleet, including fuel costs, maintenance expenses, and more. This
          can help you identify areas where you can save money and reduce your
          overall expenses.
        </p>
        <p className="mb-8">
          Analyze data: Our software provides detailed analytics and reporting
          that allow you to analyze data related to your fleet. This can help
          you identify trends, track performance, and make data-driven
          decisions.
        </p>
        <p className="mb-8">
          In addition to our fleet management software, we also offer a
          ridesharing platform that allows you to book and manage rides for your
          employees or customers. Our platform offers a range of benefits,
          including: Cost savings: By using our ridesharing platform, you can
          reduce your transportation costs and save money on your overall
          operations.
        </p>
        <p className="mb-8">
          Convenience: Our platform makes it easy to schedule and manage rides
          for your employees or customers. With just a few clicks, you can book
          rides and track their progress in real-time.
        </p>
        <p className="mb-8">
          Safety and security: Our platform ensures that all rides are conducted
          in a safe and secure manner. We vet all of our drivers and ensure that
          they have a clean driving record and are experienced and professional.
        </p>
        <p className="mb-8">
          We are committed to providing the best possible experience for our
          customers. We believe that our platform can help you manage your fleet
          more efficiently and save money on your operations. Contact us today
          to learn more about our services and how we can help your
          organization.
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
