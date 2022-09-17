import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import page from"../src/Component/Image/as/01.jpg"
import page2 from "../src/Component/Image/as/02.jpg"
import"../src/Component/Image/Home.css";
import "bootstrap/dist/css/bootstrap.css";
import  Card  from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';

import {Row ,Col} from "reactstrap"
function Tabled() {
  return (
<div>

<p  className='tabsd'>
  <span><i style={{color:"red"}} class="fas fa-layer-group mr-5"></i> {''}3000+ Courses</span><span><i class="fas fa-user-graduate mr-5" style={{color:"red"}}></i>10M+ Enrolled</span><span>
                            <i class="fas fa-star" style={{color:"#f2e016"}}></i><i class="fas fa-star" style={{color:"#f2e016"}}></i><i class="fas fa-star" style={{color:"#f2e016"}}></i><i class="fas fa-star" style={{color:"#f2e016"}}></i><i class="fas fa-star-half-alt" style={{color:"#f2e016"}}></i>
                            4.67 Overall Ratings
                        </span>
                    </p>
        <Tabs
       
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3 container-fluid"

    >
 
                  
      <Tab eventKey="TRENDING" title="TRENDING">

      {/* <Card style={{ width: '18rem' }}>
      <CardImg className=''  src={page} />
      <CardBody>
        <CardTitle><p className='tabsd'>The Complete JavaScript Course 2019: Build Real Projects!</p></CardTitle>
        <span class="stars" style={{color:"#f2e016" }}>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="far fa-star"></i>
                                                <span class="star-count">4.2 (12,851)</span>
                                            </span>
                                            <h6><span class="mr-2">₹</span>9,999</h6>
      
      </CardBody>
    </Card> */}
    <Row  >
      <Col>
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia style={{borderRadius:"0" }}
          component="img"
          height="120"
          image={page}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="div">
          The Complete JavaScript Course 2019: Build Real Projects!
          </Typography>
         <Typography>
         <span class="stars"  className='tabsd'>
                                                <i style={{color:"#f2e016" ,fontSize:"15px"}} class="fas fa-star"></i>
                                                <i style={{color:"#f2e016" ,fontSize:"15px"}} class="fas fa-star"></i>
                                                <i  style={{color:"#f2e016" ,fontSize:"15px"}}class="fas fa-star"></i>
                                                <i  style={{color:"#f2e016" ,fontSize:"15px"}}class="fas fa-star"></i>
                                                <i  style={{color:"#f2e016" ,fontSize:"15px"}}class="far fa-star"></i>
                                                <span class="star-count">4.2 (12,851)</span>
                                            </span>
                                            <h4 style={{color:"black" ,paddingRight:"100px", fontWeight:"bolder"}}><span class="ml-2" ></span >₹ 9,999</h4>
         </Typography>
        </CardContent>
      </CardActionArea>
    
    </Card>
    </Col>
    <Col>
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia style={{borderRadius:"0" }}
          component="img"
          height="120"
          image={page}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="div">
          The Complete JavaScript Course 2019: Build Real Projects!
          </Typography>
         <Typography>
         <span class="stars"  className='tabsd'>
                                                <i style={{color:"#f2e016" ,fontSize:"15px"}} class="fas fa-star"></i>
                                                <i style={{color:"#f2e016" ,fontSize:"15px"}} class="fas fa-star"></i>
                                                <i  style={{color:"#f2e016" ,fontSize:"15px"}}class="fas fa-star"></i>
                                                <i  style={{color:"#f2e016" ,fontSize:"15px"}}class="fas fa-star"></i>
                                                <i  style={{color:"#f2e016" ,fontSize:"15px"}}class="far fa-star"></i>
                                                <span class="star-count">4.2 (12,851)</span>
                                            </span>
                                            <h4 style={{color:"black" ,paddingRight:"100px", fontWeight:"bolder"}}><span class="ml-2" ></span >₹ 9,999</h4>
         </Typography>
        </CardContent>
      </CardActionArea>
    
    </Card>
    </Col>
    <Col>
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia style={{borderRadius:"0" }}
          component="img"
          height="120"
          image={page}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="div">
          The Complete JavaScript Course 2019: Build Real Projects!
          </Typography>
         <Typography>
         <span class="stars"  className='tabsd'>
                                                <i style={{color:"#f2e016" ,fontSize:"15px"}} class="fas fa-star"></i>
                                                <i style={{color:"#f2e016" ,fontSize:"15px"}} class="fas fa-star"></i>
                                                <i  style={{color:"#f2e016" ,fontSize:"15px"}}class="fas fa-star"></i>
                                                <i  style={{color:"#f2e016" ,fontSize:"15px"}}class="fas fa-star"></i>
                                                <i  style={{color:"#f2e016" ,fontSize:"15px"}}class="far fa-star"></i>
                                                <span class="star-count">4.2 (12,851)</span>
                                            </span>
                                            <h4 style={{color:"black" ,paddingRight:"100px", fontWeight:"bolder"}}><span class="ml-2" ></span >₹ 9,999</h4>
         </Typography>
        </CardContent>
      </CardActionArea>
    
    </Card>
    </Col>
    <Col>
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia style={{borderRadius:"0" }}
          component="img"
          height="120"
          image={page}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="div">
          The Complete JavaScript Course 2019: Build Real Projects!
          </Typography>
         <Typography>
         <span class="stars"  className='tabsd'>
                                                <i style={{color:"#f2e016" ,fontSize:"15px"}} class="fas fa-star"></i>
                                                <i style={{color:"#f2e016" ,fontSize:"15px"}} class="fas fa-star"></i>
                                                <i  style={{color:"#f2e016" ,fontSize:"15px"}}class="fas fa-star"></i>
                                                <i  style={{color:"#f2e016" ,fontSize:"15px"}}class="fas fa-star"></i>
                                                <i  style={{color:"#f2e016" ,fontSize:"15px"}}class="far fa-star"></i>
                                                <span class="star-count">4.2 (12,851)</span>
                                            </span>
                                            <h4 style={{color:"black" ,paddingRight:"100px", fontWeight:"bolder"}}><span class="ml-2" ></span >₹ 9,999</h4>
         </Typography>
        </CardContent>
      </CardActionArea>
    
    </Card>
    </Col>
    <Col>
    <Card sx={{ maxWidth: 247 }}>
      <CardActionArea>
        <CardMedia style={{borderRadius:"0" }}
          component="img"
          height="120"
          image={page}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="div">
          The Complete JavaScript Course 2019: Build Real Projects!
          </Typography>
         <Typography>
         <span class="stars"  className='tabsd'>
                                                <i style={{color:"#f2e016" ,fontSize:"15px"}} class="fas fa-star"></i>
                                                <i style={{color:"#f2e016" ,fontSize:"15px"}} class="fas fa-star"></i>
                                                <i  style={{color:"#f2e016" ,fontSize:"15px"}}class="fas fa-star"></i>
                                                <i  style={{color:"#f2e016" ,fontSize:"15px"}}class="fas fa-star"></i>
                                                <i  style={{color:"#f2e016" ,fontSize:"15px"}}class="far fa-star"></i>
                                                <span class="star-count">4.2 (12,851)</span>
                                            </span>
                                            <h4 style={{color:"black" ,paddingRight:"100px", fontWeight:"bolder"}}><span class="ml-2" ></span >₹ 9,999</h4>
         </Typography>
        </CardContent>
      </CardActionArea>
    
    </Card>
    </Col>
    <Row>
      <Col>
      <div className='viewbtn'> 
      <Button variant="contained" color="primary">
View All Courses
</Button>
</div>
</Col>
    </Row>
    </Row>
      </Tab>
      <Tab eventKey="ONSALE" title="ON SALE">
      <Row  >
      <Col>
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia style={{borderRadius:"0" }}
          component="img"
          height="120"
          image={page2}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="div">
          The Complete JavaScript Course 2019: Build Real Projects!
          </Typography>
         <Typography>
         <span class="stars"  className='tabsd'>
                                                <i style={{color:"#f2e016" ,fontSize:"15px"}} class="fas fa-star"></i>
                                                <i style={{color:"#f2e016" ,fontSize:"15px"}} class="fas fa-star"></i>
                                                <i  style={{color:"#f2e016" ,fontSize:"15px"}}class="fas fa-star"></i>
                                                <i  style={{color:"#f2e016" ,fontSize:"15px"}}class="fas fa-star"></i>
                                                <i  style={{color:"#f2e016" ,fontSize:"15px"}}class="far fa-star"></i>
                                                <span class="star-count">4.2 (12,851)</span>
                                            </span>
                                            <h4 style={{color:"black" ,paddingRight:"100px", fontWeight:"bolder"}}><span class="ml-2" ></span >₹ 9,999</h4>
         </Typography>
        </CardContent>
      </CardActionArea>
    
    </Card>
    </Col>
    <Col>
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia style={{borderRadius:"0" }}
          component="img"
          height="120"
          image={page2}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="div">
          The Complete JavaScript Course 2019: Build Real Projects!
          </Typography>
         <Typography>
         <span class="stars"  className='tabsd'>
                                                <i style={{color:"#f2e016" ,fontSize:"15px"}} class="fas fa-star"></i>
                                                <i style={{color:"#f2e016" ,fontSize:"15px"}} class="fas fa-star"></i>
                                                <i  style={{color:"#f2e016" ,fontSize:"15px"}}class="fas fa-star"></i>
                                                <i  style={{color:"#f2e016" ,fontSize:"15px"}}class="fas fa-star"></i>
                                                <i  style={{color:"#f2e016" ,fontSize:"15px"}}class="far fa-star"></i>
                                                <span class="star-count">4.2 (12,851)</span>
                                            </span>
                                            <h4 style={{color:"black" ,paddingRight:"100px", fontWeight:"bolder"}}><span class="ml-2" ></span >₹ 9,999</h4>
         </Typography>
        </CardContent>
      </CardActionArea>
    
    </Card>
    </Col>
    <Col>
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia style={{borderRadius:"0" }}
          component="img"
          height="120"
          image={page2}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="div">
          The Complete JavaScript Course 2019: Build Real Projects!
          </Typography>
         <Typography>
         <span class="stars"  className='tabsd'>
                                                <i style={{color:"#f2e016" ,fontSize:"15px"}} class="fas fa-star"></i>
                                                <i style={{color:"#f2e016" ,fontSize:"15px"}} class="fas fa-star"></i>
                                                <i  style={{color:"#f2e016" ,fontSize:"15px"}}class="fas fa-star"></i>
                                                <i  style={{color:"#f2e016" ,fontSize:"15px"}}class="fas fa-star"></i>
                                                <i  style={{color:"#f2e016" ,fontSize:"15px"}}class="far fa-star"></i>
                                                <span class="star-count">4.2 (12,851)</span>
                                            </span>
                                            <h4 style={{color:"black" ,paddingRight:"100px", fontWeight:"bolder"}}><span class="ml-2" ></span >₹ 9,999</h4>
         </Typography>
        </CardContent>
      </CardActionArea>
    
    </Card>
    </Col>
    <Col>
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia style={{borderRadius:"0" }}
          component="img"
          height="120"
          image={page2}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="div">
          The Complete JavaScript Course 2019: Build Real Projects!
          </Typography>
         <Typography>
         <span class="stars"  className='tabsd'>
                                                <i style={{color:"#f2e016" ,fontSize:"15px"}} class="fas fa-star"></i>
                                                <i style={{color:"#f2e016" ,fontSize:"15px"}} class="fas fa-star"></i>
                                                <i  style={{color:"#f2e016" ,fontSize:"15px"}}class="fas fa-star"></i>
                                                <i  style={{color:"#f2e016" ,fontSize:"15px"}}class="fas fa-star"></i>
                                                <i  style={{color:"#f2e016" ,fontSize:"15px"}}class="far fa-star"></i>
                                                <span class="star-count">4.2 (12,851)</span>
                                            </span>
                                            <h4 style={{color:"black" ,paddingRight:"100px", fontWeight:"bolder"}}><span class="ml-2" ></span >₹ 9,999</h4>
         </Typography>
        </CardContent>
      </CardActionArea>
    
    </Card>
    </Col>
    <Col>
    <Card sx={{ maxWidth: 247 }}>
      <CardActionArea>
        <CardMedia style={{borderRadius:"0" }}
          component="img"
          height="120"
          image={page2}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="div">
          The Complete JavaScript Course 2019: Build Real Projects!
          </Typography>
         <Typography>
         <span class="stars"  className='tabsd'>
                                                <i style={{color:"#f2e016" ,fontSize:"15px"}} class="fas fa-star"></i>
                                                <i style={{color:"#f2e016" ,fontSize:"15px"}} class="fas fa-star"></i>
                                                <i  style={{color:"#f2e016" ,fontSize:"15px"}}class="fas fa-star"></i>
                                                <i  style={{color:"#f2e016" ,fontSize:"15px"}}class="fas fa-star"></i>
                                                <i  style={{color:"#f2e016" ,fontSize:"15px"}}class="far fa-star"></i>
                                                <span class="star-count">4.2 (12,851)</span>
                                            </span>
                                            <h4 style={{color:"black" ,paddingRight:"100px", fontWeight:"bolder"}}><span class="ml-2" ></span >₹ 9,999</h4>
         </Typography>
        </CardContent>
      </CardActionArea>
    
    </Card>
    </Col>
    <Row>
      <Col>
      <div className='viewbtn'> 
      <Button variant="contained" color="primary">
View All Courses
</Button>
</div>
</Col>
    </Row>
    </Row>
      </Tab>
      

    </Tabs>
    </div>
  )
}

export default Tabled;
