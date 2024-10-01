import React from 'react';
import { Box, Container, Typography, TextField, Button, Grid, Paper } from '@mui/material';

const Contact = () => {
  return (
    <Box component="section" sx={{ position: 'relative', color: "#990000" }}>
      <Box sx={{ position: 'absolute', inset: 0 }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.918590374798!2d77.6070671108039!3d13.104343687170058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1900702a528f%3A0x205e7fd7e129d60f!2sCanopy%20Crest%2C%20Kogilu%20Main%20Rd%2C%20Maruthi%20Nagar%2C%20Kogilu%2C%20Bengaluru%2C%20Karnataka%20560064!5e0!3m2!1sen!2sin!4v1714158668102!5m2!1sen!2sin"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="map"
        ></iframe>
      </Box>

      <Container sx={{ position: 'relative', zIndex: 10, py: 6 }}>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={6}>
            <Paper elevation={6} sx={{ p: 4, borderRadius: 2 }}>
              <Typography variant="h5" component="h2" color="#990000" gutterBottom>
                Feedback
              </Typography>
              <Typography variant="body2" color="#990000" paragraph>
                Post-ironic portland shabby chic echo park, banjo fashion axe.
              </Typography>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                margin="normal"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                fullWidth
                label="Message"
                name="message"
                margin="normal"
                variant="outlined"
                multiline
                rows={4}
                InputLabelProps={{ shrink: true }}
              />
              <Button
                variant="contained"
                color='error'
                fullWidth
                sx={{ mt: 2 }}
              >
                Submit
              </Button>
              <Typography variant="caption" display="block" sx={{ mt: 3 }}>
                Chicharrones blog helvetica normcore iceland tousled brook viral artisan.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
