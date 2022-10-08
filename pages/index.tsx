import type { NextPage } from 'next';
import Head from 'next/head';
import About from './Components/about';
import Banner from './Components/banner';
import Features from './Components/Features';
import Footer from './Components/footer';
import Header from './Components/header';
import Offerings from './Components/offerings';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Trober - The new way to get to work</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="bg-pagebg">
        <Banner />
        <About />
        <Offerings />
        <div className="min-h-screen mt-24">
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
            header="Subscription"
            description="You can save a seat for a whole week or month ahead on our clean, safe, comfortable and high quality buses. "
            list={false}
            reverse={false}
            src="https://res.cloudinary.com/troberapp-com/image/upload/v1665236009/Web%20app%20assets/Web/Trober_subscription_icon_laptop_klaupg.svg"
          />
          <Features
            background="bg-white"
            header="Tracking"
            description="No need to wait for long hours at bus stops. Get an estimate of your pickup and drop-off time. "
            list={false}
            reverse
            src="https://res.cloudinary.com/troberapp-com/image/upload/v1665236060/Web%20app%20assets/Web/Trober_trackingicon_laptop_vpx8wx.svg"
          />
          <Features
            background="bg-gradient-to-r from-gradientstart to-gradientend"
            header="Smart Routing"
            description="To increase ridership and minimise travel time, we use data to determine and optimise routes for our fleet of buses."
            list={false}
            reverse={false}
            src="https://res.cloudinary.com/troberapp-com/image/upload/v1665236061/Web%20app%20assets/Web/Trober_route_icon_laptop_ib74i4.svg"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
