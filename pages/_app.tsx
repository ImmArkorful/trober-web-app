import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { initializeApp } from 'firebase/app';
import { Analytics, getAnalytics } from 'firebase/analytics';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import firebaseConfig from '../utils/contants';
import Script from 'next/script';

const app = initializeApp(firebaseConfig);

// eslint-disable-next-line import/no-mutable-exports
export let analytics: Analytics;

const HeadAndTags = () => {
  return (
    <Head>
      <title>Trober - Move With Ease</title>
      <link rel="shortcut icon" href="/trober.ico" />
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta property="og:type" content="website" />
      <meta
        name="description"
        content="Trober is an online platform here to redefine the public transport system. Simply book a seat on Trober and move with ease"
      />
      <meta
        property="og:description"
        content="Trober is an online platform here to redefine the public transport system. Simply book a seat on Trober and move with ease"
      />
      <meta
        name="keywords"
        content="trober travel transport trotro ridesharing ghana minibus trasportation comfort ride convenience timely public transport shared mobility carbon offset projects in ghana africa west africa sub suhara africa trober"
      />
      <meta property="og:locale" content="en_US" />
      <meta httpEquiv="X-UA-Compatible" content="IE=7" />
      <meta property="og:title" content="Trober - Move with ease" />
      <meta property="og:site_name" content="Trober - Move with ease" />
      <meta property="og:url" content="https://troberapp.com" />
      <meta
        property="og:image"
        content="https://troberapp.com/trobericon.jpg"
      />
      <Script>
        {`!function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '341079580930713');
        fbq('track', 'PageView');`}
      </Script>
    </Head>
  );
};

if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <HeadAndTags />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
