import React, { Component } from 'react'
import "slick-carousel/slick/slick.css"
import { Row, Col,Button} from"reactstrap"
import Slider from 'react-slick';
import "bootstrap/dist/css/bootstrap.css"
import  Card  from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  CardActionArea } from '@mui/material';
import use1 from "./Component/Image/as/carosal/user/13.jpg"
import use2 from "./Component/Image/as/carosal/user/14.jpg"
import use3 from "./Component/Image/as/carosal/user/15.jpg"
import { border } from '@mui/system';
export default class FotCardf extends Component{

  
      render() {
        const settings = {
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          slidesToScroll: 1,
        };
        return (
          <div>
      
           
            <div
            className=' group4 container-fluid '
            style={{backgroundColor:"#F1E9FF" ,paddingBottom:"36px",paddingTop:"10px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}  
            >
              <Slider {...settings} className="carous">
           
               <div>
               <Card sx={{ maxWidth: 450 ,maxHeight:280}}>
      <CardActionArea>
        <CardMedia style={{borderRadius:"50%" ,width:"100px" ,marginLeft:"40%"}}
          component="img"
          height="110"
      image={use1} 
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" style={{textAlign:"left" ,fontWeight:"bold"}} component="div">
         <span> Romil Shah</span> - Business Management Expert

          </Typography>
         <Typography  gutterBottom  style={{ fontSize:"10px"}} >
         I have worked with various online certifications providers, but since I joined HackerHac as a contributor, I started understanding how much pain they put on every offered training program as nobody does
         </Typography>
        </CardContent>
      </CardActionArea>
    
    </Card>
               </div>
                  
               <div>
               <Card sx={{ maxWidth: 450 ,maxHeight:280}}>
      <CardActionArea> 
     
        <CardMedia style={{borderRadius:"50%" ,width:"100px" ,marginLeft:"40%" }}
          component="img"
          height="110"
      image={use2} 
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" style={{textAlign:"left" ,fontWeight:"bold"}} component="div">
         <span>Satish Pandey</span> - Data Science Expert
          </Typography>
         <Typography  gutterBottom  style={{ fontSize:"10px"}} >
         I am a Data Science Expert, HackerHac enabled me to uplift my skills in other advanced technologies, and I am delighted to be associated with HackerHac.
         </Typography>
        </CardContent>
      </CardActionArea>
    
    </Card>
               </div>
               <div>
               <Card sx={{ maxWidth: 450 ,maxHeight:280}}>
      <CardActionArea>
        <CardMedia style={{borderRadius:"50%" ,width:"100px" ,marginLeft:"40%"}}
          component="img"
          height="110"
      image={use3} 
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" style={{textAlign:"left" ,fontWeight:"bold"}} component="div">
          <span>Preeti Sharma</span> - Content Marketing Expert
          </Typography>
         <Typography  gutterBottom  style={{ fontSize:"10px"}} >
         My simple advise to individuals aspiring for a career in content marketing must think twice of joining any other online certification, because trust me HackerHac could be a game changer for your career.
         </Typography>
        </CardContent>
      </CardActionArea>
    
    </Card>
               </div>
          
              </Slider>
            </div>
          </div>
         
      
        );
      }
    }

    

