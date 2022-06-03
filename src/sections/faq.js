import React from 'react';
import { Box, Container, Flex, Text, Heading } from 'theme-ui';
import BlockTitle from 'components/block-title';
import Accordion from 'components/accordion/accordion';

const accordionData = [
  {
    isExpanded: true,
    title: 'What tech stack did you use to build this site?',
    contents: (
      <div>
        <p>This site uses Vercel for serverless functions and hosting, Next.js and React for rendering, Emotion for CSS, and Framer Motion and CSS for animations. Checkout out the <a href='https://reactjs.org/' className='buttonLink' target='_blank' rel='noopener noreferrer'>Github repo</a> for more info.</p>

        <p>There are so many options for building websites nowadays, but in my personal opinion I like the balance between speed, developer experience, and static/dynamic rendering that Next.js offers. It allows you to get started on your project much faster than cobbling together dozens of plugins to get your environment set up.</p>

        <p>In terms of CSS-in-JS, I tend to go for a solution like Emotion. Although I like the familiar syntax of Styled Components, I prefer the scoping and naming conventions of Emotion.</p>

        <p>Message me any time to find out more. I love to talk about web technologies!</p>
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'What is so good about Shopify?',
    contents: (
      <div>
        <p>The pandemic pushed many more businesses online, and I think the Shopify platform has the most momentum, name recognition, and long-term potential. It’s an accessible, robust eCommerce platform that offers a lot of features out-of-the-box. </p>

        <p>Shopify also offers the best inventory management experience for users, while the Storefront API offers a great developer experience.</p>

        <p>Shopify's React-based framework called Hydrogen is poised to be an eCommerce game-changer too. There's a lot to like.</p>

      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'What tools and techniques do you use to handle projects?',
    contents: (
      <div>
        <p>I'm a big believer in asynchronous communication when it comes to projects. That's why I like to record video walkthroughs to keep projects moving along. I typically send clients project update videos, which they can watch at their convenience. Then they can comment on the video using timestamps.</p>

        <p>Trello is also a great tool for asynchronous project communication. Everything related to the project is in one place and you can comment on any aspect of the project at any time. </p>
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'Do you build only React and eCommerce websites?',
    contents: (
      <div>
        <p>I like to work on all kinds of web projects!</p>

        <p>In the past I've built plenty of sites in static HTML/CSS/JavaScript and on platforms like WordPress. I try not to confine myself to just one or two solutions. I think each project has an ideal tech stack, and I try to get as close to that ideal solution as possible.</p>

        <p>During the pandemic I realized how much eCommerce was growing, and I saw how quickly Shopify was increasing their market share. That was the rationale behind my recent decision to focus on eCommerce storefronts.</p>
      </div>
    ),
  },
];

const FAQ = () => {
  return (
    <Box sx={styles.box} id='faq' as="section">
      <Container>
        <BlockTitle
          title="More Info About Me"
          text="I have answers."
        />
        <Flex sx={styles.flex}>
          <Box sx={styles.faqWrapper}>
            <Accordion items={accordionData} />
          </Box>
          <Box sx={styles.content}>
            <Heading as="h3">
              Still have a question?
            </Heading>
            <Text as="p">
              Let's talk. Feel free to contact me anytime.
            </Text>
            <Box sx={styles.linkButtonWrapper}>
              <a href='https://reactjs.org/' className='buttonLink' target='_blank' rel='noopener noreferrer'>
                Ask a question
              </a>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default FAQ;

const styles = {
  box: {
    mt: '80px',

    '@media(max-width: 600px)': {
      mt: '75px',
    },
  },

  flex: {
    flexWrap: 'wrap',
    flexDirection: ['column', null, null, null, null, 'row-reverse'],
    pb: ['70px', null, null, null, '90px', null, '130px'],
  },
  content: {
    flex: ['0 0 100%', null, null, null, '0 0 33.333%'],
    maxWidth: ['100%', null, null, '450px', '100%'],
    mx: ['auto', null, null, null, '0'],
    mb: ['0px', null, null, null, '0'],
    textAlign: ['center', null, null, null, null, 'left'],
    mt: ['40px', null, null, null, null, '0'],
    h3: {
      fontSize: ['23px', null, null, null, '24px'],
      lineHeight: [1.5, null, null, null, 1.67],
      color: 'black',
      fontWeight: 700,
      letterSpacing: '-1.5px',
      mt: '-5px',
      pr: ['0', null, null, null, null, '30px'],
    },
    p: {
      fontSize: '16px',
      lineHeight: 1.87,
      color: '#343D48',
      opacity: 0.7,
      mt: '10px',
      pr: ['0', null, null, null, null, '80px'],
    },
  },
  linkButtonWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    mt: '1rem',

    '@media(min-width: 1200px)': {
      justifyContent: 'flex-start',
    },

    '@media(max-width: 590px)': {
      flexDirection: 'column',
    },

    '.buttonLink': {
      backgroundColor: '#232946',
      border: '1px solid #020718',
      color: '#fffffe',
      textDecoration: 'none',
      display: 'inline-block',
      verticalAlign: 'middle',
      borderRadius: '5px',
      fontSize: '16px',
      fontWeight: 700,
      p: '6.5px 19px',
      letterSpacing: '-0.16px',
      transition: 'all 500ms ease',
      fontFamily: 'Raleway, sans-serif', 
      zIndex: '100',

      '@media(max-width: 590px)': {
        mb: '.5rem',
        fontSize: '14px',
        textAlign: 'center',
      },
      '&:hover': {
        opacity: 0.8,
        transform: 'translateY(-0.45rem)',
      },
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
  askButton: {
    display: 'inline-block',
    verticalAlign: 'middle',
    backgroundColor: '#02073E',
    color: '#fff',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 700,
    p: '6.5px 19px',
    letterSpacing: '-0.16px',
    mt: '25px',
    transition: 'all 500ms ease',
    '&:hover': {
      opacity: 0.8,
      transform: 'translateY(-0.45rem)',
    },
  },
  faqWrapper: {
    flex: ['0 0 100%', null, null, null, '0 0 66.666%'],
  },
};
