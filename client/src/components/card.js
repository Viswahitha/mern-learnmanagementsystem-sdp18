import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';
import { CardActions } from '@mui/material';

export default function BasicCard() {
  const navigate = useNavigate()
  return (<div>
    <Card sx={{ width: 900 }}>
      <div>
        <Typography level="title-lg">MSWD</Typography>
        <Typography level="body-sm">Even sem 2023-2024</Typography>
        
      </div>
      
      <CardContent orientation="horizontal">
        
      <div>
          <Typography level="body-xs">Task:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            Preclass Assignment - 4
          </Typography>
        </div><br/>
        <div>
          <Typography level="body-xs">Due:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            12-03-2024
          </Typography>
        </div>
        <div><br></br></div>
        <div>
        <CardActions sx={{ ml: 'auto' }}>
       <Link to ="/mern">
        <Button
          variant="solid"
          size="md"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
        >
          
          Go To Course
        </Button>
        </Link>
        </CardActions>
        </div>
       
      </CardContent>
      
    </Card>

    </div>
  );
}
