import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './images/background2.png'; // Adjust the path to your actual image

const defaultTheme = createTheme();

export default function SignIn({ store }) {
  const [errorMessage, setErrorMessage] = useState('');
  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    axios.post('http://localhost:8081/check', {
      email: data.get('email'),
      pass: data.get('password'),
    }).then((response) => {
      console.log(response.data);
      if (response.data !== 'Incorrect Password' && response.data !== 'User not found') {
        if (response.data === 'admin') {
          navigate('/adminhomepage');
        } else if (response.data === 'faculty') {
          navigate('/facultyhomepage');
        } else {
          navigate('/home');
        }
      } else {
        setErrorMessage('Incorrect email or password. Please try again.');
        console.log('Incorrect data');
      }
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          
             <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{
                mt: 1,
                backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
                borderRadius: '10px',
                padding: '20px',
                width: '100%',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Light shadow for depth
              }}
            >
            <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Typography color="error" variant="body2" align="center">
              {errorMessage}
            </Typography>
           
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {'Don\'t have an account? Sign Up'}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
