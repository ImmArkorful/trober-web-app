import type { NextPage } from 'next';
import Banner from '../Components/banner';
import ContactUs from '../Components/Common/contactUs';
import Footer from '../Components/footer';
import Header from '../Components/header';

const AboutPage: NextPage = () => {
  return (
    <>
      <Header />
      <Banner />
      <div className="h-screen w-full flex flex-col md:flex-row items-center justify-evenly mt-16 2xl:mt-0">
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
      <div>
        <h1>Our Services</h1>
        <div>
          <div>
            <div>Hello</div>
          </div>
        </div>
      </div>
      <ContactUs />
      <Footer />
    </>
  );
};

export default AboutPage;
