import React, { useContext, useEffect, useState } from 'react'
import { Box, Button, Stack, Typography } from "@mui/material";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { ProductContext } from './Context/ProductContext';
import {HomeProductCard} from './publicComp/HomeProductCard/HomeProductCard'
import { useNavigate } from 'react-router-dom';

function Home() {

  const { products, loading, err } = useContext(ProductContext)
  const [value, setValue] = React.useState('1');
  const navigate = useNavigate()


  console.log(products)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack display={'flex'} justifyContent={'center'} alignItems={'center'} width={'100vw'} >
      <Box sx={{
        backgroundImage: 'url("https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        width: '100vw',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '70vh',
        display: 'flex',
        justifyContent: 'space-around',
        overflow: 'hidden',
        position: 'relative',
        py: 3
      }}>
        <Box fontFamily={'Space Grotesk'} sx={{
          position: { sx: 'flex', md: 'absolute' },
          bottom: 50,
          right: 50,
          textAlign: 'center',
          justifyContent: 'center',
          maxWidth: '500px',
          color: 'white',
          fontWeight: 'bold',
          mt: { xs: 15, md: 0 },

        }}>
          <Typography variant='h5'>
            Meet the Ultimate Summer Wear
          </Typography>
          <Button sx={{
            backgroundColor: 'white',
            color: 'black',
            mt: 2,
            py: 1,
            borderRadius: 0,
            px: { xs: 1, md: 9 }
          }}>
            Shop Summer Collection
          </Button>
        </Box>

      </Box>
      <Box
        mt={5}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        textAlign={'center'}
        maxWidth={'600px'}
        fontFamily={'Space Grotesk'}>
        <Typography variant='h4'>
          WeWear
        </Typography>
        <Typography variant='p' mt={2}>
          Revolutionising footwear through comfort technology and innovative designs.
          Experience limitless comfort in our range of hand-made slippers, sandals, and all-day footwear.
        </Typography>
      </Box>
      {loading ? <h1>Loading</h1> : <Box sx={{ width: '100%', typography: 'body1', mx: { sx: 0, md: 2 } }} mt={6}  >
        <TabContext value={value} >
          <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'center', m: 0, p: 0 }}>
            <TabList onChange={handleChange} aria-label="lab API" >
              <Tab label="Best Sellers" value="1" />
              <Tab label="New In" value="2" />
              <Tab label="Outlet" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1" sx={{ m: 0, p: 1 }} style={{ transitionDuration: '300ms' }} >
            <Box display={'flex'} sx={{ justifyContent: { xs: 'flex-start', md: 'center' }, overflow : 'scroll'}} gap={4} overflow={'scroll'}>
              {/* {console.log(homeProducts)} */}
              <HomeProductCard product={products[1]}  onClick = {() => navigate(`/products/${products[1].id}` ,{state :  products[1]})}/>
              <HomeProductCard product={products[10]} onClick = {() => navigate(`/products/${products[10].id}`,{state :  products[10]})}/>
              <HomeProductCard product={products[32]} onClick = {() => navigate(`/products/${products[32].id}`,{state :  products[32]})}/>
 
            </Box> 
          </TabPanel> 
          <TabPanel value="2" sx={{ m: 0, p: 1 }} > 
            <Box display={'flex'} sx={{ justifyContent: { xs: 'flex-start', md: 'center' } }} gap={4} overflow={'scroll'}>

              <HomeProductCard product={products[67]} onClick = {() => navigate(`/products/${products[67].id}`, { state : products[67]} )}/>
              <HomeProductCard product={products[34]} onClick = {() => navigate(`/products/${products[34].id}`, { state : products[34]} )}/>
              <HomeProductCard product={products[20]} onClick = {() => navigate(`/products/${products[20].id}`, { state : products[20]} )}/>
 
            </Box> 
          </TabPanel>
          <TabPanel value="3" sx={{ m: 0, p: 1 }} >
            <Box display={'flex'} sx={{ justifyContent: { xs: 'flex-start', md: 'center' } }} gap={4} overflow={'scroll'}>

              <HomeProductCard product={products[141]} onClick = {() => navigate(`/products/${products[141].id}`, { state : products[141]} )}/>
              <HomeProductCard product={products[121]} onClick = {() => navigate(`/products/${products[121].id}`, { state : products[121]} )}/>
              <HomeProductCard product={products[113]} onClick = {() => navigate(`/products/${products[113].id}`, { state : products[113]} )}/>

            </Box>
          </TabPanel>

        </TabContext>
      </Box>}

      <Box sx={{ m: { xs: 1, md: 5 } }}>
        <img src='https://cdn.shopify.com/s/files/1/0238/5795/files/homepage_desktop_banner_29_1.jpg?v=1716886230' width={'100%'} />
      </Box>
      {/* <img src='https://static.zara.net/assets/public/50ce/556f/42a94ab0a274/df337273edbf/04416021620-a1/04416021620-a1.jpg?ts=1709736268402' /> */}
    </Stack>

  )
}

export default Home