import React from 'react';
import { Box, Container, Grid, Typography, TextField, Button, IconButton, InputAdornment } from '@mui/material';
import { Facebook, Twitter, Instagram, Subscriptions, CardGiftcard } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#990000", p: 4, color: 'white' }}>
      {/* Header Section with Gift Icon and Logo */}
      <Container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton href="#!" color='inherit' aria-label="facebook">
            <Facebook sx={{ color: 'white' }} />
          </IconButton>
          <IconButton href="#!" color='inherit' aria-label="twitter">
            <Twitter sx={{ color: 'white' }} />
          </IconButton>
          <IconButton href="#!" color='inherit' aria-label="instagram">
            <Instagram sx={{ color: 'white' }} />
          </IconButton>
          <IconButton href="#!" color='inherit' aria-label="youtube">
            <Subscriptions sx={{ color: 'white' }} />
          </IconButton>
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <CardGiftcard sx={{ color: 'white', mr: 1 }} />
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              fontFamily: 'Comic Neue',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            EVARA
          </Typography>
        </Box>
        
      </Container>

      {/* Newsletter Section */}
      <Container>
        <Typography variant="h5" sx={{ display: 'flex', justifyContent: 'left', mt: 2 }}>Subscribe to our newsletter</Typography>
        <Typography variant="h9" sx={{ display: 'flex', justifyContent: 'left', mt: 2 }}>Get updates on upcoming sales, offers & discounts.</Typography>
        <Box component="form" sx={{ display: 'flex', justifyContent: 'left', mt: 2 }}>
          <TextField
            label="Your email address"
            variant="outlined"
            size="medium"
            sx={{
              bgcolor: 'white',
              borderRadius: '20px',
              width: '100%',
              height: '56px',
              '& .MuiOutlinedInput-root': {
                borderColor: '#990000',
                '&.Mui-focused fieldset': {
                  borderColor: '#990000',
                },
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    variant="contained"
                    size="large"
                    type="submit"
                    sx={{
                      bgcolor: "#990000",
                      color: 'white',
                      borderRadius: '20px',
                      height: '100%',
                      padding: '0 10px',
                      fontSize: '1rem',
                      '&:hover': {
                        bgcolor: '#7a0000',
                      },
                    }}
                  >
                    Subscribe
                  </Button>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Container>

      {/* Text Section */}
      <Container sx={{ mt: 3 }}>
        <Typography variant="body1" sx={{ mb: 4 }}>
        Thank You for Choosing EVARA!-Your Happiness is Our Mission!  </Typography>
      </Container>

      {/* Links Section */}
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ textTransform: 'uppercase', mb: 2, fontSize: '0.9rem' }}>
              Policy Info
            </Typography>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li><a href="#!" style={{ color: 'inherit', textDecoration: 'none' }}>Terms & Conditions</a></li>
              <li><a href="#!" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a></li>
              <li><a href="#!" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Use</a></li>
              <li><a href="#!" style={{ color: 'inherit', textDecoration: 'none' }}>Disclaimer</a></li>
            </ul>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ textTransform: 'uppercase', mb: 2, fontSize: '0.9rem' }}>
              About Us
            </Typography>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li><a href="#!" style={{ color: 'inherit', textDecoration: 'none' }}>Our Team</a></li>
              <li><a href="#!" style={{ color: 'inherit', textDecoration: 'none' }}>Testimonials</a></li>
              <li><a href="#!" style={{ color: 'inherit', textDecoration: 'none' }}>Popular Products</a></li>
              <li><a href="#!" style={{ color: 'inherit', textDecoration: 'none' }}>Upcoming Products</a></li>
            </ul>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ textTransform: 'uppercase', mb: 2, fontSize: '0.9rem' }}>
              Business
            </Typography>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li><a href="#!" style={{ color: 'inherit', textDecoration: 'none' }}>Franchise</a></li>
              <li><a href="#!" style={{ color: 'inherit', textDecoration: 'none' }}>Stores</a></li>
              <li><a href="#!" style={{ color: 'inherit', textDecoration: 'none' }}>Decoration Service</a></li>
              <li><a href="#!" style={{ color: 'inherit', textDecoration: 'none' }}>Gifts</a></li>
            </ul>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ textTransform: 'uppercase', mb: 2, fontSize: '0.9rem' }}>
              FAQs
            </Typography>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li><a href="#!" style={{ color: 'inherit', textDecoration: 'none' }}>General Inquiries</a></li>
              <li><a href="#!" style={{ color: 'inherit', textDecoration: 'none' }}>Shipping & Delivery</a></li>
              <li><a href="#!" style={{ color: 'inherit', textDecoration: 'none' }}>Payments & Pricing</a></li>
              <li><a href="#!" style={{ color: 'inherit', textDecoration: 'none' }}>Products & Services</a></li>
            </ul>
          </Grid>
        </Grid>
      </Container>

      {/* Copyright Section */}
      
      <Box sx={{ bgcolor: 'rgba(0, 0, 0, 0.05)', p: 2, mt: 4 }}>
        <Typography variant="body2" sx={{ color: 'white' }}>
          © 2024 Copyright:
          <a href="https://growwithak.online/" style={{ textDecoration: 'none', fontWeight: 'bold', color: 'white' }}>
            www.evara.com
          </a>
        </Typography>
      </Box>
      
    </Box>
  );
};

export default Footer;
