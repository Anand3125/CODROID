import * as React from 'react';
import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  Grid,
  Paper,
  Container,
  IconButton,
  InputAdornment,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material'; // For eye icon
import GoogleIcon from '@mui/icons-material/Google'; // Google Icon
import FacebookIcon from '@mui/icons-material/Facebook'; // Facebook Icon

const SignUpCard = () => {
  const [showPassword, setShowPassword] = useState(false);

  // Toggle password visibility
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="md">
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {/* Left Side: Image */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
              }}
              alt="Welcome"
              src="https://images.pexels.com/photos/19815865/pexels-photo-19815865/free-photo-of-burning-candles-on-a-wooden-tray-with-pine-branches.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </Grid>

          {/* Right Side: Sign-up Form */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: 4,
              }}
            >
              <Paper
                elevation={6}
                sx={{
                  padding: 4,
                  borderRadius: 2,
                  backgroundColor: 'white',
                  color: 'black',
                }}
              >
                <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold' }}>
                  Create Account
                </Typography>
                <Typography component="h2" variant="h6" sx={{ fontWeight: 'light', mb: 3 }}>
                  Sign Up
                </Typography>

                <Box component="form" sx={{ mt: 3 }}>
                  {/* Full Name Input */}
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="fullname"
                    label="Full Name"
                    name="fullname"
                    autoComplete="fullname"
                    autoFocus
                    sx={{ mb: 2 }}
                    InputLabelProps={{ style: { color: 'black' } }}
                    InputProps={{
                      style: { color: 'black' },
                    }}
                  />

                  {/* Mobile No. Input */}
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="mobile"
                    label="Mobile No."
                    name="mobile"
                    autoComplete="tel"
                    sx={{ mb: 2 }}
                    InputLabelProps={{ style: { color: 'black' } }}
                    InputProps={{
                      style: { color: 'black' },
                    }}
                  />

                  {/* Email Input */}
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Your email"
                    name="email"
                    autoComplete="email"
                    sx={{ mb: 2 }}
                    InputLabelProps={{ style: { color: 'black' } }}
                    InputProps={{
                      style: { color: 'black' },
                    }}
                  />

                  {/* Password Input with hide/unhide toggle */}
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    autoComplete="new-password"
                    sx={{ mb: 2 }}
                    InputLabelProps={{ style: { color: 'black' } }}
                    InputProps={{
                      style: { color: 'black' },
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                            style={{ color: 'black' }}
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 3,
                      mb: 2,
                      backgroundColor: '#990000',
                      color: 'white',
                      '&:hover': { backgroundColor: '#cc0000' },
                    }}
                  >
                    Sign Up
                  </Button>

                  {/* Buttons for Google and Facebook Sign In */}
                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<GoogleIcon />}
                    sx={{ mt: 1, mb: 1, color: 'black', borderColor: 'black' }}
                  >
                    Sign up with Google
                  </Button>
                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<FacebookIcon />}
                    sx={{ mb: 2, color: 'black', borderColor: 'black' }}
                  >
                    Sign up with Facebook
                  </Button>

                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2" sx={{ color: 'black' }}>
                        Already have an account? Sign In
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default SignUpCard;
