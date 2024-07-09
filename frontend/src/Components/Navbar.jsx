import React, { useContext, useState } from 'react'
import { SiStylelint } from "react-icons/si";
import AppBar from "@mui/material/AppBar"
import { Badge, Box, Button, Divider, Drawer, Icon, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, TextField, Typography, styled } from '@mui/material'
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { ProductContext } from './Context/ProductContext';



function Navbar() {
  const [open, setOpen] = useState(false);
  const { cart } = useContext(ProductContext)

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen)
  }
  const MenuItems = ['Products', 'About us'];

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem key={'title'} disablePadding>
          <ListItemButton>
            <ListItemIcon color='black' sx={{ fontSize: '1.5rem', color: 'black' }}>
              <SiStylelint />
            </ListItemIcon>
            <ListItemText primary={"WeWear"} sx={{ fontWeight: 'bold' }} />
          </ListItemButton>
        </ListItem>
        <Divider />
        {MenuItems.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton key={text + 'button'}>
              <Link to={`/${text}`} key={text + 'link'}>
                <ListItemText primary={text} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )
  const MenuButton = styled(ListItem)(() => ({
    backgroundColor: 'white',
    color: 'black',
    transitionDuration: '0.3s',
    fontWeight: 'light',
    cursor: 'pointer',
    marginLeft: '3',
    fontFamily: 'Space Grotesk',
    whiteSpace: 'nowrap',
    "&:hover": {
      backgroundColor: 'white',
      fontWeight: 'bold'
    },

  }))



  return (
    <div>
      <Drawer open={open} onClose={toggleDrawer(false)} sx={{ mt: 10 }}>
        {DrawerList}
      </Drawer>
      <AppBar position='static' sx={{ bgcolor: 'white', color: 'black', boxShadow: 'none', paddingY: 3, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <IconButton sx={{
          display: {
            sx: 'flex', md: 'none'
          },
          ml: 2,
          color: 'black'
        }}
          onClick={toggleDrawer(true)}>
          <GiHamburgerMenu />
        </IconButton>
        <Link to={'/home'} style={{ textDecoration: 'none', color: 'black' }}>
          <Box display={'flex'} fontSize={'2rem'} pl={2}>
            <IconButton sx={{ mr: 1, color: 'black' }} >

              <SiStylelint />

            </IconButton>
            <Typography
              variant='h6'
              fontFamily={'Space Grotesk'}
              ml={2}
              mt={1}
              fontSize={'1rem'}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
              pt={0.2}
              letterSpacing={2}
              sx={{ display: { xs: 'none', md: 'block' } }}>WeWear</Typography>
          </Box>
        </Link>

        <Box flexDirection={'row'} sx={{
          display: {
            xs: 'none', md: 'flex'
          }
        }}>

          <Box display={'flex'} marginRight={5}>
            {MenuItems.map((item) => {
              return (
                <Link to={`/${item.split(' ').join('').toLowerCase()}`} style={{ textDecoration: 'none' }}>
                  <MenuButton key={item}>{item}</MenuButton>
                </Link>

              )
            })}

          </Box>
          <Box display={'flex'} mr={2}>
            <Link to='/account/login'>
              <IconButton type='button' >
                <CiUser color='black' />
              </IconButton>
            </Link>

            <TextField placeholder='Search' size='small' variant='standard' sx={
              { mt: '7px' }
            } />
            <IconButton type='button'>
              <CiSearch color='black' />
            </IconButton>
            <IconButton>
              <Link to={'/account/cart'}>

                <Badge color="error" badgeContent={cart.length}  >
                  <HiOutlineShoppingBag color='black' />
                </Badge>
              </Link>
            </IconButton>
          </Box>
        </Box>
        <Box sx={{
          display: { xs: 'flex', md: 'none' }
        }}>

          <IconButton >
            <CiSearch />

          </IconButton>
          <Link to='/account/cart' >
            <IconButton sx={{
              mr: 2,
              color: 'black'
            }}>
              <HiOutlineShoppingBag />
            </IconButton>
          </Link>

        </Box>



        {/* <SiStylelint /> */}
      </AppBar>
      <Box bgcolor={'#f7f7f7'} color={'black'} alignItems={'center'} textAlign={'center'} py={1}>
        free shipping to india on all orders above ₹9,447.00
      </Box>
    </div>
  )
}

export default Navbar;