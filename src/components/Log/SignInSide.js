import * as React from 'react';
import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
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

const SignInCard = () => {
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

          {/* Right Side: Sign-in Form */}
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
                  backgroundColor: 'white', // Changed background color to white
                  color: 'black', // Changed text color to black for visibility
                }}
              >
                <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold' }}>
                  Welcome
                </Typography>
                <Typography component="h2" variant="h6" sx={{ fontWeight: 'light', mb: 3 }}>
                  Sign In
                </Typography>

                <Box component="form" sx={{ mt: 3 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Your email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    sx={{ mb: 2 }}
                    InputLabelProps={{ style: { color: 'black' } }} // Black input label
                    InputProps={{
                      style: { color: 'black' }, // Black input text
                    }}
                  />

                  {/* Password with hide/unhide toggle */}
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    autoComplete="current-password"
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

                  <FormControlLabel
                    control={<Checkbox color="default" />}
                    label="Remember me"
                    sx={{ mb: 2, color: 'black' }} // Black checkbox label
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 3,
                      mb: 2,
                      backgroundColor: '#990000', // Changed to #990000
                      color: 'white', // Changed text color to white
                      '&:hover': { backgroundColor: '#cc0000' }, // Slightly lighter hover effect
                    }}
                  >
                    Sign In
                  </Button>

                  {/* Buttons for Google and Facebook Sign In */}
                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<GoogleIcon />}
                    sx={{ mt: 1, mb: 1, color: 'black', borderColor: 'black' }} // Black color for Google button
                  >
                    Sign in with Google
                  </Button>
                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<FacebookIcon />}
                    sx={{ mb: 2, color: 'black', borderColor: 'black' }} // Black color for Facebook button
                  >
                    Sign in with Facebook
                  </Button>

                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2" sx={{ color: 'black' }}>
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="body2"
                        sx={{ display: 'inline', color: 'black', mr: 1 }}
                      >
                        Don't have an account?
                      </Typography>
                      {/* Clickable 'Create Account' link */}
                      <Link href="#" variant="body2" sx={{ color: 'black', fontWeight: 'bold' }}>
                        Create Account
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

export default SignInCard;
