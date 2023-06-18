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
          image="https://res.cloudinary.com/troberapp-com/image/upload/v1673281545/Web%20app%20assets/Web/investors-lg_iucwdz.jpg"
          underLinedHeading="Investors"
          heading=""
          pageFlyer
          text=""
          route=""
        />
      </div>
      <div className="flex flex-col items-center justify-center md:px-20 2xl:px-44 mt-24 mx-11 md:text-3xl">
        <p className="mb-8">
          Welcome to Trober, a leading mobility company revolutionizing mass
          transportation in Ghana. Our innovative platform connects commuters to
          independent bus service providers. With our easy-to-use app, riders
          can book and pay for their ride in just a few taps, ensuring a
          hassle-free commute every time.
        </p>
        <p className="mb-8">
          Our platform not only benefits riders but also independent bus service
          providers who can leverage Trober to grow their businesses and reach a
          broader audience. By partnering with Trober, bus service providers
          expand their reach, increase their customer base, and ultimately,
          increase their revenue.
        </p>
        <p className="mb-8">
          At Trober, we believe that shared mobility is vital for a sustainable
          economy. With our large-capacity vehicles, we ensure group rides to
          reduce traffic congestion and carbon emissions. We are not alone in
          this journey. Our dedicated team, partners, fleet owners, and
          stakeholders support us to make this happen. You are warmly welcome to
          join us!
        </p>
        <p className="mb-8">
          If you are looking to invest in an innovative mobility company that is
          transforming transportation in Ghana and Africa at large, Trober is
          here. Join us to create a more connected, efficient, timely,
          convenient, and sustainable mobility solution for all.
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
