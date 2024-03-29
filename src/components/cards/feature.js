/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Image, Heading, Text } from 'theme-ui';

const Feature = ({ data, ...props }) => {
  return (
    <Box sx={styles.feature} {...props}>
      <Box as="figure">
        <Image src={data?.icon} alt={data?.title} />
      </Box>
      <Box>
        <Heading as="h4">{data?.title}</Heading>
        <Text as="p">{data?.description}</Text>
      </Box>
    </Box>
  );
};

export default Feature;

const styles = {
  feature: {
    borderBottom: (t) => [null, null, `1px solid #EDEFF2`, `1px solid #EDEFF2`],
    borderRight: (t) => [null, null, `1px solid #EDEFF2`, `1px solid #EDEFF2`],
    padding: [
      null,
      null,
      '1rem',
      '45px 30px 55px',
      '40px 25px 50px 35px',
      '60px 45px 60px 50px',
    ],
    textAlign: ['center', null, null, null, null, 'left'],
    transition: '0.3s ease 0s',
    '@media only screen and (min-width:576px)': {
      ':hover': {
        backgroundColor: 'white',
        borderColor: 'white',
        boxShadow: '0px 20px 50px rgba(59, 90, 136, 0.05)',
        transform: 'translate(-1px, -1px)',
        cursor: 'help',
      },
    },
    figure: {
      display: 'inline-flex',
      alignItems: 'center',
      minWidth: [70],
      mb: '1rem',
    },
    h4: {
      fontSize: 3,
      fontWeight: 700,
      lineHeight: 1.28,
      color: 'heading',
      marginBottom: 2,
    },
    p: {
      fontSize: [1, null, null, null, 2],
      lineHeight: 1.88,
      color: '#02073E',
    },
    a: {
      mt: [2, null, null, null, 6],
    },
  },
};
