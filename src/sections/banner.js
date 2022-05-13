import React from 'react';
import { Box, Container, Image, Heading } from 'theme-ui';
import { keyframes } from '@emotion/core';
import gravatarImage from 'assets/gravatar-image.png';
import bannerImage from 'assets/banner-mockup.png';
import bannerIcon1 from 'assets/banner-icon-1-1.svg';
import bannerIcon2 from 'assets/banner-icon-1-2.svg';
import bannerIcon5 from 'assets/banner-icon-1-5.svg';
import bannerIcon6 from 'assets/banner-icon-1-6.svg';
import bannerIcon7 from 'assets/dot-pattern.svg';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <Box as="section" id="banner" sx={styles.banner}>
      <Container sx={styles.container}>
        <Image
          sx={styles.bannerIcon1}
          className="bannerIcon"
          alt="banner icon"
          src={bannerIcon1}
        />
        <Image
          sx={styles.bannerIcon2}
          className="bannerIcon"
          alt="banner icon"
          src={bannerIcon2}
        />

        <Image
          sx={styles.bannerIcon5}
          className="bannerIcon"
          alt="banner icon"
          src={bannerIcon5}
        />
        <Image
          sx={styles.bannerIcon6}
          className="bannerIcon"
          alt="banner icon"
          src={bannerIcon6}
        />
        <Image
          sx={styles.bannerIcon7}
          className="bannerIcon"
          alt="banner icon"
          src={bannerIcon7}
        />


        <Image sx={styles.logo} src={gravatarImage} alt="Shayne Fawcett gravatar image" />

        <motion.div 
        initial="hidden" 
        animate="visible"
        transition={{
          delay: 0.6, type: 'tween'
        }} 
        variants={{
            hidden: {
              scale: .8,
              opacity: 0
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: .6
              }
            },
          }}
        >
          <Heading as="h2">Create beautiful landing page in few minutes</Heading>
        </motion.div>
        
        <motion.div
          initial={{ y: 250 }}
          animate={{ y: 5 }}
          transition={{ delay:0.2, type: 'spring', stiffness: 300 }}
        >
          <Image src={bannerImage} sx={styles.bannerImage} alt="banner moc" />
        </motion.div>

      </Container>
    </Box>
  );
};

export default Banner;

const bannerAnim1 = keyframes`
    0% {
        transform: rotate3d(0, 1, 0, 0deg);
    }

    30% {
        transform: rotate3d(0, 0, 1, 5deg);
    }

    60% {
        transform: rotate3d(1, 0, 0, 0deg);
    }

    80% {
        transform: rotate3d(0, 0, 1, 5deg);
    }

    100% {
        transform: rotate3d(0, 1, 0, 0deg);
    }
`;

const bannerAnim2 = keyframes`
    0% {
        transform: translateY(0px) translateX(0) rotate(0);
    }

    30% {
        transform: translateY(30px) translateX(30px) rotate(15deg);
        transform-origin: center center;
    }

    50% {
        transform: translateY(50px) translateX(50px) rotate(45deg);
        transform-origin: right bottom;
    }

    80% {
        transform: translateY(30px) translateX(30px) rotate(15deg);
        transform-origin: left top;
    }

    100% {
        transform: translateY(0px) translateX(0) rotate(0);
        transform-origin: center center;
    }
`;

const bannerAnim3 = keyframes`
    0%,
    100% {
        transform: perspective(400px) rotate(0deg) translateZ(0px);
    }

    50% {
        transform: perspective(400px) rotate(-45deg) translateZ(20px);
    }
`;

const bannerAnim4 = keyframes`
      0% {
        box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
        transform: translatey(0px);
      }
      50% {
        box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
        transform: translatey(-5px);
      }
      100% {
        box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
        transform: translatey(0px);
      }
`;

const styles = {
  banner: {
    overflow: 'hidden',
    backgroundColor: '#F9FBFD',
    textAlign: 'center',
    pt: ['110px', null, null, null, '130px'],
    h2: {
      fontSize: ['28px', null, null, '32px', '38px', '48px', '64px'],
      lineHeight: 1.25,
      color: '#02073E',
      fontWeight: 700,
      width: '100%',
      maxWidth: ['100%', null, null, '55%', '500px', '640px', '851px'],
      mx: 'auto',
      mt: '30px',
      mb: ['40px', null, null, '65px'],
    },
  },
  logo: {
    display: 'block',
    borderRadius: '50%',
    mx: 'auto',
    boxShadow: '0px 15px 35px rgba(65, 104, 139, 0.12)',
    transform: 'translatey(0px)',
    animation: `${bannerAnim4} 4s ease-in-out infinite`,
  },
  bannerImage: {
    display: 'block',
    mx: 'auto',
    position: 'relative',
    maxWidth: ['100%', null, null, '80%', null, '100%'],
  },
  container: {
    position: 'relative',
    '.bannerIcon': {
      position: 'absolute',
      display: ['none', null, null, null, 'block'],
    },
  },
  bannerIcon1: {
    top: '10%',
    left: '10%',
    animation: `${bannerAnim2} 8s linear infinite`,
  },
  bannerIcon2: {
    top: '10%',
    right: '10%',
    animation: `${bannerAnim2} 8s linear infinite`,
  },
  bannerIcon3: {
    bottom: '40px',
    right: '-120px',
    animation: `${bannerAnim1} 5s ease-out infinite`,
  },
  bannerIcon4: {
    bottom: '130px',
    left: '-120px',
    animation: `${bannerAnim1} 5s ease-out infinite`,
  },
  bannerIcon5: {
    bottom: '50%',
    left: '15%',
  },
  bannerIcon6: {
    bottom: '-65px',
    left: '0px',
    animation: `${bannerAnim3} 9s linear infinite`,
  },
  bannerIcon7: {
    bottom: '30%',
    right: '0%',
  },
};
