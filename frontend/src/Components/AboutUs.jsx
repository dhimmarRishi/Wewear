import React from 'react';
import { Container, Typography, Box, Grid, Avatar, Paper, Card, CardContent, CardMedia, Button, Divider } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const teamMembers = [
    {
        name: 'John Doe',
        position: 'CEO',
        image: 'https://via.placeholder.com/150',
        description: 'John is the visionary behind WeWear, with over 20 years of experience in the fashion industry.',
    },
    {
        name: 'Jane Smith',
        position: 'Lead Designer',
        image: 'https://via.placeholder.com/150',
        description: 'Jane leads our design team with a keen eye for detail and a passion for innovative fashion.',
    },
    // Add more team members as needed
];

const AboutUsPage = () => {
    const navigate = useNavigate()
    return (
        <Container maxWidth="lg">
            <Box my={4} textAlign="center">
                <Typography variant="h3" component="h1" gutterBottom>
                    About Us
                </Typography>
                <Typography variant="h6" component="p" paragraph>
                    Welcome to WeWear, your number one source for the latest in fashion. We're dedicated to giving you the very best of clothing and accessories, with a focus on quality, customer service, and uniqueness.
                </Typography>
                <Box mt={3}>
                    <img src="https://i.shgcdn.com/900d7592-659a-414b-8106-03371e7794ed/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="WeWear Fashion" style={{ width: '100%', borderRadius: 8 }} />
                </Box>
            </Box>

            <Box my={4}>
                {/* <Paper elevation={3} sx={{ p: 3 }}> */}
                <Typography variant="h4" component="h2" gutterBottom fontFamily={'Space Grotesk'}>
                    Our Mission
                </Typography>
                <Typography variant="body1" component="p" paragraph fontFamily={'Space Grotesk'}>
                    At WeWear, our mission is to provide stylish, high-quality apparel that inspires confidence and allows our customers to express their individuality. We believe that fashion should be accessible to everyone, and we strive to offer a diverse range of products that cater to all styles and preferences.
                </Typography>
                {/* </Paper> */}
            </Box>
            <Divider />

            <Box my={4}>
                {/* <Paper elevation={3} sx={{ p: 3 }}> */}
                <Typography variant="h4" component="h2" gutterBottom fontFamily={'Space Grotesk'}>
                    Our Values
                </Typography>
                <Typography variant="body1" component="p" paragraph fontFamily={'Space Grotesk'}>
                    We value innovation, sustainability, and customer satisfaction above all else. Our team is committed to staying ahead of the fashion curve while ensuring that our products are made with ethical practices. We believe in building long-term relationships with our customers, and we are dedicated to providing exceptional service and support.
                </Typography>
                {/* </Paper> */}
            </Box>

            <Box my={4}>
                <Typography variant="h4" component="h2" gutterBottom>
                    Meet the Team
                </Typography>
                <Grid container spacing={4}>
                    {teamMembers.map((member, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card sx={{ maxWidth: 345, margin: '0 auto' }}>
                                <CardMedia
                                    component="img"
                                    height="150"
                                    image={member.image}
                                    alt={member.name}
                                />
                                <CardContent>
                                    <Typography variant="h6" component="h3" gutterBottom>
                                        {member.name}
                                    </Typography>
                                    <Typography variant="subtitle1" component="p" gutterBottom>
                                        {member.position}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        {member.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Divider />

            <Box my={4}>
                {/* <Paper elevation={3} sx={{ p: 3 }}> */}
                <Typography variant="h4" component="h2" gutterBottom fontFamily={'Space Grotesk'}>
                    Contact Us
                </Typography>
                <Typography variant="body1" component="p" paragraph fontFamily={'Space Grotesk'}>
                    If you have any questions or comments, please don't hesitate to contact us. Our customer service team is always here to help!
                </Typography>
                <Typography variant="body1" component="p" fontFamily={'Space Grotesk'}>
                    Email: <Link href="mailto:support@wewear.com" color="primary">support@wewear.com</Link>
                </Typography>
                <Typography variant="body1" component="p" fontFamily={'Space Grotesk'}>
                    Phone: <Link href="tel:+1234567890" color="primary">(123) 456-7890</Link>
                </Typography>
                {/* </Paper> */}
            </Box>

            <Box my={4} textAlign="center">
                <Button variant="outlined" size="large" sx={{
                    color: 'black', bgcolor: 'white', borderColor: 'black'
                }} onClick={() => {
                    navigate('/products')
                }}>
                    Shop Now
                </Button>
            </Box>
        </Container>
    );
};

export default AboutUsPage;
