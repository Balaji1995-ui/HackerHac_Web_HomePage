import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import "./Image/Home.css";
import "slick-carousel/slick/slick.css"
import Slider from 'react-slick';

import banner from "./Image/banner/banner-1.jpg"
import banner1 from "./Image/banner/company_logo.png"
import "bootstrap/dist/css/bootstrap.css"
import { Typography } from "@mui/material";
import { Row, Col,Button} from"reactstrap"
export default class RecipeReviewCard extends React.Component {
    render(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 600,
            slidesToShow: 2,
            slidesToScroll: 1,
          };
  return (
    <Slider {...settings}>
    
        <div>
        
 
    <Card sx={{ maxWidth: 335 ,maxHeight:550 }} style={{backgroundColor:"white" ,paddingRight:"7px"}}>
      <CardHeader 
        avatar={
         
            <span style={{ color:"black",paddingleft:'12px', fontSize:"18px" ,height:"32px" }}><img style={{backgroundColor:"white" }} width="10%" src={banner1}></img> Amazon Inc.</span>
     
        }
      
      
      />
      <CardMedia
      style={{borderRadius:"0%"}}
        component="img"
        height="194"
        image={banner}
        alt="Paella dish"
      />
      <Typography>
        <p style={{color:"#838384", fontSize:"14px" ,backgroundColor:"#0000004D"}}>Hiring
      <span  style={{color:"#838384", fontSize:"14px",marginLeft:"190px" }}><i class="fas fa-user-tie mr-5"> 12,915 </i></span>
      </p>
      </Typography>
      <Typography className="flex">
        <h4>ROUND 1</h4>
        <p>ENDS IN</p>
        <Row className="container-fluid">
            <Col sm={1}>
            </Col>
            <Col sm={3} >
        <box className="box"><h5><span>12 <br/><span>DAYS</span></span></h5></box>
        </Col>
        <Col sm={3}>
        <box className="box"><h5><span>22 <br/><span>HR</span></span></h5></box>
        </Col>
        <Col sm={4}>
        <box className="box"><h5><span>3 <br/><span>MINUTES</span></span></h5></box>
        </Col>
        <Col sm={1}>
            </Col>
     
        </Row>
      </Typography>
      <div className="btn">
      <Button >
        START NOW
      </Button>
      </div>
 </Card>
 </div>
 <div>
  
    <Card sx={{ maxWidth: 325 }} style={{backgroundColor:"white"}}>
      <CardHeader 
        avatar={
         
            <span style={{ color:"black",paddingleft:'12px', fontSize:"18px" ,height:"32px" }}><img style={{backgroundColor:"white" }} width="10%" src={banner1}></img> Amazon Inc.</span>
     
        }
      
      
      />
      <CardMedia
      style={{borderRadius:"0%"}}
        component="img"
        height="194"
        image={banner}
        alt="Paella dish"
      />
      <Typography>
        <p style={{color:"#838384", fontSize:"14px" ,backgroundColor:"#0000004D"}}>Hiring
      <span  style={{color:"#838384", fontSize:"14px",marginLeft:"190px" }}><i class="fas fa-user-tie mr-5"> 12,915 </i></span>
      </p>
      </Typography>
      <Typography className="flex">
        <h4>Testing Challenge</h4>
        <p>ENDS IN</p>
        <Row className="container-fluid">
            <Col sm={1}>
            </Col>
            <Col sm={3} >
        <box className="box"><h5><span>73<br/><span>DAYS</span></span></h5></box>
        </Col>
        <Col sm={3}>
        <box className="box"><h5><span>21 <br/><span>HR</span></span></h5></box>
        </Col>
        <Col sm={4}>
        <box className="box"><h5><span>43 <br/><span>MINUTES</span></span></h5></box>
        </Col>
        <Col sm={1}>
            </Col>
     
        </Row>
      </Typography>
      <div className="btn">
      <Button >
        START NOW
      </Button>
      </div>
 </Card>


 </div>
 <div>
  
  <Card sx={{ maxWidth: 325 }} style={{backgroundColor:"white"}}>
    <CardHeader 
      avatar={
       
          <span style={{ color:"black",paddingleft:'12px', fontSize:"18px" ,height:"32px" }}><img style={{backgroundColor:"white" }} width="10%" src={banner1}></img> Amazon Inc.</span>
   
      }
    
    
    />
    <CardMedia
    style={{borderRadius:"0%"}}
      component="img"
      height="194"
      image={banner}
      alt="Paella dish"
    />
    <Typography>
      <p style={{color:"#838384", fontSize:"14px" ,backgroundColor:"#0000004D"}}>Hiring
    <span  style={{color:"#838384", fontSize:"14px",marginLeft:"190px" }}><i class="fas fa-user-tie mr-5"> 12,915 </i></span>
    </p>
    </Typography>
    <Typography className="flex">
      <h4>BOT CHALLENGE</h4>
      <p>ENDS IN</p>
      <Row className="container-fluid">
          <Col sm={1}>
          </Col>
          <Col sm={3} >
      <box className="box"><h5><span>1049<br/><span>DAYS</span></span></h5></box>
      </Col>
      <Col sm={3}>
      <box className="box"><h5><span>8 <br/><span>HR</span></span></h5></box>
      </Col>
      <Col sm={4}>
      <box className="box"><h5><span>23 <br/><span>MINUTES</span></span></h5></box>
      </Col>
      <Col sm={1}>
          </Col>
   
      </Row>
    </Typography>
    <div className="btn">
    <Button >
      START NOW
    </Button>
    </div>
</Card>


</div>
<div>
  
  <Card sx={{ maxWidth: 325 }} style={{backgroundColor:"white"}}>
    <CardHeader 
      avatar={
       
          <span style={{ color:"black",paddingleft:'12px', fontSize:"18px" ,height:"32px" }}><img style={{backgroundColor:"white" }} width="10%" src={banner1}></img> Amazon Inc.</span>
   
      }
    
    
    />
    <CardMedia
    style={{borderRadius:"0%"}}
      component="img"
      height="194"
      image={banner}
      alt="Paella dish"
    />
    <Typography>
      <p style={{color:"#838384", fontSize:"14px" ,backgroundColor:"#0000004D"}}>Hiring
    <span  style={{color:"#838384", fontSize:"14px",marginLeft:"190px" }}><i class="fas fa-user-tie mr-5"> 12,915 </i></span>
    </p>
    </Typography>
    <Typography className="flex">
      <h4>ANGULAR JS CHALLENGE</h4>
      <p>ENDS IN</p>
      <Row className="container-fluid">
          <Col sm={1}>
          </Col>
          <Col sm={3} >
      <box className="box"><h5><span>1049<br/><span>DAYS</span></span></h5></box>
      </Col>
      <Col sm={3}>
      <box className="box"><h5><span>8 <br/><span>HR</span></span></h5></box>
      </Col>
      <Col sm={4}>
      <box className="box"><h5><span>23 <br/><span>MINUTES</span></span></h5></box>
      </Col>
      <Col sm={1}>
          </Col>
   
      </Row>
    </Typography>
    <div className="btn">
    <Button >
      START NOW
    </Button>
    </div>
</Card>


</div>
 </Slider>

  );
}
}