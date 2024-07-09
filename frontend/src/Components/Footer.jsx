import { Box, Button, ButtonGroup, Container, Divider, IconButton, List, ListItem, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { SiStylelint } from "react-icons/si";
import { FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";


function Footer() {
  return (
    <Container sx={{ bgcolor: 'black', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', mx: 0, mt: 5, width: '100vw' }} maxWidth={'100vw'}>

      <Container sx={{ px: { xs: 6, md: 4 }, display: 'flex', flexDirection: 'row', justifyContent: { md: 'space-between', xs: 'center' }, pt: 7, pb: 7, flexWrap: 'wrap' }} maxWidth={'200px'} >
        <Stack maxWidth={400} gap={2} >
          <SiStylelint fontSize={30} />
          <Typography fontSize={20} fontFamily={'Space Grotesk'}>
            get 10% off*
          </Typography>
          <Typography fontFamily={'Space Grotesk'} fontSize={12}>
            Your first pair of mahabis slippers when you sign up to receive emails.
          </Typography>

          {/* <InputBase color='white' sx={{ bgcolor : 'black'}} placeholder='Enter your email'/> */}
          <Box display={'flex'} justifyContent={'row'}>

            <TextField
              type='text'
              placeholder='Enter your email'
              size='small'

              sx={{
                color: 'white',
                border: '2px solid white',
                bgcolor: 'black',
                fontFamily: 'Space Grotesk',
                my: 1,
                '& .MuiInputBase-input::placeholder': {
                  color: 'white',
                  opacity: 1,
                  fontSize: "15px"
                }
              }}
            >



            </TextField>
            <Button sx={{ my: 1, borderRadius: 0, color: 'black', bgcolor: 'white', whiteSpace: 'nowrap' }} >
              Sign up
            </Button>
          </Box>

          <Typography fontFamily={'Space Grotesk'} fontSize={12}>

            by signing up to our newsletter you are agreeing to our privacy policy
            please note: only new subscribers and customers will receive an email
          </Typography>
          <ButtonGroup color='white' sx={{ marginLeft: -1, marginTop: 1 }}>
            <IconButton sx={{ marginLeft: 0 }}>
              <FaInstagram color='white' />
            </IconButton>
            <IconButton sx={{ marginLeft: 0 }}>
              <FaXTwitter color='white' />
            </IconButton>
            <IconButton sx={{ marginLeft: 0 }}>
              <FaFacebookSquare color='white' />
            </IconButton>
            <IconButton sx={{ marginLeft: 0 }}>
              <FaPinterest color='white' />
            </IconButton>
          </ButtonGroup>
        </Stack>
        <Divider orientation='vertical' variant='middle' sx={{ color: 'white', opacity: { xs: '0', md: 1 }, border: '1px solid white' }} flexItem />
        <Box display={'flex'} flexDirection={'row'} fontFamily={'Space Grotesk'} fontSize={12}>
          <Stack display={'flex'}>
            <List dense={true}>
              <ListItem>Help</ListItem>
              <ListItem>Contact us</ListItem>
              <ListItem>About us</ListItem>
            </List>
          </Stack>
          

        </Box>
      </Container >
      <Typography textAlign={'center'} sx={{ py: 5, color: 'whitesmoke', opacity: 0.8 }}>© all rights reserved ECA FOOTWEAR 21 LTD 2024</Typography>

    </Container>

  )
}

export default Footer

