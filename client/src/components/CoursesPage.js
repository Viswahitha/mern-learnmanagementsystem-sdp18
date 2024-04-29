import React from 'react';
import Appbar from './Appbar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import mernImage from './images/mern.png'
import DaaImage from './images/daaa.png';
import AoopImage from './images/aoop.jpg';
import DbsmImage from './images/dbms.jpg';
import PsqtImage from './images/psqt.jpg';
import Python from './images/python.jpg';
import Mp from './images/maths.jpg';
import DdaiImage from "./images/ddais.jpg";
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';



export default function Courses(){
  const navigate = useNavigate()
    return (
        <div>
          <Appbar />
          <br></br>
          {/* First Row of Cards */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={mernImage}
                title="MSWD"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  MERN STACK WEB DEVELOPMENT
                </Typography>
                <br></br>
                <Typography variant="body2" color="text.secondary">
                  Even Sem 2023-2024
                </Typography>
              </CardContent>

              <CardActions>
              <Link to ="/mern">
                <Button size="small" >Go To Course</Button>          
              </Link>
              </CardActions>

            </Card>
    
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={DaaImage}
                title="DAA"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Design Analysis And Algorithm
                </Typography>
                <br></br>
                <Typography variant="body2" color="text.secondary">
                  Even Sem 2023-2024
                </Typography>
              </CardContent>

              <CardActions>
                <Link to ="/daa">
                <Button size="small">Go To Course</Button>
                </Link>
              </CardActions>
            </Card>
    
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={DbsmImage}
                title="DBMS"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Data Base Management System
                </Typography>
                <br></br>
                <Typography variant="body2" color="text.secondary">
                  Even Sem 2023-2024
                </Typography>
              </CardContent>
              <CardActions>
                <Link to ="/dbms">
                <Button size="small">Go To Course</Button>
                </Link>
              </CardActions>
            </Card>
    
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={Mp}
                title="MP"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Mathematical Programming
                </Typography>
                <br></br>
                <Typography variant="body2" color="text.secondary">
                  Even Sem 2023-2024
                </Typography>
              </CardContent>
              <CardActions>
                <Link to ="/mp">
                <Button size="small">Go To Course</Button>
                </Link>
              </CardActions>
            </Card>
          </div>
    
          {/* Second Row of Cards */}
          <br></br>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={Python}
                title="PFSD"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Python Full Stack Development
                </Typography>
                <br></br>
                <Typography variant="body2" color="text.secondary">
                  Odd Sem 2023-2024
                </Typography>
              </CardContent>
              <CardActions>
                <Link to ="/pfsd">
                <Button size="small">Go To Course</Button>
                </Link>
              </CardActions>
            </Card>
    
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={PsqtImage}
                title="PSQT"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Probability Statics and Queueing Theory
                </Typography>
                <br></br>
                <Typography variant="body2" color="text.secondary">
                  Odd Sem 2023-2024
                </Typography>
              </CardContent>
              <CardActions>
                <Link to ="/psqt">
                <Button size="small">Go To Course</Button>
                </Link>
              </CardActions>
            </Card>
    
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={DdaiImage}
                title="DDAI"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Data Driven Artificial Intelligence
                </Typography>
                <br></br>
                <Typography variant="body2" color="text.secondary">
                  Odd Sem 2023-2024
                </Typography>
              </CardContent>
              <CardActions>
                <Link to ="/ddai">
                <Button size="small">Go To Course</Button>
                </Link>
              </CardActions>
            </Card>
    
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={AoopImage}
                title="AOOP"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Adavanced Object Oriented Programming
                </Typography>
                <br></br>
                <Typography variant="body2" color="text.secondary">
                  Odd Sem 2023-2024
                </Typography>
              </CardContent>
              <CardActions>
                <Link to ="/aoop">
                <Button size="small">Go To Course</Button>
                </Link>
              </CardActions>
            </Card>
          </div>
          </div>
        
      );
    }