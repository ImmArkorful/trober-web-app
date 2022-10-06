import '../styles/globals.css';
import type { AppProps } from 'next/app';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1000,
      easing: 'ease-in-out',
      delay: 100,
    });
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
