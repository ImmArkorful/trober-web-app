import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Trober - The new way to get to work</title>
        <link rel="shortcut icon" href="/trober.ico" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta property="og:type" content="website" />
        <meta
          name="description"
          content="Trober is an online platform here to redefine the public transport system. Simply book a seat on Trober and move with ease"
        />
        <meta
          name="keywords"
          content="trober travel transport trotro ridesharing ghana minibus trasportation comfort ride convenience timely public transport shared mobility carbon offset projects in ghana africa west africa sub suhara africa trober"
        />
        <meta property="og:locale" content="en_US" />
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta
          property="og:title"
          content="Trober - The new way to get to work"
        />
        <meta property="og:site_name" content="Trober Ghana" />
        <meta
          property="og:url"
          content="https://troberlandingpage.netlify.app"
        />
        <meta
          property="og:image"
          content="https://troberlandingpage.netlify.app/trober.ico"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
