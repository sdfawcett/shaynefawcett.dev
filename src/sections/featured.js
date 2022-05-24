import React, { useState } from 'react';
import { Box, Container, Button } from 'theme-ui';
import { keyframes } from '@emotion/core';
import BlockTitleDarkBg from 'components/block-title-dark-bg';
import Image from 'components/image';
import { AiFillDollarCircle, AiFillPieChart } from 'react-icons/ai';
import { FaBriefcase, FaCog } from 'react-icons/fa';
import cowtownTeesCard from 'assets/cowtown-tees-card.webp';
import mindfulCard from 'assets/mindful-card.webp';
import dotPattern from 'assets/dot-pattern.svg';

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
      <Container sx={styles.container}>
        <BlockTitleDarkBg
          title="What the features of product"
          text="Introducing all screen details"
        />
        <Box sx={styles.tabButtonTopWrapper}>
          <Box sx={styles.tabButtonWrapper}>
            <Button
              onClick={() => handleTab('budget')}
              className={`${tab.active === 'budget' ? 'active' : ''}`}
            >
              <AiFillDollarCircle />
              Budget Overview
            </Button>
            <Button
              onClick={() => handleTab('adjust')}
              className={`${tab.active === 'adjust' ? 'active' : ''}`}
            >
              <FaCog />
              Create & adjust
            </Button>

          </Box>
        </Box>
        <Box sx={styles.tabContent}>
          {tab.active === 'budget' && (
            <Image src={cowtownTeesCard} alt="cowtown tees screenshot" className="tabImage" />
          )}
          {tab.active === 'adjust' && (
            <Image src={mindfulCard} alt="mindful web partnership screenshot" className="tabImage" />
          )}
        </Box>
      </Container>
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
    pt: ['80px', null, null, null, '145px', null, '145px'],
    backgroundColor: '#232946',
  },
  container: {
    position: 'relative',
    top: '150px',
    mt: '-150px',
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
    '@media(max-width: 400px)': {
      flexDirection: 'column',
      width: '60%',
    },

    button: {
      display: 'flex',
      alignItems: 'center',
      pb: ['15px', null, null, null, '35px'],
      px: ['15px', null, null, null, '30px'],
      flexShrink: '0',
      border: 0,
      backgroundColor: 'rgba(0,0,0,0)',
      color: '#ADBDD0',
      fontSize: ['14px', null, null, null, '18px'],
      fontWeight: 500,
      lineHeight: 1,
      position: 'relative',
      transition: 'all 500ms ease',
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
        svg: {
          color: '#ff8e3c',
          opacity: 1,
        },
        '&::before': {
          transform: 'scale(1,1)',

            '@media(max-width: 400px)': {
              transform: 'scale(0)',
            },
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
    minHeight: ['190px', null, '300px', '385px', null, '600px'],
    position: 'relative',
    '&::before': {
      content: "''",
      width: '302px',
      height: '347px',
      backgroundImage: `url(${dotPattern})`,
      position: 'absolute',
      bottom: '-30px',
      right: '-40px',
      display: ['none', null, null, null, null, 'block'],
    },
    '.tabImage': {
      position: 'relative',
      animation: `${fadeIn} 0.8s linear`,
    },
  },
};
