import React from 'react';
import { useInView } from 'react-intersection-observer';
import { keyframes } from '@emotion/core';
import { Box, Container, Flex, Text, Heading, Image } from 'theme-ui';
import coreWebVitals from 'assets/core-web-vitals.webp';

const CallToActionSubHero = () => {

  const { ref: myRef, inView: myElementIsVisible } = useInView()

  return (
    <Box as="section" sx={styles.callToAction}>
      <Container>
        <Flex sx={styles.flex}>
          <Box sx={styles.content}>
            <Text as="span">Behind the design</Text>
            <Heading as="h2">
              Innovative Web Solutions Driven By Modern Technologies
            </Heading>
            <Text as="p">
              I know what it takes to build a stunning store and optimize it. And I get excited about new technologies.
            </Text>
            <Text as="p">
              Why not leverage my focus on innovation to make your project a success?
            </Text>

          </Box>

         <Box sx={styles.images}>   
            <Box data-aos="flip-up">
              <Image src={coreWebVitals} layout='fill' alt="shaynefawcett.dev real google core web vitals report" />
              <p>This website's actual <a href='https://pagespeed.web.dev/' target='_blank' rel='noopener noreferrer'>PageSpeed Insights</a> report with the maximum score of 100</p>
            </Box>
         </Box>

        </Flex>
      </Container>
    </Box>

    
  );
};

export default CallToActionSubHero;

const popIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5, 0.5);
  }

  50% {
    opacity: 1;
    transform: scale(1.2, 1.2);
  }

  100% {
    opacity: 1;
    transform: scale(1, 1);
  }
`;

const inFromRight = keyframes`
  0% {
    transform: translate(800%, 0);
  }
  100% {
    transform: translate(0%, 0);
  }
`;

const styles = {

  animatepopIn: {
    animation: `${popIn} 2s ease-in-out 1`,
  },
  animateInFromRight: {
   animation: `${inFromRight} 1s ease-in-out 1`,
 },
  imgWrap: {
    width: '100%',
    height: 'auto',
  },
  callToAction: {
    mt: ['-90px', null, null, null, '0'],
    py: ['50px', null, null, null, '110px', null, '140px'],
  },
  flex: {
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  container: {
    margin: '15% 0',
  },
  gridContainer: {
    columnGap: '3.5rem',
    rowGap: '2rem',

    '@media(max-width: 400px)': {
      columnGap: '2rem',
      rowGap: '1rem',
    },
  },
  content: {
    flex: ['0 0 100%', null, null, null, '0 0 40.5%'],
    textAlign: ['center', null, null, null, 'left'],
    pt: ['80px', null, null, null, '0'],
    maxWidth: ['100%', null, null, '80%', '100%'],
    mx: ['auto', null, null, null, '0'],
    mb: ['30px', null, null, null, '0'],
    span: {
      fontSize: '18px',
      fontWeight: 700,
      color: '#ff8e3c',
      display: 'block',
      lineHeight: 1,
    },
    h2: {
      color: '#232946',
      fontWeight: 700,
      fontSize: ['26px', null, null, '30px', '36px', '36px', '44px'],
      maxWidth: ['100%', null, null, null, null, '90%', '100%'],
      lineHeight: 1.36,
      letterSpacing: '-1.5px',
      mt: '20px',
      mb: '30px',
    },
    p: {
      color: '#02073E',
      fontSize: ['16px', null, null, '18px'],
      lineHeight: ['2', null, null, 2.33],
      mb: '30px',
    },
  },
  linkButtonWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
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
  button: {
    display: 'inline-block',
    verticalAlign: 'middle',
    backgroundColor: '#02073E',
    color: '#fff',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 700,
    p: '6.5px 19px',
    letterSpacing: '-0.16px',
    transition: 'all 500ms ease',
    '&:hover': {
      opacity: 0.8,
      transform: 'translateY(-0.45rem)',
    },
  },
  images: {
    flex: ['0 0 100%', null, null, null, '0 0 49.5%'],
  },
  boxBg: {
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  },
};
