import type { NextPage } from 'next';
import ContactUs from '../Components/Common/contactUs';
import PartnersFlyer from '../Components/Common/partnersFlyer';
import Footer from '../Components/footer';
// import Header from '../Components/header';
import TestHeader from '../Components/newTestHeader';
import NoFormBanner from '../Components/noFormBanner';
import AutomatedProcess from '../Components/Svgs/AutomatedProcess';
import EarnIncome from '../Components/Svgs/EarnIncome';
import BusinessAnalytics from '../Components/Svgs/BusinessAnalytics';

const reasonForTrober = [
  {
    svg: <BusinessAnalytics />,
    header: 'Business Analytics',
    body: 'Make informed decisions with data on drivers performance and optimal routes for your buses.',
  },
  {
    svg: <AutomatedProcess />,
    header: 'Automated Process',
    body: 'Manage trips form a central platform. Seamless booking, increased ridership',
  },
  {
    svg: <EarnIncome />,
    header: 'Earn Income',
    body: 'Register your drivers and fleet of buses on Trober to earn extra income.',
  },
];

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
          <span>Why </span>
          <span className="underline decoration-underlinecolor">
            Join Trober
          </span>
        </h1>
        <div className="p-5 md:m-10 gap-x-2 md:gap-0">
          <div className="grid items-start grid-cols-1 gap-5 mb-5 grid-row-3 md:grid-row-1 md:grid-cols-3 justify-evenly">
            {reasonForTrober.map((reason) => {
              return (
                <div className="grid grid-cols-3" key={reason.header}>
                  <div className="flex items-center justify-center ">
                    {reason.svg}
                  </div>
                  <h1 className="flex items-center justify-start col-span-2 text-lg font-bold">
                    {reason.header}
                  </h1>
                  <p className="col-span-2 col-start-2 justify-self-start ">
                    {reason.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col w-full gap-20 mt-20">
          <PartnersFlyer
            image="https://res.cloudinary.com/troberapp-com/image/upload/v1673281543/Web%20app%20assets/Web/bus-owners-lg_j6jswq.jpg"
            underLinedHeading="Bus Owner"
            heading="s"
            pageFlyer={false}
            route="/partners/bus-owners"
            text="Earn extra income by listing your bus on our platform. We can assist in getting a driver for your bus even if you do not have one. "
          />
          <PartnersFlyer
            image="https://res.cloudinary.com/troberapp-com/image/upload/v1673281545/Web%20app%20assets/Web/fleet-managers-lg_lecelk.jpg"
            underLinedHeading="Fleet Mana"
            heading="gers"
            pageFlyer={false}
            route="/partners/fleet-managers"
            text="Increase orders for rides and reduce idle mileage by onboarding your drivers and fleet of buses. "
          />
          <PartnersFlyer
            image="https://res.cloudinary.com/troberapp-com/image/upload/v1673281544/Web%20app%20assets/Web/investors_c5eplr.jpg"
            underLinedHeading="Investors"
            heading=""
            pageFlyer={false}
            route="/partners/investors"
            text="Invest in Trober and lets move the masses with shared rides to save the planet. Less cars on our roads means less pollution. "
          />
        </div>
      </div>
      <ContactUs
        backgroundLg="md:bg-businesswoman-image"
        backgroundSm="bg-businesswoman-mobile-bg"
      />
      <Footer />
    </>
  );
};

export default PartnersPage;
