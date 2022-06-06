import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Box, Button, Input, Textarea } from 'theme-ui';

import { AiFillPhone } from "react-icons/ai";
import { GrMail } from 'react-icons/gr';

const ContactForm = () => {
   const [state, handleSubmit] = useForm("mqknjawr");
   if (state.succeeded) {
       return <p>Thanks for joining!</p>;
   }
   return (

      <Box as="form" sx={styles.form} onSubmit={handleSubmit}>
          <Box as="label" htmlFor="name" variant="styles.srOnly">
            First Name
          </Box>
          <Input
            placeholder="Enter your first name"
            type="text"
            id="name"
            name="name"
            sx={styles.input}
          />

          <Box as="label" htmlFor="email" variant="styles.srOnly">
            Email
          </Box>
          <Input
            placeholder="Enter your email address"
            type="email"
            id="email"
            name="email"
            sx={styles.input}
          />

         <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
         />

          <Box as="label" htmlFor="message" variant="styles.srOnly">
            Your message
          </Box>
          <Textarea
            id="message"
            name="message"
            sx={styles.textarea}
            placeholder="Your message here"
          >
          </Textarea>
         <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
         />

          <button
            type="submit"
            disabled={state.submitting}
            className='buttonLink'>
            <div className='icon'><GrMail /></div>
            <div className='withIcon'>Send Email</div>
          </button>

          <Box as='div' sx={styles.orDivider}><span>OR</span></Box>

          <a href='https://calendly.com/mindfulwebpartnership/15min' className='buttonLinkSchedule' target='_blank' rel='noopener noreferrer'>   
            <div className='icon'><AiFillPhone /></div>
            <div className='withIcon'>Schedule A Call</div>
          </a>

        </Box>

   );
 }

 export default ContactForm;

 const styles = {

   form: {
      width: ['100%'],
      maxWidth: ['555px'],
      mx: ['auto'],
      display: ['flex'],
      flexDirection: 'column',
      mt: ['30px', null, null, null, '60px'],
      
      '.buttonLink': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        fontFamily: 'Raleway',
        fontSize: '1rem',
        width: '100%',
        textDecoration: 'none',
        backgroundColor: '#fffffe',
        border: '1px solid #020718',
        color: '#232946',
        padding: '1rem',
        borderRadius: '4px',
        fontWeight: '700',
        transition: '500ms',
        cursor: 'pointer',
  
        '.withIcon': {
          paddingLeft: '.5rem',
        },
        '.icon': {
          paddingTop: '.3rem',
        },

        '&:hover': {
          transform: 'translateY(-0.45rem)',
        },
      },
      '.buttonLinkSchedule': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        fontFamily: 'Raleway',
        fontSize: '1rem',
        width: '100%',
        textDecoration: 'none',
        backgroundColor: '#fffffe',
        border: '1px solid #020718',
        color: '#232946',
        padding: '.75rem',
        borderRadius: '4px',
        fontWeight: '700',
        transition: '500ms',
        cursor: 'pointer',
  
        '.withIcon': {
          paddingLeft: '.5rem',
        },
        '.icon': {
          paddingTop: '.3rem',
        },

        '&:hover': {
          transform: 'translateY(-0.45rem)',
        },
      },
  
      a: {
        textDecoration: 'none',
        width: '100%',
  
      },
    },
    input: {
      width: ['100%'],
      maxWidth: '100%',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: 'rgba(255,255,255, .08)',
      outline: 'none',
      color: 'rgba(255,255,255, .8)',
      fontSize: '16px',
      pl: ['0px', null, null, '30px'],
      height: ['50px', null, null, '60px'],
      mr: ['0px', null, null, '15px'],
      mb: '1rem',
      textAlign: ['center', null, null, 'left'],
    },
    input: {
      width: ['100%'],
      maxWidth: '100%',
      borderRadius: '5px',
      border: '1px solid #020718',
      backgroundColor: 'rgba(255,255,255, .08)',
      outline: 'none',
      color: 'rgba(255,255,255, .8)',
      fontSize: '16px',
      pl: ['10px', null, null, '30px'],
      height: ['50px', null, null, '60px'],
      mr: ['0px', null, null, '15px'],
      mb: '1rem',
      textAlign: 'left',
      '::placeholder': {
        color: '#fffffe',
        fontSize: '1rem',
        fontFamily: 'Raleway', 
      }
    },
    textarea: {
      backgroundColor: '#fff',
      borderRadius: '5px',
      fontWeight: '500',
      fontSize: ['18px'],
      color: '#020718',
      letterSpacing: '-0.5px',
      outline: 'none',
      pl: ['10px', null, null, '30px'],
      height: '10rem',
      minHeight: ['50px', null, null, '60px'],
      width: ['100%', null, null, 'auto'],
      mt: ['10px', null, null, '0'],
      mb: '1rem',
      mx: ['auto', null, null, '0'],
      '::placeholder': {
        color: '#333',
        fontSize: '1rem',
        fontFamily: 'Raleway', 
      }
    },
    button: {
      backgroundColor: '#fffffe',
      border: '1px solid #020718',
      color: '#232946',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      fontFamily: 'Raleway', 
      width: '100%',
  
      '.withIcon': {
        paddingLeft: '.5rem',
      },
      '.icon': {
        paddingTop: '.3rem',
      },
    },
  
    orDivider: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      fontStyle: 'italic',
      fontSize: '1.25em',
      margin: '0 1em',
      padding: '1rem',
  
        span: {
          padding: '0 1rem',
          color: '#fffffe',
        },
  
        '&:before': {
          content: '""',
          height: '0.115em',
          backgroundColor: '#232946',
          flex: '1',
          margin: '0 0.25em 0 0',
        },
        '&:after': {
          content: '""',
          height: '0.115em',
          backgroundColor: '#232946',
          flex: '1',
          margin: '0 0.25em 0 0',
        }
    },

 };