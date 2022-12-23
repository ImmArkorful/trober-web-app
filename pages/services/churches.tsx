import type { NextPage } from 'next';
import ContactUs from '../Components/Common/contactUs';
import Services from '../Components/Common/Services';
import Footer from '../Components/footer';
// import Header from '../Components/header';
import TestHeader from '../Components/newTestHeader';
import NoFormBanner from '../Components/noFormBanner';

const Churches: NextPage = () => {
  return (
    <>
      <TestHeader />
      <NoFormBanner
        title="Trober for your Church"
        paragraph="The days of standing in queues and struggling to secure a seat on a bus are over. We connect you and other riders traveling along the same route with bus service providers. "
        buttonText="Get in Touch"
      />
      <Services />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Churches;
