/** @jsx jsx */
import { jsx, Container, Flex, Box } from 'theme-ui';
import { Link } from 'components/link';
import { Link as ScrollLink } from 'react-scroll';
import Logo from 'components/logo';
import { DrawerProvider } from 'contexts/drawer/drawer.provider';
import MobileDrawer from './mobileDrawer';
import menuItems from './header.data';
import logoBald from 'assets/tl-logo-no-text.svg';

export default function Header({ className }) {
  return (
    <DrawerProvider>
      <header sx={styles.header} className={className}>
        <Container sx={styles.container}>
          <Box sx={styles.logoContainer}>
            <Logo image={logoBald} />
          </Box>

          <Flex as="nav" sx={styles.nav}>
            {menuItems.map(({ path, label }, i) => (
              <ScrollLink
                activeClass="active"
                sx={styles.nav.navLink}
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                key={i}
              >
                {label}
              </ScrollLink>
            ))}
          </Flex>

          <ScrollLink
            to="contact"
            ml={2}
            sx={styles.headerBtn}
            variant="buttons.primary"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
          >
            Contact
          </ScrollLink>

          <MobileDrawer />
        </Container>
      </header>
    </DrawerProvider>
  );
}

const styles = {
  headerBtn: {
    backgroundColor: '#ff8e3c',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    letterSpacing: '-0.16px',
    borderRadius: '5px',
    color: '#02073E',
    padding: '6.5px 24px',
    display: ['none', null, null, null, 'inline-block'],
    ml: ['0', null, null, 'auto', '0'],
    mr: ['0', null, null, '20px', '0'],
    transition: 'all 500ms ease',

    '&:hover': {
      transform: 'translateY(-0.45rem)',
    },
    
  },
  header: {
    color: 'text_white',
    fontWeight: 'normal',
    py: '25px',
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.4s ease',

    '&.sticky': {
      backgroundColor: 'background',
      color: '#232946',
      py: '15px',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
    },
    '&.unSticky': {
      backgroundColor: 'transparent',
      color: '#fffffe',
      pt: '15px',

      '@media(max-width: 991px)': {

        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' viewBox='0 0 150 150' width='150' height='150' opacity='1'%3E%3Cdefs%3E%3Cfilter id='nnnoise-filter' x='-20%25' y='-20%25' width='140%25' height='140%25' filterUnits='objectBoundingBox' primitiveUnits='userSpaceOnUse' color-interpolation-filters='linearRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.184' numOctaves='4' seed='15' stitchTiles='stitch' x='0%25' y='0%25' width='100%25' height='100%25' result='turbulence'%3E%3C/feTurbulence%3E%3CfeSpecularLighting surfaceScale='31' specularConstant='0.7' specularExponent='20' lighting-color='%23ff8e3c' x='0%25' y='0%25' width='100%25' height='100%25' in='turbulence' result='specularLighting'%3E %3CfeDistantLight azimuth='3' elevation='65'%3E%3C/feDistantLight%3E %3C/feSpecularLighting%3E%3C/filter%3E%3C/defs%3E%3Crect width='700' height='700' fill='%23232946'%3E%3C/rect%3E%3Crect width='700' height='700' fill='%23ff8e3c' filter='url(%23nnnoise-filter)'%3E%3C/rect%3E%3C/svg%3E")`,
      },
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    width: [null, null, null, null, null, null, '1390px'],
    '@media screen and (max-width: 960px)': {
      justifyContent: 'space-between',
    },
  },
  logoContainer: {
    width: '4rem',
  },
  nav: {
    mx: 'auto',
    '@media screen and (max-width: 960px)': {
      display: 'none',
    },
    navLink: {
      fontSize: '16px',
      fontWeight: '400',
      cursor: 'pointer',
      lineHeight: '1.2',
      mr: '48px',
      transition: '500ms',
      ':last-child': {
        mr: '0',
      },
      '&:hover, &.active': {
        color: '#ff8e3c',
      },
    },
  },
};
