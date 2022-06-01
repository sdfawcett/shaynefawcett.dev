import React from 'react';
import { useInView } from 'react-intersection-observer';
import { keyframes } from '@emotion/core';
import Image from 'components/image';
import { Box, Container, Flex, Heading, Text, Button } from 'theme-ui';
import Accordion from 'components/accordion/accordion';
import image from 'assets/bb-static-tablet_ipad_silver_landscape.png';
import { FaGithub } from 'react-icons/fa';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { FaShopify } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { SiGraphql } from 'react-icons/si';

const FAQ_ONE_DATA = {
  sectionImage: image,
  tagline: 'Featured Project',
  title: 'Bomb Botanicals eCommerce Store Redesign and Rebuild',
  text:
    'Build an incredible workplace and grow your business with Gusto’s all-in-one platform with amazing contents.',
  faqs: [
    {
      isExpanded: true,
      title: 'Technology Overview',
      contents: (
        <>
          <div className='accordionIcons'>


          </div>
          <div>
            <p className='accordionIconText'>Get your website ads tests delivered at let collect sample from the
            victory of the managments that supplies best design system which
            guidelines ever with multiple features.</p>
          </div>
        </>
      ),
    },
    {
      isExpanded: false,
      title: 'Project Details and Scope',
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

  const { ref: mySecRef, inView: mySecElementIsVisible } = useInView()

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

            <Box ref={mySecRef} sx={styles.sectionAccordionImage}>
              <Box sx={mySecElementIsVisible ? styles.animateInFromLeft : ''} >
                <Image
                  src={sectionImage}
                  width="100%"
                  height="auto"
                  alt="bomb botanicals website mockup"
                />
              </Box>

              <Box sx={styles.linkButtonWrapper}>
                <a href='https://reactjs.org/' className='buttonLink' target='_blank' rel='noopener noreferrer'>
                  <span className='icon'><FaExternalLinkSquareAlt /></span>
                  <div className='withIcon'>Live Demo</div>
                </a>

                <a href='https://reactjs.org/' className='buttonLink' target='_blank' rel='noopener noreferrer'>
                  <span className='icon'><FaGithub /></span>
                  <div className='withIcon'>Github Repo</div>
                </a>
              </Box>

            </Box>

            <Box sx={styles.desktop}>
              <Box sx={styles.linkButtonWrapper}>
                <a href='https://reactjs.org/' className='buttonLink' target='_blank' rel='noopener noreferrer'>
                  <span className='icon'><FaExternalLinkSquareAlt /></span>
                  <div className='withIcon'>Live Demo</div>
                </a>

                <a href='https://reactjs.org/' className='buttonLink' target='_blank' rel='noopener noreferrer'>
                  <span className='icon'><FaGithub /></span>
                  <div className='withIcon'>Github Repo</div>
                </a>
              </Box>
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
  desktop: {
    display: 'block',
    mb: '2rem',

    '@media(max-width: 1023px)': {
      display: 'none',
    },
  },
  container: {
    maxWidth: ['100%', null, null, null, null, '1170px', '1280px'],
    position: 'relative',
  },
  sectionImage: {
    display: 'none',
    position: ['relative', null, null, null, 'absolute'],
    zIndex: '1',
    top: '80px',
    left: [0, null, null, null, '-39%', '-26%', '0%'],
    maxWidth: ['80%', null, null, '94%', null, '100%'],
    mx: ['auto', null, null, null, 0],

    '@media(min-width: 1024px)': {
      display: 'block',
      width: '100%',
    },

    '@media only screen and (min-width: 1024px) and (max-width: 1080px)': {
      top: '130px',
    },

    '@media(min-width: 1240px)': {
      left: '-25%',
    },
    '@media(min-width: 1440px)': {
      left: '-17%',
    },
    '@media(min-width: 1750px)': {
      left: '-10%',
    },
    '@media(min-width: 1850px)': {
      left: '-8%',
    },
  },
  sectionAccordionImage: {
    display: 'none',

    '@media(max-width: 1023px)': {
      display: 'block',
      width: '100%',
      mb: '3rem',
    },
  },
  buttonWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',

    '.button': {
      display: 'inline-block',
      verticalAlign: 'middle',
      backgroundColor: '#02073E',
      color: '#fffffe',
      borderRadius: '5px',
      fontSize: '16px',
      fontWeight: 700,
      p: '6.5px 19px',
      textDecoration: 'none',
      letterSpacing: '-0.16px',
      transition: 'all 500ms ease',
      '&:hover': {
        opacity: 0.8,
      },
    },
  },
  linkButtonWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',

    '@media(max-width: 590px)': {
      flexDirection: 'column',
    },

    '.buttonLink': {
      backgroundColor: '#232946',
      border: '1px solid #020718',
      color: '#fffffe',
      textDecoration: 'none',
      display: 'inline-block',
      verticalAlign: 'middle',
      borderRadius: '5px',
      fontSize: '16px',
      fontWeight: 700,
      p: '6.5px 19px',
      letterSpacing: '-0.16px',
      transition: 'all 500ms ease',
      fontFamily: 'Raleway, sans-serif', 
      zIndex: '100',

      '@media(max-width: 590px)': {
        mb: '.5rem',
        fontSize: '14px',
        textAlign: 'center',
      },
      '&:hover': {
        opacity: 0.8,
        transform: 'translateY(-0.45rem)',
      },
    },
    '.withIcon': {
      paddingLeft: '.5rem',
      display: 'inline',
    },
    '.icon': {
      paddingTop: '.3rem',
      display: 'inline',
    },
  },
  flex: {
    display: 'flex',
    gap: 0,
    justifyContent: ['flex-start', null, null, null, 'flex-end'],
  },
  content: {
    flex: '0 0 100%',
    pl: '80px',
    pb: ['50px', null, null, '70px', null, null, '90px'],
    '@media only screen and (min-width: 1560px) and (max-width: 3000px)': {
      flex: '0 0 60%',
    },
    '@media only screen and (min-width: 1241px) and (max-width: 1559px)': {
      flex: '0 0 50%',
    },
    '@media only screen and (min-width: 1024px) and (max-width: 1240px)': {
      flex: '0 0 50%',
    },

    '@media (max-width: 1024px)': {
      pl: '0',
    },

    '@media only screen and (min-width: 320px) and (max-width: 991px)': {
      flex: '0 0 100%',
    },
  },
  sectionTitle: {
    mb: '30px',
    textAlign: 'left',

      '@media(max-width: 1023px)': {
        textAlign: 'center',
      },

    h2: {
      color: '#0F2137',
      fontWeight: 700,
      fontSize: ['26px', null, null, '30px', '36px', '36px', '44px'],
      lineHeight: 1.5,
      letterSpacing: '-1.5px',
      mt: '10px',
      maxWidth: ['100%', null, '400px', null, '100%'],
      mx: ['0', null, 'auto', null, '0'],
    },
    span: {
      color: '#ff8e3c',
      fontSize: '18px',
      fontWeight: '700',
      lineHeight: 1,
      display: 'block',
    },
    p: {
      color: '#0F2137',
      fontSize: '16px',
      lineHeight: 2.19,
      maxWidth: ['100%', null, '400px', null, '100%'],
      mx: ['0', null, 'auto', null, '0'],
      mt: ['15px', null, null, '25px'],
    },
  },
};
