import React from 'react';
import { Button, Input, Box, Container, Heading, Text, Textarea } from 'theme-ui';
import { keyframes } from '@emotion/core';

const Subscribe = () => {
  return (
    <Box as="section" sx={styles.subscribe}>
      <Container>
        <Heading as="h3">Subscribe to get notified about event</Heading>
        <Text as="p">
          By subscribing with your mail, you will accept our privacy policy
        </Text>
        <Box as="form" sx={styles.form}>
          <Box as="label" htmlFor="contactName" variant="styles.srOnly">
            First Name
          </Box>
          <Input
            placeholder="Enter your first name"
            type="text"
            id="contactName"
            sx={styles.input}
          />

          <Box as="label" htmlFor="contactEmail" variant="styles.srOnly">
            Email
          </Box>
          <Input
            placeholder="Enter your email address"
            type="email"
            id="contactEmail"
            sx={styles.input}
          />

          <Box as="label" htmlFor="contactMessage" variant="styles.srOnly">
            Your message
          </Box>
          <Textarea
            id="contactMessage"
            sx={styles.textarea}
            placeholder="Your message here"
          >

          </Textarea>

          <Button type="submit" sx={styles.button}>
            Subscribe us
          </Button>
        </Box>
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
    h3: {
      textAlign: 'center',
      fontSize: ['23px', null, null, null, null, '30px', '36px'],
      lineHeight: [1.5, null, null, '1'],
      color: '#fff',
      letterSpacing: ['-0.5px'],
      mb: ['0px', null, null, '15px'],
      width: ['70%', null, null, 'auto'],
      mx: ['auto', null, null, '0'],
    },
    p: {
      fontSize: ['16px'],
      color: '#fff',
      opacity: '.6',
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
    '::placeholder': {
      color: 'white',
      fontSize: '1rem',
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
    padding: ['0px 30.75px'],
    height: '10rem',
    minHeight: ['50px', null, null, '60px'],
    width: ['100%', null, null, 'auto'],
    mt: ['10px', null, null, '0'],
    mb: '1rem',
    mx: ['auto', null, null, '0'],
    '::placeholder': {
      color: '#333',
      fontSize: '1rem',
    }
  },
};
