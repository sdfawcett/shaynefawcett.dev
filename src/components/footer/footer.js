/** @jsx jsx */
import React from 'react';
import { jsx, Box, Text, Container } from 'theme-ui';
import { Link } from 'components/link';
import { Link as ScrollLink } from 'react-scroll';
import Logo from 'components/logo';
import logoBald from 'assets/tl-logo-no-text.svg';

export default function Footer() {
  return (
    <Box as="footer" sx={styles.footer}>
      <Container sx={styles.container}>
        <Box
          sx={{
            display: 'flex',
            alignItems: ['center', null, null, null, null, 'end'],
            flexDirection: ['column', null, null, null, null, 'row'],
          }}
        >
          <Box sx={styles.logoContainer}>
            <Logo image={logoBald} />
          </Box>
          <Text
            as="p"
            sx={styles.footerText}
          >
            Copyright &copy; {new Date().getFullYear()} Shayne Fawcett and Mindful Web Partnership, LLC. All rights reserved. <br />Designed, coded, and written by Shayne Fawcett. ✌️
          </Text>

        </Box>
        <Box sx={styles.linksWrap}>

          <ScrollLink 
            activeClass="active"
            to='services'
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
          >
            Services
          </ScrollLink>

          <ScrollLink 
            activeClass="active"
            to='work'
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
          >
            Work
          </ScrollLink>

          <ScrollLink 
            activeClass="active"
            to='testimonials'
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
          >
            Testimonials
          </ScrollLink>

          <ScrollLink 
            activeClass="active"
            to='faq'
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
          >
            FAQ
          </ScrollLink>

        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  footer: {
    py: ['40px', null, null, null, null, '30px', '40px'],
    backgroundColor: '#232946',
    position: 'relative',
  },
  container: {
    display: 'flex',
    flexDirection: ['column', null, null, null, null, 'row'],
    justifyContent: ['center', null, null, null, null, 'space-between'],
    alignItems: 'center',
    position: 'relative',
    flexWrap: 'wrap',

    '@media(min-width: 1200px)': {
      alignItems: 'end',
    },
  },
  logoContainer: {
    width: '4rem',
  },
  footerText: {
    color: '#fffffe',
    opacity: '0.7',
    fontSize: '14px',
    mt: ['10px', null, null, null, null, '0'],
    textAlign: 'left',
    lineHeight: '1.6',

    '@media(max-width: 1199px)': {
      textAlign: 'center',
    },

   
  },
  linksWrap: {
    mt: ['25px', null, null, null, null, '0'],
    display: 'flex',
    flexWrap: 'wrap',

    a: {
      fontSize: ['14px', null, null, null, '16px'],
      color: '#ffffff',
      transition: 'all 500ms ease',
      cursor: 'pointer',
      '&:hover, &.active': { 
        color: '#ff8e3c',
      },
    },
    'a+a': { ml: ['15px', null, null, null, '35px'] },
  },
};
