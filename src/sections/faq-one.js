import React from 'react';
import { useInView } from 'react-intersection-observer';
import { keyframes } from '@emotion/core';
import Image from 'components/image';
import { Box, Container, Flex, Heading, Text } from 'theme-ui';
import Accordion from 'components/accordion/accordion';
import image from 'assets/bb-static-tablet_ipad_silver_landscape.png';
const FAQ_ONE_DATA = {
  sectionImage: image,
  tagline: 'Website content builder',
  title: 'Meet our premium features that will make you wow',
  text:
    'Build an incredible workplace and grow your business with Gusto’s all-in-one platform with amazing contents.',
  faqs: [
    {
      isExpanded: true,
      title: 'Organize your project content',
      contents: (
        <div>
          Get your website ads tests delivered at let collect sample from the
          victory of the managments that supplies best design system which
          guidelines ever with multiple features.
        </div>
      ),
    },
    {
      isExpanded: false,
      title: 'Collaborate your multiple team support easily',
      contents: (
        <div>
          Get your website ads tests delivered at let collect sample from the
          victory of the managments that supplies best design system which
          guidelines ever with multiple features.
        </div>
      ),
    },
    {
      isExpanded: false,
      title: "Build your team's knowledge base system",
      contents: (
        <div>
          Get your website ads tests delivered at let collect sample from the
          victory of the managments that supplies best design system which
          guidelines ever with multiple features.
        </div>
      ),
    },
  ],
};
const FaqOne = () => {

  const { ref: myRef, inView: myElementIsVisible } = useInView()

  const { sectionImage, title, text, tagline, faqs } = FAQ_ONE_DATA;
  return (
    <Box id="work" ref={myRef} as="section" sx={styles.section}>
      <Box sx={myElementIsVisible ? styles.animateInFromLeft : ''} >
        <Box sx={styles.sectionImage}>
          <Image
            src={sectionImage}
            width="1000"
            height="600"
            alt="bomb botanicals website mockup"
          />
        </Box>
      </Box>
      <Container sx={styles.container}>
        <Flex sx={styles.flex}>
          <Box sx={styles.content}>
            <Box sx={styles.sectionTitle}>
              <Text as="span">{tagline}</Text>
              <Heading as="h2">{title}</Heading>
              <Text as="p">{text}</Text>
            </Box>

            <Box sx={styles.sectionAccordionImage}>
              <Image
                src={sectionImage}
                width="100%"
                height="auto"
                alt="bomb botanicals website mockup"
              />
            </Box>

            <Accordion items={faqs} />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default FaqOne;

const inFromLeft = keyframes`
  0% {
    transform: translate(-800%, 0);
  }
  100% {
    transform: translate(0%, 0);
  }
`;

const styles = {

  animateInFromLeft: {
    animation: `${inFromLeft} 1s ease-in-out 1`,
  },
  section: {
    position: 'relative',
    mb: '-1%',
  },
  container: {
    maxWidth: ['100%', null, null, null, null, '1170px', '1280px'],
    position: 'relative',
  },
  sectionImage: {
    display: ['none', null, null, null, 'block'],
    position: ['relative', null, null, null, 'absolute'],
    zIndex: '1',
    top: 0,
    left: [0, null, null, null, '-39%', '-26%', '0%'],
    maxWidth: ['80%', null, null, '94%', null, '100%'],
    mx: ['auto', null, null, null, 0],
    '@media(min-width: 1240px)': {
      left: '-25%',
    },
    '@media(min-width: 1440px)': {
      left: '-17%',
    },
    '@media(min-width: 1650px)': {
      left: '-10%',
    },
    '@media(min-width: 1850px)': {
      left: '-8%',
    },
  },
  sectionAccordionImage: {
    display: 'none',
    '@media(max-width: 991px)': {
      display: 'block',
      width: '100%',
    },
  },
  flex: {
    display: 'flex',
    gap: 0,
    justifyContent: ['flex-start', null, null, null, 'flex-end'],
  },
  content: {
    flex: '0 0 100%',
    pl: ['0', null, null, null, '80px'],
    pb: ['50px', null, null, '70px', null, null, '90px'],
    '@media(min-width: 1850px)': {
      flex: '0 0 60%',
    },
    '@media(min-width: 1440px)': {
      flex: '0 0 50%',
    },
    '@media only screen and (min-width: 1241px) and (max-width: 1439px)': {
      flex: '0 0 50%',
    },
    '@media only screen and (min-width: 992px) and (max-width: 1240px)': {
      flex: '0 0 50%',
    },

    '@media only screen and (min-width: 320px) and (max-width: 991px)': {
      flex: '0 0 100%',
    },
  },
  sectionTitle: {
    mb: '30px',
    textAlign: ['left', null, 'center', null, 'left'],
    h2: {
      color: '#0F2137',
      fontWeight: 500,
      fontSize: ['22px', null, null, '28px', '32px', '36px', '40px'],
      lineHeight: 1.5,
      letterSpacing: '-1.5px',
      mt: '10px',
      maxWidth: ['100%', '300px', '400px', null, '100%'],
      mx: ['0', null, 'auto', null, '0'],
    },
    span: {
      color: 'secondary',
      fontSize: ['15px', '16px'],
      lineHeight: 1.87,
      display: 'block',
    },
    p: {
      color: '#0F2137',
      fontSize: '16px',
      lineHeight: 2.19,
      maxWidth: ['100%', '340px', '400px', null, '100%'],
      mx: ['0', null, 'auto', null, '0'],
      mt: ['15px', null, null, '25px'],
    },
  },
};
