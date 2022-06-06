import React from 'react';
import { keyframes } from '@emotion/core';
import { Box, Container, Flex, Text, Heading, Grid, Avatar } from 'theme-ui';
import { Link as ScrollLink } from 'react-scroll';
import ReactIcon from 'assets/react.svg';
import NextIcon from 'assets/nextdotjs.svg';
import GatsbyIcon from 'assets/gatsby.svg';
import HtmlIcon from 'assets/html5.svg';
import CssIcon from 'assets/css3.svg';
import JavaScriptIcon from 'assets/javascript.svg';
import GraphqlIcon from 'assets/graphql.svg';
import ShopifyIcon from 'assets/shopify.svg';
import WordPressIcon from 'assets/wordpress.svg';
import FloatingIconsBg from 'assets/banner-icon-1-6.svg';

const CallToAction = () => {

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
            I have more than a decade of experience building complex interfaces and putting together solutions for all kinds of users. I can help you identify the most appropriate technologies for your project based on your business needs and goals.
            </Text>
            <Text as="p">
              With widespread quarantines during the pandemic, eCommerce has grown exponentially. That's why lately I've been delivering headless <a href='https://developers.google.com/search/docs/advanced/experience/page-experience' target='_blank' rel='noopener noreferrer'>Shopify</a> storefronts using <a href='https://reactjs.org/' target='_blank' rel='noopener noreferrer'>React</a>, <a href='https://shopify.dev/api/storefront' target='_blank' rel='noopener noreferrer'>GraphQL Storefront API</a>, and a host of other API-driven technologies. 
            </Text>
            <Box sx={styles.linkButtonWrapper}>
              <ScrollLink
                to="work"
                variant="buttons.primary"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className='buttonLink'
              >
                See Some Stores
              </ScrollLink>
            </Box>
          </Box>

          <Box as="section">
            <Box>
              <Container sx={styles.container}>      
                <Grid sx={styles.gridContainer} columns={[3, '1fr 1fr 1fr']}>

                  <a href='https://reactjs.org/' target='_blank' rel='noopener noreferrer'>
                    <Avatar data-aos="flip-left" alt='react' src={ReactIcon} />
                  </a>
                  <a href='https://nextjs.org/' target='_blank' rel='noopener noreferrer'>
                    <Avatar data-aos-delay='300' data-aos="flip-left" alt='next.js' src={NextIcon} />
                  </a>
                  <a href='https://www.gatsbyjs.com/' target='_blank' rel='noopener noreferrer'>
                    <Avatar data-aos-delay='500' data-aos="flip-left" alt='gatsby.js' src={GatsbyIcon} />
                  </a>
                  <a href='https://wordpress.org/download/' target='_blank' rel='noopener noreferrer'>
                    <Avatar data-aos-delay='700' data-aos="flip-left" alt='wordpress' src={WordPressIcon} />
                  </a>
                  <a href='https://www.shopify.com/' target='_blank' rel='noopener noreferrer'>
                    <Avatar data-aos-delay='900' data-aos="flip-left" alt='shopify' src={ShopifyIcon} />
                  </a>
                  <a href='https://graphql.org/' target='_blank' rel='noopener noreferrer'>
                    <Avatar data-aos-delay='1100' data-aos="flip-left" alt='graph ql' src={GraphqlIcon} />
                  </a>
                  <a href='https://developer.mozilla.org/en-US/docs/Web/HTML' target='_blank' rel='noopener noreferrer'>
                    <Avatar data-aos-delay='1300' data-aos="flip-left" alt='html' src={HtmlIcon} />
                  </a>
                  <a href='https://developer.mozilla.org/en-US/docs/Web/CSS' target='_blank' rel='noopener noreferrer'>
                    <Avatar data-aos-delay='1500' data-aos="flip-left" alt='css' src={CssIcon} />
                  </a>
                  <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target='_blank' rel='noopener noreferrer'>
                    <Avatar data-aos-delay='1700' data-aos="flip-left" alt='javascript' src={JavaScriptIcon} />
                  </a>
  
                </Grid>
              </Container>
            </Box>
          </Box>

        </Flex>
      </Container>
    </Box>
  );
};

export default CallToAction;

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

const styles = {

  animatepopIn: {
    animation: `${popIn} 2s ease-in-out 1`,
  },
  section: {
    background: `transparent url(${FloatingIconsBg}) no-repeat center top / cover`,
  },
  callToAction: {
    mt: ['-90px', null, null, null, '0'],
    py: ['50px', null, null, null, '110px', null, '140px'],
  },
  flex: {
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  container: {
    margin: '30% 0',

    '@media(max-width: 991px)': {
      margin: '11% 0',
    },
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
    flex: ['0 0 100%', null, null, null, '0 0 50.5%'],
    textAlign: 'left',
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
      cursor: 'pointer',

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
    flex: ['0 0 100%', null, null, null, '0 0 61.5%'],
  },
  boxBg: {
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${FloatingIconsBg})`,
  },
};
