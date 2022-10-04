import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from './Components/Common/footer';

import Header from './Components/Common/header';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col pt-2">
      <Head>
        <title>Trober - The new way to get to work</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center" />
      <Footer />
    </div>
  );
};

export default Home;
