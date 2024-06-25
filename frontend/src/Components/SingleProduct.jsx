
import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ProductContext } from './Context/ProductContext';
import { Box, Button, Container, Divider, FormControlLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import { FaRupeeSign } from "react-icons/fa";

function SingleProduct() {
  const location = useLocation()
  const navigate = useNavigate()
  const { cart , addToCart } = useContext(ProductContext)

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const size = formData.get('size');
    const quantity = formData.get('quantity');
    console.log('Size:', size);
    console.log('Quantity:', quantity);
    ele.size = size;
    ele.quantity = quantity;
    addToCart(ele)
    navigate('/products');
  }

  let ele = location?.state?.ele || location.state;
  console.log(location.state);

  return (
    <>
      {ele == null ? <div>Product Not Found</div> : (
        <Container sx={{ mt: 2, display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Box width={'100%'} sx={{ objectFit: 'contain', overflow: 'hidden', maxWidth: '400px' }}>
            <img src={ele.image} alt={ele.name} style={{ objectFit: 'contain', width: '100%' }} />
          </Box>
          <Box sx={{ m: { md: 8, xs: 2 } }} maxWidth={'500px'}>
            <Typography fontSize={20} fontFamily={'Space Grotesk'}>
              {ele.name}
            </Typography>
            <Typography mt={5} mb={5} fontSize={14} fontFamily={'Space Grotesk'}>
              {ele?.description}
              <Divider sx={{ mt: 1, mb: 1 }} />
              Price: {ele.price} <FaRupeeSign style={{ paddingTop: '2px' }} />
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField type='number' size='small' placeholder='0' name='quantity' required id='quantity' />
              {(ele.name.includes('shoes')) ? (
                <>
                  Size: <TextField type='number' size='small' placeholder='7' name='size' required id='shoeNumber' />
                </>
              ) : (
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="size"
                  defaultValue="XS"
                >
                  <FormControlLabel value="XS" control={<Radio />} label="XS" />
                  <FormControlLabel value="S" control={<Radio />} label="S" />
                  <FormControlLabel value="M" control={<Radio />} label="M" />
                  <FormControlLabel value="L" control={<Radio />} label="L" />
                  <FormControlLabel value="XL" control={<Radio />} label="XL" />
                  <FormControlLabel value="XXL" control={<Radio />} label="XXL" />
                </RadioGroup>
              )}
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

export default SingleProduct;
