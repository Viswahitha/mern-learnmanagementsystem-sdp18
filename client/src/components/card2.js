import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import { Link } from 'react-router-dom';
export default function BasicCard() {
  return (
    <Card sx={{ width: 900 }}>
      <div>
        <Typography level="title-lg">DAA</Typography>
        <Typography level="body-sm">Even sem 2023-2024</Typography>
        
      </div>
      
      <CardContent orientation="horizontal">
      <div>
          <Typography level="body-xs">Task:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            Home Assignment - 3
          </Typography>
        </div><br/>
        <div>
          <Typography level="body-xs">Due:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            15-03-2024
          </Typography>
        </div>
        <br></br>
        <div>
       <Link to="/dbms">
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
        </div>
        
      </CardContent>
    </Card>
  );
}
