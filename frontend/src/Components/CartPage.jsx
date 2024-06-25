import React, { useContext } from 'react';
import { ProductContext } from './Context/ProductContext';
import { Container, Typography, Box, Stack, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function CartPage() {
    const { cart, removeFromCart } = useContext(ProductContext);
    const navigate = useNavigate();
    let totalPrice = 0;

    return (
        <Container sx={{ textAlign: 'center', mt: 3, fontFamily: 'Space Grotesk', border: '1px solid gray', padding: { xs: 0 } }}>
            {cart.length === 0 ? (
                <Typography>The Cart is Empty</Typography>
            ) : (
                <Stack gap={3} padding={5}>
                    {cart.map((product, index) => (
                        <Stack key={index} direction={'row'} justifyContent={'space-between'}>
                            <Box display={'flex'}>
                                <Box maxWidth={'100px'} overflow={'hidden'}>
                                    <img src={product.image} alt={product.name} style={{ objectFit: 'contain', width: '100%' }} />
                                </Box>
                                <Box display={'flex'} ml={3} flexDirection={'column'} textAlign={'left'}>
                                    <Typography fontWeight="bold">{product.name}</Typography>
                                    <Typography mt={2}>{product.price} X {product.quantity}</Typography>
                                    <Typography>{product.size}</Typography>
                                    <Box mt={2}>
                                        <Button color='primary' onClick={() => navigate(`../../products/${product.id}`, { state: product })}>Edit</Button>
                                        <Button color='error' onClick={() => removeFromCart(product.id)}>Delete</Button>
                                    </Box>
                                </Box>
                            </Box>
                            <Box>
                                <Typography>{Number.parseFloat(product.price.replace(',', '')) * Number.parseFloat(product.quantity)}</Typography>
                                {totalPrice += Number.parseFloat(product.price.replace(',', '')) * Number.parseFloat(product.quantity)}
                            </Box>
                        </Stack>
                    ))}
                    <Box mt={2}>
                        <Typography variant="h6">Total Price: {totalPrice.toFixed(2)}</Typography>
                    </Box>
                    <Button variant='contained' color='success'>Check Out</Button>
                </Stack>
            )}

        </Container>
    );
}

export default CartPage;
