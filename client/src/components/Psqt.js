import * as React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import  Appbar  from './Appbar';
import axios from 'axios';
export default function BasicCard() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    const fileInput = document.querySelector('input[type="file"]');
    formData.append('file', fileInput.files[0]);
    window.alert(`file submitted successfully`)
    
    // Now you can handle the form data as needed, for example, submit it using Axios
    // Replace the URL below with your actual endpoint
    axios.post('http://your-api-endpoint', formData)
      .then((response) => {
        console.log('File submitted successfully:', response.data);
        // Show a success message
        alert('Submission successful!');
        // Handle any success message or state update here
      })
      .catch((error) => {
        console.error('Error submitting file:', error);
        // Handle any error message or state update here
      });
  };
  
return (
  <div>
    <Appbar />
    <h2>PROBABILITY AND QUEUING THEORY</h2>
    <Card sx={{ maxWidth: 1500 }}>
      <CardActionArea>
        <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <Typography gutterBottom variant="h5" component="div">
              Pre Class Assignment - 1
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Due: 8-02-2024
            </Typography>
            <br />
            <Typography level="body-xs"></Typography>
          </div>
          <div>
            <input type="file" />
            <CardActions>
              <Button size="large" color="primary" onClick={handleSubmit}>
                Submit
              </Button>
            </CardActions>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
    <br></br>
 

 <Card sx={{ maxWidth: 1500 }}>
   <CardActionArea>
     <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
       <div>
         <Typography gutterBottom variant="h5" component="div">
           Pre Class Assignment - 2
         </Typography>
         <Typography variant="body2" color="text.secondary">
           Due: 8-02-2024
         </Typography>
         <br />
         <Typography level="body-xs"></Typography>
       </div>
       <div>
       <input type="file" />
            <CardActions>
              <Button size="large" color="primary" onClick={handleSubmit}>
                Submit
              </Button>
            </CardActions>
       </div>
     </CardContent>
   </CardActionArea>
 </Card>
<br></br>
 <Card sx={{ maxWidth: 1500 }}>
   <CardActionArea>
     <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
       <div>
         <Typography gutterBottom variant="h5" component="div">
           Pre Class Assignment - 3
         </Typography>
         <Typography variant="body2" color="text.secondary">
           Due: 8-02-2024
         </Typography>
         <br />
         <Typography level="body-xs"></Typography>
       </div>
       <div>
       <input type="file" />
            <CardActions>
              <Button size="large" color="primary" onClick={handleSubmit}>
                Submit
              </Button>
            </CardActions>
       </div>
     </CardContent>
   </CardActionArea>
 </Card>
 <br></br>
 <Card sx={{ maxWidth: 1500 }}>
   <CardActionArea>
     <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
       <div>
         <Typography gutterBottom variant="h5" component="div">
           Pre Class Assignment - 4
         </Typography>
         <Typography variant="body2" color="text.secondary">
           Due: 8-02-2024
         </Typography>
         <br />
         <Typography level="body-xs"></Typography>
       </div>
       <div>
       <input type="file" />
            <CardActions>
              <Button size="large" color="primary" onClick={handleSubmit}>
                Submit
              </Button>
            </CardActions>
       </div>
     </CardContent>
   </CardActionArea>
 </Card>

    {/* Other cards */}
  </div>
);
}
