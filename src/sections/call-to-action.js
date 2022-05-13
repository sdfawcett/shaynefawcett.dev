import React from 'react';
import { useInView } from 'react-intersection-observer';
import { keyframes } from '@emotion/core';
import { Box, Container, Flex, Text, Heading, Image, Grid, Avatar } from 'theme-ui';
import { Link } from 'components/link';
import ReactIcon from 'assets/react.svg';
import NextIcon from 'assets/nextdotjs.svg';
import GatsbyIcon from 'assets/gatsby.svg';
import HtmlIcon from 'assets/html5.svg';
import CssIcon from 'assets/css3.svg';
import JavaScriptIcon from 'assets/javascript.svg';
import FloatingIconsBg from 'assets/banner-icon-1-6.svg';

const CallToAction = () => {

  const { ref: myRef, inView: myElementIsVisible } = useInView()
  console.log('myElementIsVisible', myElementIsVisible)

  return (
    <Box as="section" sx={styles.callToAction}>
      <Container>
        <Flex sx={styles.flex}>
          <Box sx={styles.content}>
            <Text as="span">Behind the design</Text>
            <Heading as="h3">
              Code that we used to built the website with integrating apps
            </Heading>
            <Text as="p">
              Get your tests delivered at let home collect sample from the
              victory of the managements that supplies best design system
              guidelines ever. Get your tests delivered at let home collect
              sample.
            </Text>
            <Link path="#" sx={styles.button}>
              Explore More
            </Link>
          </Box>

          <Box ref={myRef} as="section">
            <Box sx={myElementIsVisible ? styles.animateInFromLeft : ''} >
              <Container sx={styles.container}>      
                <Grid gap={30} columns={[3, '1fr 1fr 1fr']}>
                  <Avatar src={ReactIcon} />
                  <Avatar src={NextIcon} />
                  <Avatar src={GatsbyIcon} />
                  <Avatar src={HtmlIcon} />
                  <Avatar src={CssIcon} />
                  <Avatar src={JavaScriptIcon} />
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

const inFromLeft = keyframes`
  0% {
    transform: translate(-1000%, 0);
  }
  100% {
    transform: translate(0%, 0);
  }
`;

const styles = {

  animateInFromLeft: {
    animation: `${inFromLeft} 1.5s ease-in-out 1`,
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
    margin: '25% 0',
  },
  content: {
    flex: ['0 0 100%', null, null, null, '0 0 50.5%'],
    textAlign: ['center', null, null, null, 'left'],
    pt: ['80px', null, null, null, '0'],
    maxWidth: ['100%', null, null, '80%', '100%'],
    mx: ['auto', null, null, null, '0'],
    mb: ['30px', null, null, null, '0'],
    span: {
      fontSize: '18px',
      fontWeight: 700,
      color: 'primary',
      display: 'block',
      lineHeight: 1,
    },
    h3: {
      color: '#0F2137',
      fontWeight: 700,
      fontSize: ['23px', null, null, null, '30px', '36px', '44px'],
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
