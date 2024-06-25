import React from 'react';

import Container from '@mui/material/Container';

import { Box, Typography, TextField, Button, FormLabel } from '@mui/material';

import { Link } from 'react-router-dom';


function CreateAccount() {
  return (
    <Container sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Box sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        width: '100%',
        maxWidth: 700,

      }}
      >
        <Typography component="h1" variant="h6" align='center' sx={{
          marginBottom: 4
        }}>
          Create Account
        </Typography>
        <FormLabel htmlFor='first-name' sx={{ fontSize : '0.875rem' , mb:1}} >
          First Name
        </FormLabel>
        <TextField id='first-name' size='small' required/>
        <FormLabel htmlFor='last-name' sx={{ fontSize : '0.875rem' , mb:1 , mt:2}} >
          Last Name
        </FormLabel>
        <TextField id='last-name' size='small'/>
        <FormLabel htmlFor='email' sx={{ fontSize : '0.875rem' , mb:1 , mt:2}} >
          Email
        </FormLabel>
        <TextField id='email' size='small' type='email' required/>
        <FormLabel htmlFor='pass' sx={{ fontSize : '0.875rem' , mb:1 , mt:2}} >
          Password
        </FormLabel>
        <TextField id='pass' size='small' type='password' required/>
        <FormLabel htmlFor='rpass' sx={{ fontSize : '0.875rem' , mb:1 , mt:2}} >
          Confirm-password
        </FormLabel>
        <TextField id='rpass' size='small' type='password' required/>
        
        <Button variant='contained' color='primary' fullWidth sx={{ mt:3}}>
          Create Account
        </Button>
        <Typography variant='h6' sx={{ fontSize : '0.8rem' , mt:1}} align='center' >
          Already have Account ? <Link to='/account/login'>Sign In</Link>
        </Typography>
      </Box>
    </Container>
  );
}

export default CreateAccount;
