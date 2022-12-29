/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx, Box, Text, Container } from 'theme-ui';
import { Link } from 'components/link';
import { Link as ScrollLink } from 'react-scroll';
import Logo from 'components/logo';
import logoBald from 'assets/tl-logo-no-text.svg';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <Box as="footer" sx={styles.footer}>
      <Container sx={styles.container}>
        <Box
          sx={styles.footerMain}
        >
          <Box sx={styles.logoContainer}>
            <Logo image={logoBald} />
          </Box>
          <Box
            sx={styles.footerText}
          >
            Copyright &copy; {new Date().getFullYear()} Shayne Fawcett and <a className='footerLink' href='https://www.mindfulwebpartnership.com' target='_blank' rel='noopener'>Mindful Web Partnership, LLC</a>. All rights reserved. <br />Designed, coded, and written by Shayne Fawcett. ✌️<br />
            <Box
              sx={styles.iconContainer}
            >
              <a aria-label='shayne fawcett linkedin profile' href='https://www.linkedin.com/in/shaynefawcett/' target='_blank' rel='noopener'>
              <FaLinkedin />
              </a>
              <a aria-label='shayne fawcett github profile' href='https://github.com/sdfawcett' target='_blank' rel='noopener'>
              <FaGithub />
              </a>
            </Box>
          </Box>
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

    '.footerLink': {
      color: '#fffffe',
    },
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
    '@media(max-width: 1199px)': {
      alignItems: 'center',
    },
  },
  footerMain: {
    display: 'flex',
    alignItems: 'center',

    '@media(max-width: 1199px)': {
      flexDirection: 'column',
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
      color: '#fffffe',
      opacity: '0.7',
      transition: 'all 500ms ease',
      cursor: 'pointer',
      '&:hover, &.active': { 
        color: '#ff8e3c',
      },
    },
    'a+a': { ml: ['15px', null, null, null, '35px'] },
  },

  iconContainer: {
    display: 'flex',
    flexDirection: 'row',

    '@media(max-width: 1199px)': {
      justifyContent: 'center',
    },

    a: {
      margin: '.5rem 1.5rem 0 0',
      color: '#fffffe',
      fontSize: '1.2rem',
    },
  },
};
