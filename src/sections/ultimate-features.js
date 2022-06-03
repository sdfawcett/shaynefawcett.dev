/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import BlockTitle from 'components/block-title';
import Feature from 'components/cards/feature';
import { keyframes } from '@emotion/core';

import icon1 from 'assets/features/communication.svg';
import icon2 from 'assets/features/ux.svg';
import icon3 from 'assets/features/web-dev.svg';
import icon4 from 'assets/features/ecomm-consulting.svg';
import icon5 from 'assets/features/cwv.svg';
import icon6 from 'assets/features/headless.svg';

const data = [
  {
    id: 1,
    icon: icon1,
    path: '#!',
    title: 'Communication',
    description: `Before web development, my professional experience was in corporate communications. It's made me a better developer who delivers clear project updates, and I can write content whenever I need to.`,
  },
  {
    id: 2,
    delay: '300',
    icon: icon2,
    path: '#!',
    title: 'User Experience',
    description: `I spent five years working as a UX developer on a 60-person user experience team. It's why I'm always striving to include new and innovative interactions to enhance UX.`,
  },
  {
    id: 3,
    delay: '500',
    icon: icon3,
    path: '#!',
    title: 'Web Development',
    description: `My goal as a developer is to write less code more efficiently, combining the power of reusable components with modern tools. And I experiment continually with new techniques and tools to stay sharp and marketable.`,
  },
  {
    id: 4,
    delay: '700',
    icon: icon4,
    path: '#!',
    title: 'eCommerce Consulting',
    description: `If you have an eCommerce business idea but you don't know where to start, I can recommend the right suite of tools and technological approach based on current trends.`,
  },
  {
    id: 5,
    delay: '900',
    icon: icon5,
    path: '#!',
    title: 'Core Web Vitals Optimization',
    description: `Good Page Experience and Core Web Vitals are a must. Any good website should be optimized to load in the shortest time possible. I can help you identify all the opportunities for increasing your performance scores.`,
  },
  {
    id: 6,
    delay: '1100',
    icon: icon6,
    path: '#!',
    title: 'Headless eCommerce Storefronts',
    description: `I believe headless solutions are the future of eCommerce because of their speed and flexibility. But it's not the right solution for every business. I can map out the implications for your business and help you decide which data-fetching approach is right for you.`,
  },
];

export default function UltimateFeatures() {

  return (
    <section id="services" sx={styles.section}>
      <Container>
      <BlockTitle
          title="How I Can Benefit Your Web Project"
          text="A seasoned developer from a communications background with UX chops."
        />
        <Box sx={styles.grid}>
          
            {data?.map((item) => (
              <Feature data-aos-delay={item.delay} data-aos="fade-right" className="feature-item" key={item.id} data={item} />
            ))}
          
        </Box>
      </Container>
    </section>
  );
};


const inFromLeft = keyframes`
  0% {
    transform: translate(-800%, 0);
  }
  100% {
    transform: translate(0%, 0);
  }
`;

const styles = {
  animateinFromLeft: {
    animation: `${inFromLeft} 1s ease-in-out 1`,
  },
  section: {
    backgroundColor: '#F9FBFD',
    pt: '5rem',
    pb: '5rem',
  },
  heading: {
    marginBottom: [7, null, null, 8, 7],
    p: {
      maxWidth: 490,
      margin: ['10px auto 0'],
    },
  },
  grid: {
    gap: [5, null, 0],
    display: 'grid',
    maxWidth: 1080,
    margin: '0 auto',
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      null,
      'repeat(2, 1fr)',
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
    ],
    borderTop: (t) => [null, null, `1px solid #EDEFF2`, `1px solid #EDEFF2`],
    borderLeft: (t) => [null, null, `1px solid #EDEFF2`, `1px solid #EDEFF2`],
  },
};
