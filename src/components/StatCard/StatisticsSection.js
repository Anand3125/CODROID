import React from 'react';
import { Container, Typography, Grid, Box, SvgIcon } from '@mui/material';
import { AirportShuttle, Group, EmojiEvents, AddIcCall } from '@mui/icons-material';

const StatisticsSection = () => {
  return (
    <section>
      <Container sx={{ py: 6 }}>
        <Box textAlign="center" mb={6}>
          <Typography variant="h4" component="h1" gutterBottom color="text.primary">
          
EVARA- Bringing joy to your doorstep with free delivery and 24/7 support!
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '600px', margin: 'auto' }}>
            At EVARA, we offer free delivery on all orders, ensuring your gifts reach loved ones effortlessly. 
            We provide 24/7 support across major cities, delivering joy at any time. With a vast user base, 
            trust us to bring happiness to your doorstep!
          </Typography>
        </Box>

        {/* Grid container for all items */}
        <Grid container spacing={4} justifyContent="center">
          
          {/* Free Delivery */}
          <Grid item xs={12} sm={6} md={3}>
            <Box p={3} textAlign="center">
              <SvgIcon component={AirportShuttle} sx={{ fontSize: 48, color: 'pink.500', mb: 2 }} />
              <Typography variant="h6" color="text.primary">
                Free Delivery
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Explore our website, everything you order ships within 24 hours
              </Typography>
            </Box>
          </Grid>

          {/* Users */}
          <Grid item xs={12} sm={6} md={3}>
            <Box p={3} textAlign="center">
              <SvgIcon component={Group} sx={{ fontSize: 48, color: 'pink.500', mb: 2 }} />
              <Typography variant="h6" color="text.primary">
                10.3K
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We have more than thousands<br/>Happy Users
              </Typography>
            </Box>
          </Grid>

          {/* Money Back Guarantee */}
          <Grid item xs={12} sm={6} md={3}>
            <Box p={3} textAlign="center">
              <SvgIcon component={EmojiEvents} sx={{ fontSize: 48, color: 'pink.500', mb: 2 }} />
              <Typography variant="h6" color="text.primary">
                100% Money Back 
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Don't worry, we guarantee that your money is safe with us.
              </Typography>
            </Box>
          </Grid>

          {/* 24×7 Support */}
          <Grid item xs={12} sm={6} md={3}>
            <Box p={3} textAlign="center">
              <SvgIcon component={AddIcCall} sx={{ fontSize: 48, color: 'pink.500', mb: 2 }} />
              <Typography variant="h6" color="text.primary">
                24×7 Support
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We're here whenever you need us.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default StatisticsSection;
