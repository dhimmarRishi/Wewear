import React, { useContext } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { ProductContext } from './Context/ProductContext';
import { Box, Button, Container, Divider, TextField, Typography } from '@mui/material';
import { FaRupeeSign } from "react-icons/fa";

function SingleProduct() {
  const location = useLocation()
  const { products } = useContext(ProductContext)
  const { ele } = location?.state;
  // console.log(location.state)
  return (
    <>
      {ele == null ? <div>Product Not Found</div> : (
        <Container sx={{ mt: 2, display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Box width={'100%'} sx={{ objectFit: 'contain', overflow: 'hidden', maxWidth: '400px' }}>
            <img src={ele.image} style={{ objectFit: 'contain', width: '100%' }} />
          </Box>
          <Box sx={{ m: { md: 8, xs: 2 } }} maxWidth={'500px'}>
            <Typography fontSize={20} fontFamily={'Space Grotesk'} >
              {ele.name}
            </Typography>
            <Typography mt={5} mb={5} fontSize={14} fontFamily={'Space Grotesk'}>
              {ele?.description}
              <Divider sx={{
                mt: 1, mb: 1
              }} />
              Price  : {ele.price}  <FaRupeeSign style={{ paddingTop: '2px' }} />
            </Typography>
            <form>


              <TextField type='number' size='small' placeholder='0' name='quantity' required />
              <br />
              <Button type='submit' sx={{
                mt: 2,
                color: 'white',
                bgcolor: 'black',
                width: '100%',
                ":hover": {
                  bgcolor: 'black',
                  opacity: 0.5
                }
              }}>Add To Cart</Button>
            </form>

          </Box>

        </Container>
      )}
    </>
  )
}

export default SingleProduct