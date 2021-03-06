import React, { useContext } from 'react';
import { Box } from 'theme-ui';
import { Scrollbars } from 'react-custom-scrollbars';
import Drawer from 'components/drawer';
import { DrawerContext } from 'contexts/drawer/drawer.context';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { Link as ScrollLink } from 'react-scroll';
import menuItems from './header.data';
import Logo from 'components/logo';
import logoBald from 'assets/tl-logo-no-text.svg';

const MobileDrawer = () => {
  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleHandler = React.useCallback(() => {
    dispatch({
      type: 'TOGGLE',
    });
  }, [dispatch]);

  return (
    <Drawer
      width="320px"
      drawerHandler={
        <Box sx={styles.handler}>
          <IoMdMenu size="22px" />
        </Box>
      }
      open={state.isOpen}
      toggleHandler={toggleHandler}
      closeButton={<IoMdClose size="24px" cursor='pointer' color="#02073E" />}
      drawerStyle={styles.drawer}
      closeBtnStyle={styles.close}
    >
      <Scrollbars autoHide>
        <Box sx={styles.content}>

          <Box sx={styles.logoContainer}>
            <Logo image={logoBald} />
          </Box>

          <Box sx={styles.menu}>
            {menuItems.map(({ path, label }, i) => (
              <ScrollLink
                activeClass="active"
                to={path}
                spy={true}
                smooth={true}
                onClick={toggleHandler}
                offset={-100}
                duration={500}
                key={i}
              >
                {label}
              </ScrollLink>
            ))}
          </Box>

          <Box sx={styles.menuFooter}>
            
              <ScrollLink
                to="contact"
                variant="buttons.primary"
                onClick={toggleHandler}
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
              >
                Contact
              </ScrollLink>

          </Box>
        </Box>
      </Scrollbars>
    </Drawer>
  );
};

const styles = {
  handler: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
    width: '26px',
    cursor: 'pointer',

    '@media screen and (min-width: 960px)': {
      display: 'none',
    },
  },

  drawer: {
    width: '100%',
    height: '100%',
    background: '#fff',
  },

  close: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '40px',
    right: '30px',
    zIndex: '1',
  },

  logoContainer: {
    width: '3rem',
  },

  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    pt: '30px',
    pb: '40px',
    px: '30px',
  },

  menu: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '30px',

    a: {
      fontSize: '1.35rem',
      fontWeight: '400',
      color: 'black',
      py: '5px',
      cursor: 'pointer',
    },
  },

  menuFooter: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: 'auto',

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
      width: '100%',
      textAlign: 'center',
    },
  },

  button: {
    fontSize: '15px',
    fw: '700',
    height: '48px',
    borderRadius: '3px',
    cursor: 'pointer',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    py: '0',
    backgroundColor: 'black',
    color: '#fff',
  },
};

export default MobileDrawer;
