import React from 'react';
import { Box, Grid, Typography, Avatar, Button } from '@mui/material';

const About = () => {
  return (
    <>
      <Box
        sx={{
          py: 6,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: 700,
            borderRadius: 2,
            overflow: 'hidden',
          }}
        >
          <img
            src="https://media.istockphoto.com/id/1308052781/photo/hand-of-businessman-holding-mobile-smartphone-with-icon-customer-support-concept-copy-space.jpg?s=1024x1024&w=is&k=20&c=zS1HXFbi-nR8qj_5ql053j_BL4XIFAjPUJ4M34rflWY="
            alt="About Us"
            style={{ width: '100%', height: 'auto' }}
          />
        </Box>

        <Grid container spacing={2} mt={4}>
          <Grid item xs={12} md={4} textAlign="center">
            <Avatar
              sx={{
                width: 80,
                height: 80,
                bgcolor: 'grey.200',
                margin: 'auto',
              }}
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10"
                viewBox="0 0 24 24"
                style={{ width: '40px', height: '40px' }}
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </Avatar>
            <Typography variant="h6" component="h2" mt={2}>
              Phoebe Caulfield
            </Typography>
            <Box
              sx={{
                width: 40,
                height: 4,
                bgcolor: 'primary.main',
                margin: '10px auto',
              }}
            ></Box>
            <Typography variant="body1" color="text.secondary">
              Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.
            </Typography>
          </Grid>

          <Grid item xs={12} md={8}>
            <Typography variant="body1" color="text.secondary" paragraph>
              Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.
            </Typography>
            <Button variant="contained" color="#990000" endIcon={<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>}>
              Learn More
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default About;
