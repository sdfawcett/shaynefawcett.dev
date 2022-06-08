import React, { useState, useEffect } from 'react'
import { Box, Container, Image, Heading, Text } from 'theme-ui';
import { keyframes } from '@emotion/core';
import gravatarImage from 'assets/gravatar-image.png';
import { RiShieldCheckFill } from 'react-icons/ri';
import { motion } from 'framer-motion';
import Typed from 'react-typed';
import { Link as ScrollLink } from 'react-scroll';

const Banner = () => {

  const [mobile, setMobile] = useState(undefined)

  useEffect(() => {
    const updateMobile = () => {
      setMobile(window.innerWidth < 700 ? true : false)
    }

    updateMobile()
    window.addEventListener('resize', updateMobile)
    return () => {
      window.removeEventListener('resize', updateMobile)
    }
  }, [])

  const points = [
    { id: 1, years: "7+ Years", description: "of professional web development experience" },
    { id: 2, years: "5 Years", description: "as a user experience consultant at a Fortune 100 company" },
    { id: 3, years: "5+ Years", description: "of professional experience in digital marketing and communication" },
  ];

  return (
    <Box as="section" id="banner" sx={styles.banner}>
      <Box sx={styles.bg}>
        <Container sx={styles.container}>

          <Image sx={styles.logo} src={gravatarImage} alt="Shayne Fawcett gravatar image" />

          <motion.div 
          initial="hidden" 
          animate="visible"
          transition={{
            delay: 0, type: 'tween'
          }} 
          variants={{
              hidden: {
                scale: .1,
                opacity: 0
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: .2
                }
              },
            }}
          >
            <Text as="p">Hi, I'm Shayne ✌</Text>

            <Heading as="h1">Web Developer, eCommerce Consultant &#38; User Experience Professional
            </Heading>

            <Heading as="h2">I'll turn your
              <span>
                <Typed
                  strings={["thoughts", "designs", "data", "ideas", "mockups", "content", "pitches"]}
                  typeSpeed={200}
                  backSpeed={50}
                  backDelay={1000}
                  loop
                  smartBackspace
                  cursorChar={'_'}
                  className='typed'
                /><br />
              </span>
              into user-centric, interactive web experiences.
            </Heading>
            

          </motion.div>

                <Box sx={styles.points}>

                  {points.map((point, i) => (
                    
                      <motion.div
                        key={point.id}
                        initial={{ x: 2050 }}
                        animate={{ x: 0 }}
                        className='point'
                        transition={{ duration: 3, delay: i * 1.5, type: 'spring', stiffness: 500 }}
                      >
                        <span className='icon'><RiShieldCheckFill /></span>
                        <h3 className='withIcon'>
                          {point.years}
                        </h3>
                        <p>{point.description}</p>
                      </motion.div>
                    
                  ))}

                </Box>


                <Box sx={styles.heroFooter}>
            
                  <ScrollLink
                    to="work"
                    variant="buttons.primary"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    See My Work
                  </ScrollLink>

                </Box>
                   

        </Container>
      </Box>
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
    backgroundColor: '#232946',
    textAlign: 'center',

    pt: ['110px', null, null, null, '110px'],
    h1: {
      fontSize: ['28px', null, null, '32px', '38px', '48px', '64px'],
      lineHeight: 1.25,
      color: '#fffffe',
      fontWeight: 800,
      width: '100%',
      maxWidth: ['100%', null, null, '800px', '800px', '800px', '900px'],
      mx: 'auto',
      mt: '30px',
      mb: ['65px', null, null, '65px'],
    },
    h2: {
      fontSize: '1.5rem',
      fontFamily: 'Raleway, sans-serif',
      lineHeight: 1.25,
      color: '#fffffe',
      fontWeight: 600,
      width: '100%',
      maxWidth: ['100%', null, null, '800px', '800px', '800px', '900px'],
      mx: 'auto',
      mt: '30px',
      mb: ['65px', null, null, '65px'],

      '.typed, .typed-cursor': {
        WebkitTextFillColor: '#fffffe',
      },

      span: {
        ml: '.15rem',
      },

      '.typed, span': {
        background: '#FF8E3C',
        background: 'linear-gradient(to right, #FF8E3C 0%, #7F5AF0 100%)',
        backgroundSize: '200% auto',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      },
      '@media(max-width: 400px)': {
        fontSize: '1.5rem',
        mb: '50px',
      },
    },
    h3: {
      
      fontSize: '1.5rem',
      lineHeight: 1.25,
      color: '#fffffe',
      fontWeight: 400,
      width: '100%',
      maxWidth: ['100%', null, null, '65%', '500px', '640px', '851px'],
      mx: 'auto',
      mt: '30px',
      mb: ['65px', null, null, '100px'],

      '@media(max-width: 699px)': {
        display: 'block',
        textAlign: 'left',
        width: '100%',
      },

      '@media(max-width: 400px)': {
        fontSize: '1.3rem',
      },
    },
    p: {
      color: '#fffffe',
      fontSize: '1.25rem',

      '@media(max-width: 400px)': {
        fontSize: '1.2rem',
      },
    },
  },

  bg: {
    width: '100%',
    height: '100%',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' viewBox='0 0 150 150' width='150' height='150' opacity='1'%3E%3Cdefs%3E%3Cfilter id='nnnoise-filter' x='-20%25' y='-20%25' width='140%25' height='140%25' filterUnits='objectBoundingBox' primitiveUnits='userSpaceOnUse' color-interpolation-filters='linearRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.184' numOctaves='4' seed='15' stitchTiles='stitch' x='0%25' y='0%25' width='100%25' height='100%25' result='turbulence'%3E%3C/feTurbulence%3E%3CfeSpecularLighting surfaceScale='31' specularConstant='0.7' specularExponent='20' lighting-color='%23ff8e3c' x='0%25' y='0%25' width='100%25' height='100%25' in='turbulence' result='specularLighting'%3E %3CfeDistantLight azimuth='3' elevation='65'%3E%3C/feDistantLight%3E %3C/feSpecularLighting%3E%3C/filter%3E%3C/defs%3E%3Crect width='700' height='700' fill='%23232946'%3E%3C/rect%3E%3Crect width='700' height='700' fill='%23ff8e3c' filter='url(%23nnnoise-filter)'%3E%3C/rect%3E%3C/svg%3E")`,
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
    pt: '1rem',

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
    bottom: '58%',
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

  macbook: {
    display: 'block',

    '@media(max-width: 699px)': {
      display: 'none',
    },
  },
  
  screen: {
    background: '#000',
    borderRadius: '3% 3% 0.5% 0.5% / 5%',
    margin: '0 auto',
    /* for aspect ratio */
    position: 'relative',
    width: '80%',

    '&::before': {
      border: '2px solid #cacacc',
      borderRadius: '3% 3% 0.5% 0.5% / 5%',
      boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.8) inset, 0 0 1px 2px rgba(255, 255, 255, 0.3) inset',
      content: "''",
      display: 'block',
      /* for aspect ratio ~67:100 */
      pt: '67%',
    },
    '&::after': {
      content: "''",
      borderTop: '2px solid rgba(255, 255, 255, 0.15)',
      position: 'absolute',
      bottom: '0.75%',
      left: '0.5%',
      pt: '1%',
      width: '99%',
    },
  },

  viewport: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    top: '0',
    margin: '4.3% 3.2%',
    background: '#333',
    transition: 'background-position 3s ease',
    backgroundPosition: '0 0',
    backgroundSize: '100% auto',
    overflow: 'hidden',
    cursor: 'pointer',

    '&:hover': {
      backgroundPosition: '0 100%',
    },

    '&::after': {
      content: "''",
      background: 'radial-gradient(circle at right bottom, transparent 75%, rgba(255, 255, 255, 0.05) 75%, transparent)',
      bottom: '0',
      left: '0',
      position: 'absolute',
      right: '0',
      top: '0',
    },
  },

  base: {
    /* for aspect ratio */
    position: 'relative',
    width: '100%',

    '&::before': {
      content: "''",
      display: 'block',
      /* for aspect ratio ~33:1000*/
      pt: '3.3%',
      /* styling */
      background: 'linear-gradient(#eaeced, #edeef0 55%, #fff 55%, #8a8b8f 56%, #999ba0 61%, #4B4B4F 84%, #262627 89%, rgba(0, 0, 0, .01) 98%)',
      borderRadius: '0 0 10% 10%/ 0 0 50% 50%',
    },


  },

  notch: {
    background: '#ddd',
    borderRadius: '0 0 7% 7% / 0 0 95% 95%',
    boxShadow: '-5px -1px 3px rgba(0, 0, 0, 0.2) inset, 5px -1px 3px rgba(0, 0, 0, 0.2) inset',
    ml: 'auto',
    mr: 'auto',
    mt: '-3.5%',
    zIndex: '2',
    /* for aspect ratio */
    position: 'relative',
    width: '14%',

    '&::before': {
      content: "''",
      display: 'block',
      /* for aspect ratio ~1:10 */
      pt: '10%',
    },
  },

  points: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '1024px',
    margin: '0 auto',
    justifyContent: 'space-around',

    '@media(max-width: 767px)': {
      flexDirection: 'column',
      width: '100%',
    },

    h2: {
      fontFamily: 'Space Grotesk, sans-serif',
      textShadow: '0px 4px 3px rgba(0,0,0,0.4), 0px 8px 13px rgba(0,0,0,0.1), 0px 18px 23px rgba(0,0,0,0.1)',
      fontWeight: '700',
      fontSize: '1.75rem',
      letterSpacing: '1px',
      mb: '.5rem',

      '@media(max-width: 767px)': {
        mb: '0',
      },

      '@media(max-width: 400px)': {
        fontSize: '1.3rem',
      },
    },

    p: {
      mt: '0',
      lineHeight: '1.5',
    },

    '.point': {
      width: 'calc(33.33% - 8px)',
      margin: '4px',
      color: '#fffffe',
      borderLeft: '1px solid #fffffe',
      padding: '1rem',

      ':first-of-type': {
        borderLeft: 'none',
      },

      '@media(max-width: 767px)': {
        textAlign: 'left',
        width: '100%',
        borderLeft: 'none',
        padding: '0',
      },

      '.withIcon': {
        paddingLeft: '.5rem',
        display: 'inline',
      },

      '.icon': {
        paddingTop: '.3rem',
        display: 'inline',
        fontSize: '1.5rem',
      },
    },
  },

  heroFooter: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: 'auto',
    padding: '4rem 0 4rem 0',

    a: {
      backgroundColor: '#ff8e3c',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: 'bold',
      letterSpacing: '-0.16px',
      borderRadius: '5px',
      color: '#02073E',
      padding: '6.5px 24px',
      display: 'block',
      textAlign: 'center',
      transition: 'all 500ms ease',

      '@media(max-width: 590px)': {
        width: '100%',
      },

      '&:hover': {
        opacity: 0.8,
        transform: 'translateY(-0.45rem)',
      },
    },
  },
  
};
