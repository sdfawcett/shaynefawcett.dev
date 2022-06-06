import React from 'react';
import { Box, Container, Heading, Text } from 'theme-ui';
import { keyframes } from '@emotion/core';
import ContactForm from 'components/contact-form';

const Subscribe = () => {
  return (
    <Box as="section" id='contact' sx={styles.subscribe}>
      <Container>
        <Heading as="h2">Contact me anytime</Heading>
        <Text as="p">
          Let's talk about your next project.
        </Text>
        <ContactForm />
      </Container>
    </Box>
  );
};

export default Subscribe;

const bgAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const styles = {
  subscribe: {
    py: ['80px', null, null, null, '80px', '100px', '140px'],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: '300% 300%',
    backgroundImage: 'linear-gradient(-45deg, #2cb67d 0%, #ff8e3c 25%, #7f5af0 51%, #232946 100%)',
    animation: `${bgAnimation} 15s ease infinite`,
    h2: {
      textAlign: 'center',
      fontSize: ['26px', null, null, '30px', '36px', '36px', '44px'],
      lineHeight: [1.5, null, null, '1'],
      color: '#fffffe',
      letterSpacing: ['-1.5px'],
      mb: ['0px', null, null, '15px'],
      width: ['70%', null, null, 'auto'],
      mx: ['auto', null, null, '0'],
    },
    p: {
      fontSize: ['16px', null, null, '18px'],
      color: '#fffffe',
      letterSpacing: ['-0.5px'],
      textAlign: 'center',
      width: ['70%', null, null, 'auto'],
      mx: ['auto', null, null, '0'],
      mt: ['10px', null, null, '0'],
    },

  },
  form: {
    width: ['100%'],
    maxWidth: ['555px'],
    mx: ['auto'],
    display: ['flex'],
    flexDirection: 'column',
    mt: ['30px', null, null, null, '60px'],
    
    '.buttonLink': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      fontFamily: 'Raleway',
      width: '100%',
      textDecoration: 'none',
      backgroundColor: '#fffffe',
      border: '1px solid #020718',
      color: '#232946',
      padding: '.5rem',
      borderRadius: '4px',
      fontWeight: '700',

      '.withIcon': {
        paddingLeft: '.5rem',
      },
      '.icon': {
        paddingTop: '.3rem',
      },
    },

    a: {
      textDecoration: 'none',
      width: '100%',
      transition: '500ms',

      '&:hover': {
        transform: 'translateY(-0.45rem)',
      },
    },
  },
  input: {
    width: ['100%'],
    maxWidth: '100%',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: 'rgba(255,255,255, .08)',
    outline: 'none',
    color: 'rgba(255,255,255, .8)',
    fontSize: '16px',
    pl: ['0px', null, null, '30px'],
    height: ['50px', null, null, '60px'],
    mr: ['0px', null, null, '15px'],
    mb: '1rem',
    textAlign: ['center', null, null, 'left'],
  },
  input: {
    width: ['100%'],
    maxWidth: '100%',
    borderRadius: '5px',
    border: '1px solid #020718',
    backgroundColor: 'rgba(255,255,255, .08)',
    outline: 'none',
    color: 'rgba(255,255,255, .8)',
    fontSize: '16px',
    pl: ['10px', null, null, '30px'],
    height: ['50px', null, null, '60px'],
    mr: ['0px', null, null, '15px'],
    mb: '1rem',
    textAlign: 'left',
    '::placeholder': {
      color: '#fffffe',
      fontSize: '1rem',
      fontFamily: 'Raleway', 
    }
  },
  textarea: {
    backgroundColor: '#fff',
    borderRadius: '5px',
    fontWeight: '500',
    fontSize: ['18px'],
    color: '#020718',
    letterSpacing: '-0.5px',
    outline: 'none',
    pl: ['10px', null, null, '30px'],
    height: '10rem',
    minHeight: ['50px', null, null, '60px'],
    width: ['100%', null, null, 'auto'],
    mt: ['10px', null, null, '0'],
    mb: '1rem',
    mx: ['auto', null, null, '0'],
    '::placeholder': {
      color: '#333',
      fontSize: '1rem',
      fontFamily: 'Raleway', 
    }
  },
  button: {
    backgroundColor: '#fffffe',
    border: '1px solid #020718',
    color: '#232946',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    fontFamily: 'Raleway', 
    width: '100%',

    '.withIcon': {
      paddingLeft: '.5rem',
    },
    '.icon': {
      paddingTop: '.3rem',
    },
  },

  orDivider: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontStyle: 'italic',
    fontSize: '1.25em',
    margin: '0 1em',
    padding: '1rem',

      span: {
        padding: '0 1rem',
        color: '#fffffe',
      },

      '&:before': {
        content: '""',
        height: '0.115em',
        backgroundColor: '#232946',
        flex: '1',
        margin: '0 0.25em 0 0',
      },
      '&:after': {
        content: '""',
        height: '0.115em',
        backgroundColor: '#232946',
        flex: '1',
        margin: '0 0.25em 0 0',
      }
  },
};
