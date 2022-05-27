import React, { useState } from 'react';
import { Box, Container, Button, Avatar } from 'theme-ui';
import { keyframes } from '@emotion/core';
import BlockTitleDarkBg from 'components/block-title-dark-bg';
import Image from 'components/image';
import cowtownTeesCard from 'assets/cowtown-tees-card.webp';
import mindfulCard from 'assets/mindful-card.webp';
import dotPattern from 'assets/dot-pattern.svg';
import cowtownTeesLogo from '../assets/cowtown-logo-light-cropped.svg';
import mindfulLogo from '../assets/bb-globe-only.svg';
import { VscGithub } from 'react-icons/vsc';
import { BiLinkExternal } from 'react-icons/bi';

const Featured = () => {
  const [tab, setTab] = useState({
    active: 'budget',
  });

  const handleTab = (tab) => {
    if (tab === 'budget') {
      setTab({
        ...tab,
        active: 'budget',
      });
    }
    if (tab === 'adjust') {
      setTab({
        ...tab,
        active: 'adjust',
      });
    }
  };
  return (
    <Box as="section" sx={styles.featured}>
      <Box sx={styles.bg}>
        <Container sx={styles.container}>
          <BlockTitleDarkBg
            title="Other Recent Projects"
            text="Modern solutions built with modern technologies."
          />
          <Box sx={styles.tabButtonTopWrapper}>
            <Box sx={styles.tabButtonWrapper}>
              <Button
                onClick={() => handleTab('budget')}
                className={`${tab.active === 'budget' ? 'active' : ''}`}
              >
                <Avatar alt='cowtown tees logo' sx={styles.logo} src={cowtownTeesLogo} />
                Cowtown Tees &#38; Apparel
              </Button>
              <Button
                onClick={() => handleTab('adjust')}
                className={`${tab.active === 'adjust' ? 'active' : ''}`}
              >
                <Avatar alt='mindful web partnership logo' sx={styles.logo} src={mindfulLogo} />
                Mindful Web Partnership
              </Button>

            </Box>
          </Box>
          <Box sx={styles.tabContent}>
            {tab.active === 'budget' && (
              <>
                <Image src={cowtownTeesCard} alt="cowtown tees screenshot" className="tabImage" />
                <Box sx={styles.linkButtonWrapper}>
                  <a href='https://reactjs.org/' className='buttonLink' target='_blank' rel='noopener noreferrer'>
                      <span className='icon'><BiLinkExternal /></span>
                      <div className='withIcon'>Live Demo</div>
                  </a>

                  <a href='https://reactjs.org/' className='buttonLink' target='_blank' rel='noopener noreferrer'>
                      <span className='icon'><VscGithub /></span>
                      <div className='withIcon'>Github Repo</div>
                  </a>
                </Box>
              </>
            )}
            {tab.active === 'adjust' && (
              <>
                <Image src={mindfulCard} alt="mindful web partnership screenshot" className="tabImage" />
                <Box sx={styles.linkButtonWrapper}>

                  <a href='https://reactjs.org/' className='buttonLink' target='_blank' rel='noopener noreferrer'>
                    <span className='icon'><BiLinkExternal /></span>
                    <div className='withIcon'>Live Site</div>
                  </a>

                  <a href='https://reactjs.org/' className='buttonLink' target='_blank' rel='noopener noreferrer'>
                    <span className='icon'><VscGithub /></span>
                    <div className='withIcon'>Github Repo</div>
                  </a>
                </Box>
              </>
            )}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Featured;
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(5%);
  }
  to {
    opacity: 1;
    transform: translateY(0%);
  }
`;

const styles = {
  featured: {
    backgroundColor: '#232946',
  },
  bg: {
    width: '100%',
    height: '100%',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' viewBox='0 0 150 150' width='150' height='150' opacity='1'%3E%3Cdefs%3E%3Cfilter id='nnnoise-filter' x='-20%25' y='-20%25' width='140%25' height='140%25' filterUnits='objectBoundingBox' primitiveUnits='userSpaceOnUse' color-interpolation-filters='linearRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.184' numOctaves='4' seed='15' stitchTiles='stitch' x='0%25' y='0%25' width='100%25' height='100%25' result='turbulence'%3E%3C/feTurbulence%3E%3CfeSpecularLighting surfaceScale='31' specularConstant='0.7' specularExponent='20' lighting-color='%23ff8e3c' x='0%25' y='0%25' width='100%25' height='100%25' in='turbulence' result='specularLighting'%3E %3CfeDistantLight azimuth='3' elevation='65'%3E%3C/feDistantLight%3E %3C/feSpecularLighting%3E%3C/filter%3E%3C/defs%3E%3Crect width='700' height='700' fill='%23232946'%3E%3C/rect%3E%3Crect width='700' height='700' fill='%23ff8e3c' filter='url(%23nnnoise-filter)'%3E%3C/rect%3E%3C/svg%3E")`,

  },
  container: {
    position: 'relative',
    pt: ['80px', null, null, null, '185px', '185px', '185px'],
    pb: ['80px', null, null, null, '80px', '80px', '185px'],

    '@media(max-width: 600px)': {
      top: '0',
      mt: '0',
      pb: '5rem',
    },
  },
  logo: {
    width: '45px',
    height: '45px',
    minWidth: '45px',
    minHeight: '45px',
    pr: '.4rem',
  },
  tabButtonTopWrapper: {
    overflowY: ['hidden', null, null, null, null, 'inherit'],
    overflowX: ['hidden', null, null, null, null, 'inherit'],
  },
  tabButtonWrapper: {
    width: ['700px', null, null, null, null, '100%'],
    mx: ['auto', null, null, null, null, '0'],
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottom: '1px solid rgba(1,7,13,.1)',
    mb: '35px',

    '@media(max-width: 746px)': {
      justifyContent: 'left',
    },
    '@media(max-width: 690px)': {
      flexDirection: 'column',
      width: '80%',
    },

    '@media(max-width: 500px)': {
      flexDirection: 'column',
      width: '90%',
    },

    button: {
      display: 'flex',
      alignItems: 'center',
      pb: ['8px', null, null, null, '35px'],
      px: ['15px', null, null, null, '30px'],
      flexShrink: '0',
      border: 0,
      backgroundColor: 'rgba(0,0,0,0)',
      color: '#ADBDD0',
      fontSize: ['16px', null, null, null, '22px'],
      fontWeight: 700,
      fontFamily: 'Raleway, sans-serif',
      lineHeight: 1,
      position: 'relative',
      transition: 'all 500ms ease',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      transition: 'all 500ms ease',
      mr: '1rem',

      '@media(max-width: 690px)': {
        mb: '2rem',
        py: '14px',
        width: '100%',
      },

      svg: {
        fontSize: ['18px', null, null, null, '30px'],
        color: '#ADBDD0',
        opacity: 0.7,
        mr: '15px',
        transition: 'all 500ms ease',

        '@media(max-width: 400px)': {
          mr: '3px',
        },
      },
      '&:hover': {
        backgroundColor: 'rgba(0,0,0,0)',
        color: '#ff8e3c',
        transform: 'translateY(0)',
        svg: {
          color: '#ff8e3c',
          opacity: 1,
        },
        '&::before': {
          transform: 'scale(0)',
        },
      },
      '&.active': {
        backgroundColor: 'rgba(0,0,0,0)',
        color: '#ff8e3c',
        transform: 'translateY(0)',

        '@media(max-width: 690px)': {
          border: '1px solid #ff8e3c',
        },
        svg: {
          color: '#ff8e3c',
          opacity: 1,
        },
        '&::before': {
          transform: 'scale(1,1)',
        },
      },
      '&::before': {
        content: "''",
        position: 'absolute',
        bottom: '-2px',
        backgroundColor: '#ff8e3c',
        left: 0,
        width: '100%',
        height: '3px',
        transform: 'scale(0,1)',
        transition: 'transform 500ms ease',
      },
    },
  },
  tabContent: {
    position: 'relative',
    margin: '0 20%',

    '@media(max-width: 746px)': {
      margin: '0',
    },

    '&::before': {
      content: "''",
      width: '302px',
      height: '347px',
      backgroundImage: `url(${dotPattern})`,
      position: 'absolute',
      bottom: '-30px',
      right: '-40px',
      display: ['none', null, null, null, null, 'none'],
    },
    '.tabImage': {
      position: 'relative',
      animation: `${fadeIn} 0.8s linear`,
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
      backgroundColor: '#fffffe',
      border: '1px solid #020718',
      color: '#232946',
      fontFamily: 'Raleway, sans-serif', 
      textDecoration: 'none',
      display: 'inline-block',
      verticalAlign: 'middle',
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

      '@media(max-width: 690px)': {
        mb: '.5rem',
        fontSize: '14px',
      },

      '@media(max-width: 590px)': {
        textAlign: 'center',
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
  },

};
