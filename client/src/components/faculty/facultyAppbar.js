import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';

export default function ButtonAppBar({role}) {
  const navigate = useNavigate()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* Removed the list icon and "News" text */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {/* Updated the title to "Home" */}
            Coursify
            </Typography>
          {/* Added "Home" and "Dashboard" buttons */}
          

          
            <Link to="/facultyhomepage">
              <Button color="inherit" style={{ color: 'white' }}>
                Home
              </Button>
            </Link>
          

          
          <Link to ="/profile">
          <Button color="inherit" style={{ color: "white" }}
          > About</Button>
          </Link>

          
           
          <Link to ="/signin">
          <Button color="inherit" style={{ color: "white" }}
          > Logout</Button>
          </Link>


          

        </Toolbar>
      </AppBar>
    </Box>
  );
}
