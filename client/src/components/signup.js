import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './images/background2.png'; // Assuming background.jpg is your image file

const defaultTheme = createTheme();

export default function SignUp() {
  let navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get('name'),
      role: data.get('role'),
      email: data.get('email'),
      password: data.get('password'),
    });
    axios.post('http://localhost:8081/insert', {
      name: data.get('name'),
      role: data.get('role'),
      email: data.get('email'),
      password: data.get('password'),
    }).then((response) => {
      console.log(response.data);
      navigate('/signin');
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
        <CssBaseline />
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent white background
              borderRadius: '10px',
              padding: '20px',
              width: '100%',
              maxWidth: '400px', // Limit width to 400px
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Light shadow for depth
            }}
          >
            <Box
              sx={{
                marginTop: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  sx={{ mb: 2 }}
                />
                <Select
                  label="Role"
                  name="role"
                  id="role"
                  defaultValue={0}
                  displayEmpty
                  fullWidth
                  sx={{ mb: 2 }}
                >
                  <MenuItem value={0}>Select User</MenuItem>
                  <MenuItem value={2}>Student</MenuItem>
                  <MenuItem value={3}>Faculty</MenuItem>
                </Select>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  sx={{ mb: 2 }}
                />
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  sx={{ mb: 2 }}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mb: 2 }}
                >
                  Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href="/signin" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
