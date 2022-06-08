import { useEffect } from 'react';
import Router from 'next/router';
import * as ga from '../../lib/analytics';
import 'rc-drawer/assets/index.css';
import 'typeface-raleway';
import '@fontsource/space-grotesk';

export default function CustomApp({ Component, pageProps }) {
  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    Router.events.on('routeChangeComplete', handleRouteChange);
  }, []);

  return <Component {...pageProps} />;
}
