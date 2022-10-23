/* eslint-disable react/no-unstable-nested-components */
import type { NextPage } from 'next';
import Slider from 'react-slick';
import About from './Components/about';
import Banner from './Components/banner';
import Heading from './Components/Common/heading';
import Features from './Components/Features';
import Footer from './Components/footer';
import Header from './Components/header';
import Offerings from './Components/offerings';

const Home: NextPage = () => {
  const settings = {
    // centerMode: true,
    // centerPadding: '300px',
    infinite: false,
    slidesToShow: 4,
    speed: 500,
    dots: true,
    arrows: false,
    appendDots: (dots: number) => {
      return <div className="bg-green-200 ">{dots}</div>;
    },
    customPaging: () => {
      return <div className="h-1 mt-4 bg-[#DADAEE]" />;
    },
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // centerMode: true,
          // centerPadding: '0px',
          initialSlide: 0,
          appendDots: (dots: number) => {
            return <div className="bg-green-200 ">{dots}</div>;
          },
          customPaging: () => {
            return <div className="h-1 mt-4 bg-[#DADAEE]" />;
          },
        },
      },
    ],
  };
  return (
    <>
      <Header />
      <div className="bg-pagebg">
        <Banner />
        <About />
        <Offerings />
        <div className="min-h-screen my-24">
          <Features
            background="bg-gradient-to-r from-gradientstart to-gradientend"
            header="Convenient Booking"
            description="The booking process is simplified to save you time"
            list
            reverse={false}
            src="https://res.cloudinary.com/troberapp-com/image/upload/v1665236009/Web%20app%20assets/Web/Trober_booking_icon_laptop_mhvxxj.svg"
          />
          <Features
            background="bg-white"
            header="Digital Payment"
            description="No need to carry physical cash. Connect your digital wallet and pay as you ride."
            list={false}
            reverse
            src="https://res.cloudinary.com/troberapp-com/image/upload/v1665236060/Web%20app%20assets/Web/Trober_pay_icon_laptop_ebfjjo.svg"
          />
          <Features
            background="bg-gradient-to-r from-gradientstart to-gradientend"
            header="Tracking"
            description="Track your ride in real time. No need to wait for long hours at bus stops. Get an estimate of your pickup and drop-off time. "
            list={false}
            reverse={false}
            src="https://res.cloudinary.com/troberapp-com/image/upload/v1665236060/Web%20app%20assets/Web/Trober_trackingicon_laptop_vpx8wx.svg"
          />
          <Features
            background="bg-white"
            header="Subscription"
            description="Subscribe and save a seat. You can save a seat for a whole week or month ahead on our clean, safe, comfortable and high quality buses. "
            list={false}
            reverse
            src="https://res.cloudinary.com/troberapp-com/image/upload/v1666173924/Web%20app%20assets/new/Trober_Icons_subscrry_vo3mng.svg"
          />
          <Features
            background="bg-gradient-to-r from-gradientstart to-gradientend"
            header="Smart Routing"
            description="Reduced stops, less traffic. To increase ridership and minimise travel time, we use data to determine and optimise routes for our fleet of buses. "
            list={false}
            reverse={false}
            src="https://res.cloudinary.com/troberapp-com/image/upload/v1665236061/Web%20app%20assets/Web/Trober_route_icon_laptop_ib74i4.svg"
          />
        </div>
        <div className="flex justify-center lg:mt-44">
          <Heading text="Join the list of companies that trust Trober" />
        </div>
        <div className="pt-12 pb-24 mx-24 lg:pt-24 lg:mx-72 lg:pb-44">
          <Slider {...settings}>
            <div className="flex flex-row items-center">
              <img
                className="h-20 sm:h-16 w-full"
                src="https://res.cloudinary.com/troberapp-com/image/upload/v1665499566/Web%20app%20assets/Web/image_10_ur0o91.svg"
                alt=""
              />
            </div>
            <div className="flex flex-row items-center">
              <img
                className="h-20 sm:h-16 w-full"
                src="https://res.cloudinary.com/troberapp-com/image/upload/v1665499566/Web%20app%20assets/Web/image_11_l6sq0l.svg"
                alt=""
              />
            </div>
            <div className="flex flex-row items-center">
              <img
                className="h-20 sm:h-16 w-full"
                src="https://res.cloudinary.com/troberapp-com/image/upload/v1665499567/Web%20app%20assets/Web/image_12_xuculr.svg"
                alt=""
              />
            </div>
            <div className="flex flex-row items-center">
              <img
                className="h-20 pr-5 ml-5 sm:h-16 w-full"
                src="https://res.cloudinary.com/troberapp-com/image/upload/v1665499567/Web%20app%20assets/Web/explore_1_hm6dwn.svg"
                alt=""
              />
            </div>
          </Slider>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
