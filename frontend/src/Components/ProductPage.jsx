import { Box, Button, Container, Drawer, List, ListItemAvatar, ListItemButton, ListItemText, Paper, Stack, Typography, colors, styled } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { ResProductCard } from './publicComp/ResProductCard/ResProductCard';
import { ProductContext } from './Context/ProductContext';
import { blue } from '@mui/material/colors';
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';


const ColorBadge = styled('button')(({ theme, color }) => (
  {
    backgroundColor: color,
    width: '15px',
    height: '15px',
    borderRadius: 10,
    border: '2px solid black',
    cursor: 'pointer',

  }
))
function ProductPage() {

  const { products } = useContext(ProductContext);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filter, setFilter] = useState({
    type: '',
    color: ''
  });
  const [filterOpen, setFilterOpen] = useState(false);
  const navigate = useNavigate();

  const toggleFilterOpen = (newFilterOpen) => {
    setFilterOpen(newFilterOpen)
  }
  const StyledFilterItem = styled('span')(({ theme }) => ({
    marginTop: 2,
    padding: 1,
    fontFamily: 'Space Grotesk'
  }));
  // console.log(products)


  const filterProducts = () => {
    if (products.length === 0) {
      console.log("No Products");
      return;
    }

    const temp = products.filter((product) => {
      return product?.name?.toLowerCase().includes(filter?.type?.toLowerCase())
        && product?.color?.toLowerCase().includes(filter?.color?.toLowerCase());
    });
    setFilteredProducts(temp);
    console.log(filter);
  };

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  useEffect(() => {
    filterProducts();
  }, [filter, products]);

  const component = (
    <>

      <Typography mb={1} ml={1} fontFamily={'Space Grotesk'} fontWeight={'bold'}>
        Type : {filter.type}
      </Typography>
      <List component='nav'>
        <ListItemButton sx={{
          border: '1px solid transperant'
        }} onClick={(e) => {
          setFilter(prevFilter => ({ ...prevFilter, type: 'shirt' }));
        }}>
          <StyledFilterItem>Shirts</StyledFilterItem>
        </ListItemButton>
        <ListItemButton onClick={() => {
          setFilter(prevFilter => ({ ...prevFilter, type: 'gown' }));
        }}>
          <StyledFilterItem>Gown</StyledFilterItem>
        </ListItemButton>
        <ListItemButton onClick={() => {
          setFilter(prevFilter => ({ ...prevFilter, type: 'shoe' }));
        }}>
          <StyledFilterItem>Shoes</StyledFilterItem>
        </ListItemButton>
        <ListItemButton onClick={() => {
          setFilter(prevFilter => ({ ...prevFilter, type: 'kurta' }));
        }}>
          <StyledFilterItem>Kurta</StyledFilterItem>
        </ListItemButton>
        <ListItemButton onClick={() => {
          setFilter(prevFilter => ({ ...prevFilter, type: 'lehenga' }));
        }}>
          <StyledFilterItem>Lehenga</StyledFilterItem>
        </ListItemButton>
        <ListItemButton onClick={() => {
          setFilter(prevFilter => ({ ...prevFilter, type: '' }));
        }}>
          <StyledFilterItem>Reset</StyledFilterItem>
        </ListItemButton>
      </List>
      <Typography mb={1} ml={1} fontFamily={'Space Grotesk'} fontWeight={'bold'}>
        Color : {filter.color}
      </Typography>
      <List component='nav' sx={{ ml: 2, display: 'flex', flexDirection: 'row', gap: 1 }}  >
        {/* <Button type='button' onClick={() => {
        co
      }} > */}
        <ColorBadge color={'red'} onClick={() => {
          setFilter(prevFilter => ({ ...prevFilter, color: 'red' }))
        }} ></ColorBadge>
        <ColorBadge color={'yellow'} onClick={() => {
          setFilter(prevFilter => ({ ...prevFilter, color: 'yellow' }))
        }} ></ColorBadge>
        <ColorBadge color={'blue'} onClick={() => {
          setFilter(prevFilter => ({ ...prevFilter, color: 'blue' }))
        }} ></ColorBadge>
        <ColorBadge color={'white'} onClick={() => {
          setFilter(prevFilter => ({ ...prevFilter, color: 'white' }))
        }} ></ColorBadge>
        <ColorBadge color={'black'} onClick={() => {
          setFilter(prevFilter => ({ ...prevFilter, color: 'black' }))
        }} ></ColorBadge>

        <AiOutlineClose onClick={() => {
          setFilter(prevFilter => ({ ...prevFilter, color: '' }))
        }} />

      </List>
    </>

  )

  return (
    (products.length === 0) ? <Container>Loading</Container> : (

      <Stack direction={'row'}>
        <Stack direction={'column'} sx={{ width: 160, display: { xs: 'none', md: 'flex' } }} ml={1} mt={2} >
          {component}
        </Stack>
        <Button sx={{
          display: { xs: 'flex', md: 'none' },
          position: 'absolute',
          bottom: 10, right: 10,
          bgcolor: 'white', border: '1px solid black', padding: 1, fontSize: 14, fontFamily: 'Space Grotesk', textAlign: 'center',
          color: 'black',
          fontWeight: 'light',
          cursor: 'pointer',
          zIndex: 100,
          ":hover": {
            bgcolor: 'white'
          }

        }} onClick={() => {
          toggleFilterOpen(true)
        }} >
          Filter
        </Button>
        <Drawer open={filterOpen} onClose={() => {
          toggleFilterOpen(false)
        }}  >
          <Stack mt={5} m={3}>
            {component}
          </Stack>

        </Drawer>

        <Container maxWidth={'100%'} sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          padding: 0,
          gap: 2,
          maxHeight: '80vh',
          overflow: 'scroll'
        }}>
          {filteredProducts.map((ele, index) => (
            <Box>
              <ResProductCard product={ele} key={ele.name + index} onClick={() => navigate(`/products/${ele?.id}`, { state: { ele } })} />
            </Box>

          ))}
        </Container>
      </Stack>
    )
  );
}

export default ProductPage;



