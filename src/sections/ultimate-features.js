/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import BlockTitle from 'components/block-title';
import Feature from 'components/cards/feature';
import { useInView } from 'react-intersection-observer';
import { keyframes } from '@emotion/core';

import icon1 from 'assets/features/1.png';
import icon2 from 'assets/features/2.png';
import icon3 from 'assets/features/3.png';
import icon4 from 'assets/features/4.png';
import icon5 from 'assets/features/5.png';
import icon6 from 'assets/features/6.png';

const data = [
  {
    id: 1,
    icon: icon1,
    path: '#!',
    title: 'Email Subscription',
    description: `We’re driven beyond just finishing projects. We want to find smart solutions.`,
  },
  {
    id: 2,
    icon: icon2,
    path: '#!',
    title: 'Bolt Performance',
    description: `We’re driven beyond just finishing projects. We want to find smart solutions.`,
  },
  {
    id: 3,
    icon: icon3,
    path: '#!',
    title: 'Secure Transaction',
    description: `We’re driven beyond just finishing projects. We want to find smart solutions.`,
  },
  {
    id: 4,
    icon: icon4,
    path: '#!',
    title: 'Multiple Options',
    description: `We’re driven beyond just finishing projects. We want to find smart solutions.`,
  },
  {
    id: 5,
    icon: icon5,
    path: '#!',
    title: 'Customer Support',
    description: `We’re driven beyond just finishing projects. We want to find smart solutions.`,
  },
  {
    id: 6,
    icon: icon6,
    path: '#!',
    title: 'Integrated with Shopify',
    description: `We’re driven beyond just finishing projects. We want to find smart solutions.`,
  },
];

export default function UltimateFeatures() {

  const { ref: myRef, inView: myElementIsVisible } = useInView()

  return (
    <section id="features" sx={styles.section}>
      <Container>
      <BlockTitle
          title="Ideal solutions for you"
          text="Go beyond ultimate features"
        />
        <Box ref={myRef} sx={styles.grid}>
          
            {data?.map((item) => (
              <Feature  sx={myElementIsVisible ? styles.animateinFromLeft : ''} className="feature-item" key={item.id} data={item} />
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
    gap: [6, null, 0],
    display: 'grid',
    maxWidth: 1080,
    margin: '0 auto',
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      null,
      null,
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
    ],
    borderTop: (t) => [null, null, `1px solid #EDEFF2`],
    borderLeft: (t) => [null, null, `1px solid #EDEFF2`],
  },
};
