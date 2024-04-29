import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FAppbar from './facultyAppbar';
import axios from 'axios'; // Import axios for making HTTP requests

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const OutlinedCard = ({ courseName, courseCode, assignmentNumber, dueDate, question }) => {
  const cardContent = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         
          {courseCode}
        </Typography>
        <Typography variant="h5" component="div">
        {courseName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Assignment Number: {assignmentNumber}
        </Typography>
        <Typography variant="body2">
          Due Date: {dueDate}
        </Typography>
        <Typography variant="body2">
          Question:<br/>
          {question}
        </Typography>
      </CardContent>
     
    </React.Fragment>
  );
  return (
    <div>
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">{cardContent}</Card>
      </Box>
    </div>
  );
};

const MyComponent = () => {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    // Fetch assignments data when the component mounts
    axios.get('http://localhost:8081/showassignments?courseCode=${courseCode}')
      .then((response) => {
        setAssignments(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      <FAppbar />
      {assignments.map((assignment, index) => (
        <OutlinedCard
         
          courseName={assignment.courseName}
          courseCode={assignment.courseCode}
          assignmentNumber={assignment.assignmentNumber}
          dueDate={assignment.dueDate}
          question={assignment.question} // You can customize this text if needed
        />
      ))}
    </div>
  );
};

export default MyComponent;
