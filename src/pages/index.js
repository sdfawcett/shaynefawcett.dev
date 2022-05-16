import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import FaqOne from 'sections/faq-one';
import UltimateFeatures from 'sections/ultimate-features';
import CallToAction from 'sections/call-to-action';
import Featured from 'sections/featured';
import Testimonials from 'sections/testimonials';
import FAQ from 'sections/faq';
import Subscribe from 'sections/subscribe';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Shayne Fawcett Web Development" />
          <Banner />
          <UltimateFeatures />
          <CallToAction />
          <FaqOne />
          <Featured />
          <FAQ />
          <Testimonials />
          <Subscribe />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
