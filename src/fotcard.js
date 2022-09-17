import React, { Component } from 'react'
import "slick-carousel/slick/slick.css"
import"./Image/Home.css";
import pc1 from "./Image/as/carosal/user/04.jpg"
import pc2 from "./Image/as/carosal/user/05.jpg"
import pc3 from "./Image/as/carosal/user/09.jpg"
import pc4 from "./Image/as/carosal/user/10.jpg"
import pc5 from "./Image/as/carosal/user/11.jpg"
// import pc6 from "./Image/as/carosal/user/12.png"
// import pc7 from "./Image/as/carosal/user/13.png"
// import pc8 from "./Image/as/carosal/user/14.png"
// import pc9 from "./Image/as/carosal/user/15.png"
import Slider from 'react-slick';
import {Card,CardBody,CardImg,CardText,CardTitle,Row,Col} from "reactstrap"
import "bootstrap/dist/css/bootstrap.css"

export default class FotCard extends Component{

  
      render() {
        const settings = {
          dots: true,
          infinite: true,
          speed: 600,
          slidesToShow: 1,
          slidesToScroll: 1,
        };
        return (
          <div>
      
           
            <div
            className=' group4 container-fluid bg-#F1E9FF' 
             
          style={{backgroundColor:"#F1E9FF" ,paddingBottom:"36px",paddingTop:"5px"}}   >
              <Slider {...settings} className="carous">
           
                <div >
                <Card className="mb-5 container-fluid card1"  style={{ maxWidth: '420px'  ,marginTop:"0",paddingTop:"2px" ,boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}  >
  <Row className="g-0">
    <Col md={8}>
 
      <CardBody>
        <CardTitle className="cardt11" >
        <h4   style={{ fontSize:"13px" ,color:"goldenrod" }}>
                                                <i   class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="far fa-star"></i>
                                                4.6 - <span style={{ fontSize:"18px",color:"black" ,fontFamily:"sans-serif" }}>Anil Gupta</span>
                                            </h4>
        
        </CardTitle>
        <CardText style={{ fontSize:"10px" ,color:"#3f0066",fontWeight:"inherit" }}>
        Advanced training programs by HackerHac helped me understand the problems better and thus enhance my career path as a Business Analyst.
 
        </CardText>
        
      </CardBody>
    </Col>
    <Col md={4}>
    <CardImg src={pc1}    style={{borderRadius:"3"  }} />
    </Col>
  </Row>
  
</Card>
          </div>
          <div >
                <Card className="mb-5 container-fluid card1"  style={{ maxWidth: '420px'  ,marginTop:"0",paddingTop:"2px" ,boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }} color="light">
  <Row className="g-0">
    <Col md={8}>
 
      <CardBody>
        <CardTitle className="cardt11" >
        <h4   style={{ fontSize:"13px" ,color:"goldenrod" }}>
                                                <i   class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="far fa-star"></i>
                                                4.6 - <span style={{ fontSize:"18px",color:"black" ,fontFamily:"sans-serif" }}>Aliya Khan</span>
                                            </h4>
        
        </CardTitle>
        <CardText style={{ fontSize:"10px" ,color:"#3f0066",fontWeight:"inherit" }}>
        Personalized support by the experienced mentors, exposure to the real-work challenges guided me towards a career as Data Scientist in one of India's top startups.
 
        </CardText>
        
      </CardBody>
    </Col>
    <Col md={4}>
    <CardImg src={pc2}    style={{borderRadius:"3"  }} />
    </Col>
  </Row>
  
</Card>
          </div>
          <div >
                <Card className="mb-5 container-fluid card1"  style={{ maxWidth: '420px'  ,marginTop:"0",paddingTop:"2px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }} color="light">
  <Row className="g-0">
    <Col md={8}>
 
      <CardBody>
        <CardTitle className="cardt11" >
        <h4   style={{ fontSize:"13px" ,color:"goldenrod" }}>
                                                <i   class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="far fa-star"></i>
                                                4.6 - <span style={{ fontSize:"18px",color:"black" ,fontFamily:"sans-serif" }}>Bijender Singh</span>
                                            </h4>
        
        </CardTitle>
        <CardText style={{ fontSize:"10px" ,color:"#3f0066",fontWeight:"inherit" }}>
        High-Quality course content, community learning set-up, and industry leading mentors enabled me to high-fly my job career as a Management Professional.
 
        </CardText>
        
      </CardBody>
    </Col>
    <Col md={4}>
    <CardImg src={pc3}    style={{borderRadius:"3"  }} />
    </Col>
  </Row>
  
</Card>
          </div>
          <div >
                <Card className="mb-5 container-fluid card1"  style={{ maxWidth: '420px'  ,marginTop:"0",paddingTop:"2px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }} color="light">
  <Row className="g-0">
    <Col md={8}>
 
      <CardBody>
        <CardTitle className="cardt11" >
        <h4   style={{ fontSize:"13px" ,color:"goldenrod" }}>
                                                <i   class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="far fa-star"></i>
                                                4.6 - <span style={{ fontSize:"18px",color:"black" ,fontFamily:"sans-serif" }}>Priya Jain</span>
                                            </h4>
        
        </CardTitle>
        <CardText style={{ fontSize:"10px" ,color:"#3f0066",fontWeight:"inherit" }}>
        Unique learning platforms by HackerHac ensure that all the enrolled students get the relevant understanding for job that they aspire for.
 
        </CardText>
        
      </CardBody>
    </Col>
    <Col md={4}>
    <CardImg src={pc4}    style={{borderRadius:"3"  }} />
    </Col>
  </Row>
  
</Card>
          </div>
          <div >
                <Card className="mb-5 container-fluid card1"  style={{ maxWidth: '420px'  ,marginTop:"0",paddingTop:"2px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }} color="light">
  <Row className="g-0">
    <Col md={8}>
 
      <CardBody>
        <CardTitle className="cardt11" >
        <h4   style={{ fontSize:"13px" ,color:"goldenrod" }}>
                                                <i   class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="far fa-star"></i>
                                                4.6 - <span style={{ fontSize:"18px",color:"black" ,fontFamily:"sans-serif" }}>Sumit Kapoor</span>
                                            </h4>
        
        </CardTitle>
        <CardText style={{ fontSize:"10px" ,color:"#3f0066",fontWeight:"inherit" }}>
        Unique learning platforms by HackerHac ensure that all the enrolled students get the relevant understanding for job that they aspire for.
 
        </CardText>
        
      </CardBody>
    </Col>
    <Col md={4}>
    <CardImg src={pc5}    style={{borderRadius:"3"  }} />
    </Col>
  </Row>
  
</Card>
          </div>
          
       
          
       
              </Slider>
            </div>
          </div>
         
      
        );
      }
    }

    

