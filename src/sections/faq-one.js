import React from 'react';
import { useInView } from 'react-intersection-observer';
import { keyframes } from '@emotion/core';
import Image from 'next/legacy/image'
import { Box, Container, Flex, Heading, Text, Button } from 'theme-ui';
import Accordion from 'components/accordion/accordion';
import tablet from '../../public/bb-static-tablet_ipad_silver_landscape.png';
import { FaGithub } from 'react-icons/fa';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';
import { SiNextDotJs } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { FaShopify } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { SiGraphql } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';

const FAQ_ONE_DATA = {
  sectionImage: tablet,
  tagline: 'Featured Project',
  title: 'Bomb Botanicals eCommerce Store Redesign and Rebuild',
  text:
    'An eCommerce storefront for a wellness brand selling CBD products online.',
  faqs: [
    {
      isExpanded: true,
      title: 'Technology Overview',
      contents: (
        <>
          <div 
            className='accordionIcons'
            style={{ 
              display: 'flex',
              justifyContent: 'flex-start',
              fontSize: '1.75rem',
              width: '100%',
            }}
          >
            <span className='next'>
              <SiNextDotJs />
            </span>

            <span className='react'>
              <FaReact />
            </span>

            <span className='shopify'>
              <FaShopify />
            </span>

            <span className='js'>
              <SiJavascript />
            </span>

            <span className='gq'>
              <SiGraphql />
            </span>
            
            <span className='tw'>
              <SiTailwindcss />
            </span>
          </div>
          <div>
            <p className='accordionIconText'>
              Uses Shopify for inventory management, Next.js and React for rendering, Tailwind CSS for styling, and GraphQL for fetching data.
            </p>
          </div>
        </>
      ),
    },
    {
      isExpanded: false,
      title: 'Project Details and Scope',
      contents: (
        <div>
          <p>This store is deployed to Vercel, includes custom controls for adjusting/displaying product options and variants, has a responsive mini-cart that uses the React Context API, queries the Shopify Storefront API using GraphQL, features an on-demand theme switcher with "Day Mode" and "Zen Mode", and uses SWR to track and display real-time inventory data from Shopify.</p>
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
            src={tablet}
            width={1000}
            height={700}
            
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
                  src={tablet}
                  width={1000}
                  height={700}
                  
                  alt="bomb botanicals website mockup"
                />
              </Box>

              <Box sx={styles.linkButtonWrapper}>
                <a href='https://next-x-shopify-g5u4tj5y2-sdfawcett.vercel.app/' className='buttonLink' target='_blank' rel='noopener'>
                  <span className='icon'><FaExternalLinkSquareAlt /></span>
                  <div className='withIcon'>Live Demo</div>
                </a>

                <a href='https://github.com/sdfawcett/next-x-shopify/tree/main/modern-ecommerce-2' className='buttonLink' target='_blank' rel='noopener'>
                  <span className='icon'><FaGithub /></span>
                  <div className='withIcon'>Github Repo</div>
                </a>
              </Box>

            </Box>

            <Box sx={styles.desktop}>
              <Box sx={styles.linkButtonWrapper}>
                <a href='https://next-x-shopify-g5u4tj5y2-sdfawcett.vercel.app/' className='buttonLink' target='_blank' rel='noopener'>
                  <span className='icon'><FaExternalLinkSquareAlt /></span>
                  <div className='withIcon'>Live Demo</div>
                </a>

                <a href='https://github.com/sdfawcett/next-x-shopify/tree/main/modern-ecommerce-2' className='buttonLink' target='_blank' rel='noopener'>
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

    '.next': {
      color: '#000000',
      pr: '.5rem',
    },
    '.react': {
      color: '#61DAFB',
      pr: '.5rem',
    },
    '.shopify': {
      color: '#7AB55C',
      pr: '.5rem',
    },
    '.js': {
      color: '#F7DF1E',
      pr: '.5rem',
    },
    '.gq': {
      color: '#E10098',
      pr: '.5rem',
    },
    '.tw': {
      color: '#06B6D4',
      pr: '.5rem',
    },
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

    '@media(min-width: 2001px)': {
      display: 'block',
      width: '100%',
    },
    
    '@media only screen and (min-width: 1200px) and (max-width: 2000px)': {
      display: 'block',
      width: '75%',
    },

    '@media only screen and (min-width: 1024px) and (max-width: 1199px)': {
      display: 'block',
      width: '100%',
    },

    '@media only screen and (min-width: 1024px) and (max-width: 1080px)': {
      top: '130px',
    },

    '@media(min-width: 1240px)': {
      left: '-25%',
    },

    '@media(min-width: 1500px)': {
      left: '-15%',
    },

    '@media(min-width: 1800px)': {
      left: '-10%',
    },

    '@media(min-width: 2100px)': {
      left: '0%',
    }
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

    '@media (max-width: 1023px)': {
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
      color: '#02073E',
      fontSize: '16px',
      lineHeight: 2.19,
      maxWidth: ['100%', null, '400px', null, '100%'],
      mx: ['0', null, 'auto', null, '0'],
      mt: ['15px', null, null, '25px'],
    },
  },



};
