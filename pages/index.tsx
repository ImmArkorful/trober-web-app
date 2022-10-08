import type { NextPage } from 'next';
import Head from 'next/head';
import About from './Components/about';
import Banner from './Components/banner';
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
      </div>
      <Footer />
    </>
  );
};

export default Home;
