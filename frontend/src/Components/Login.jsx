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
          Login
        </Typography>
        <FormLabel htmlFor='first-name' sx={{ fontSize: '0.875rem', mb: 1 }} >
          Email
        </FormLabel>
        <TextField id='first-name' size='small' type='email' required />
        <FormLabel htmlFor='last-name' sx={{ fontSize: '0.875rem', mb: 1, mt: 2 }} >
          Password
        </FormLabel>
        <TextField id='last-name' size='small' type='password' />
        <Link to='/products'>
          <Button variant='contained' color='primary' fullWidth sx={{ mt: 3 }}>
            Login
          </Button>
        </Link>

        <Typography variant='h6' sx={{ fontSize: '0.8rem', mt: 1 }} align='center' >
          Don't have an Account ? <Link to='/account/register'> Register </Link>
        </Typography>
      </Box>
    </Container>
  );
}

export default CreateAccount;
