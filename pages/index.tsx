import type { NextPage } from 'next';
import Head from 'next/head';
import Banner from './Components/banner';

import Footer from './Components/footer';
import Header from './Components/header';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Trober - The new way to get to work</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Banner />
      </main>
      <Footer />
    </>
  );
};

export default Home;
