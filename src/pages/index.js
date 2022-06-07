import React, { useEffect } from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FormspreeProvider } from '@formspree/react';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import FaqOne from 'sections/faq-one';
import UltimateFeatures from 'sections/ultimate-features';
import CallToAction from 'sections/call-to-action';
import Featured from 'sections/featured';
import FAQ from 'sections/faq';
import Subscribe from 'sections/subscribe';
import CallToActionSubHero from 'sections/cta-sub-hero';

export default function IndexPage() {

  useEffect(() => {
    Aos.init({ duration: 2000, disable: 'phone', });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Shayne Fawcett Web Development" />
          <Banner />
          <CallToAction />
          <UltimateFeatures />
          <CallToActionSubHero />
          <FaqOne />
          <Featured />
          <FAQ />
          <Subscribe />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
