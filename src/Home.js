import React from "react";

import {Card,CardBody,CardImg,CardText,CardTitle} from "reactstrap"
import {Container,Form,Nav,Navbar,Offcanvas,Row,Col} from "react-bootstrap"
import { Button } from '@mui/material';
import "bootstrap/dist/css/bootstrap.css";
import brand from "../Component/Image/logo.png";
import "../Component/Image/Home.css"
import header from "../Component/Image/header-img.png"
import header1 from "../Component/Image/header-bg.png"
import gif1 from"../Component/Image/video-thumb.gif";
import icon1 from"../Component/Image/icon1.png";
import icon2 from"../Component/Image/icon2.png";
import icon3 from"../Component/Image/icon3.png";
import icon4 from"../Component/Image/icon4.png";
import icon5 from"../Component/Image/icon5.png";
import icon6 from"../Component/Image/icon6.png";
import icon7 from"../Component/Image/icon7.png";
import icon8 from"../Component/Image/icon8.png";
import icon9 from"../Component/Image/icon9.png";
import icon10 from"../Component/Image/icon10.png";
import icon11 from"../Component/Image/icon11.png";
import icon12 from"../Component/Image/icon12.png";
import top1 from"../Component/Image/top1.png";
import top2 from"../Component/Image/top2.png";
import top3 from"../Component/Image/top3.png";
import top4 from"../Component/Image/top4.png";
import icon13 from "../Component/Image/as/icon1.png"
import icon14 from "../Component/Image/as/icon2.png"
import icon15 from "../Component/Image/as/icon3.png"
import icon16 from "../Component/Image/as/icon4.png"
import screen from "../Component/Image/as/screen.png"
import Tabled from "../Tab";
import Tab1 from "../Tab1";
import icon17 from "../Component/Image/as/aspicon.png"
import { fontWeight } from "@mui/system";
import Example from "./Card";
import SimpleSlider from "./Card";
import Footb from "../footb";
import RecipeReviewCard from "./Reactcod";
import FotCardtt from "./Fottcard";





function HackerHac(){
    return(
        <>
        {["lg"].map((expand) => (
          <Navbar key={expand} bg="warning" fixed="top" expand={expand} className="mb-3 navbar navbar-fixed-top ">
            <Container fluid>
              <Navbar.Brand href="#"><img src={brand}></img></Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} bg="warning">
                   <img src={brand}></img>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="What would you like to learn ?"
                      className="me-3"
                      aria-label="What would you like to learn today?"
       
                    />
                    {'  '}
                    <Button variant="contained" color="success">Search</Button>
                  </Form>
                 
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#">Courses</Nav.Link>
                    <Nav.Link href="#">Practice Tests</Nav.Link>
                    <Nav.Link href="#">Challenges</Nav.Link>
                    <Nav.Link href="#">Interview Preparation</Nav.Link>
                    <Nav.Link href="#" className="busin">For Business</Nav.Link>
                    <Nav.Link href="#">Sign In</Nav.Link>
                    <Nav.Link href="#"> <i class="far fa-user mr-5"></i>{' '}register</Nav.Link>
                    {/* <NavDropdown
                      title="Dropdown"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Something else here
                      </NavDropdown.Item>
                    </NavDropdown> */}
                  </Nav>
                
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
        <Container>
        {/* <div class="row justify-content-start col-lg-11 col-sm-6  ">
    <div class="col-sm-6 main-banner-text-new text-light main-banner">
    <p>everything what you need</p>
    <h3>Intelligent Online Hring Solution!</h3>
    <hr/>
<h1>Pro Automated <br/>
<span className="span">Proctoring System</span></h1>
<p>For Seamless recruiting from hackerhac</p>
      </div>
      <div class="col-sm-6 col-lg-6 main-banner-button responsive-align-right">
  <img src={header}></img>
      </div>
    </div> */}
    <Row className="group" >
        <Col  >
 
    <p style={{paddingTop:"70px",fontSize:"15px"}}>everything what you need</p>
    <h3>Intelligent Online Hring Solution!</h3>
    <hr/>
<h1>Pro Automated <br/>
<span className="span">Proctoring System</span></h1>
<p>For Seamless recruiting from hackerhac</p>
    
    <Row style={{display:"flex" ,paddingBottom:"55px"}}>
      <Col sm={6}>
      <Button variant="contained"  color="error" style={{padding:"10px",fontWeight:"bolder" ,margin:"12px"}}>JOIN THE COMMUNITY</Button>
      </Col>
      <Col  sm={6}>
      <Button variant="contained" color="warning"  style={{padding:"10px",fontWeight:"bolder",margin:"12px"}}>HOW IT WORKS</Button>
      </Col>
    </Row>

        </Col>
        <Col xs lg="7" >
  
  <img src={header} width="90%"></img>
   
        </Col>
<Row className="group2">
<img src={header1} ></img>
</Row>
           
     
    </Row>
    <Row>
       <div className="group3 container-fluid">
        <h2>Hire The Best with Talent Acquisition Mindset</h2>
       <h4>Attract Top Quality Talent with Right Strategy</h4>
       </div>
       {/* <div className="group3 container-fluid">
       <Col  sm="2" >
<h6>WHAT'S YOUR WHY?</h6>
<br/>
<img src={gif1} width="100%"></img>

</Col>
<Col   sm="2">
<h6>WHAT'S YOUR WHY?</h6>
<br/>
<img src={gif1} width="100%"></img>

</Col>
<Col sm="2">
<h6>WHAT'S YOUR WHY?</h6>
<br/>
<img src={gif1} width="100%"></img>

</Col>
</div> */}
  
      <div className="group4">
      <Row >
        <Col sm>
        <h6>WHAT'S YOUR WHY?</h6>
<br/>
<img src={gif1} width="100%"></img>
        </Col>
        <Col sm>
        <h6>HOW TO WRITE ACCURATE JOB DESCRIPTION?</h6>
<br/>
<img src={gif1} width="100%"></img>
        </Col>
        <Col sm>
        <h6>HOW TO CREATE A PERSONALITY PROFILE?</h6>
<br/>
<img src={gif1} width="100%"></img>
        </Col>
        <hr></hr>
        <Row>
        <Col sm>
        <h6>SAMPLE JOB DESCRIPTION</h6>
<br/>
<img src={gif1} width="100%"></img>
        </Col>
        <Col sm>
        <h6>WRITING THE AD</h6>
<br/>
<img src={gif1} width="100%"></img>
        </Col>
        <Col sm>
        <h6>LIVE AD ON CRAIGSLIST</h6>
<br/>
<img src={gif1} width="100%"></img>
        </Col>
        </Row>
        <Row>
            <div className="group3">
        <h2>Advanced Capabilities</h2>
<span ><p>Innovatively Served to Ensure Success!</p></span>
<h6>Pro-Automated Proctoring System from Webb9 is a future-ready platform cleverly devised for Recruiters to empower them to assess and appoint the desired talent precisely matching their unique preferences.</h6>
</div>
        </Row>
  
        <Card className="mb-3 container-fluid card1"  p-12 style={{ maxWidth: '420px' }} color="light">
  <Row className="g-0">
    <Col md={4}>
      <CardImg src={icon1} />
    </Col>
    <Col md={8}>
      <CardBody>
        <CardTitle className="cardT" style={{color:"red",fontWeight:"bolder"}}>FACE DETECTION</CardTitle>
        <CardText className="cardP">
        Closely monitors and tracks facial movements, ensuring candidate was present throughout the test.
        </CardText>
        
      </CardBody>
    </Col>
  </Row>
  
</Card>
<Card className="mb-3 container-fluid card1" style={{ maxWidth: '420px' }} color="light">
  <Row className="g-0">
    <Col md={4}>
      <CardImg src={icon2} />
    </Col>
    <Col md={8}>
      <CardBody>
        <CardTitle className="cardT" style={{color:"red",fontWeight:"bolder"}}>FACE RECOGNITION</CardTitle>
        <CardText className="cardP">
        Precisely scans and identifies face-features, authenticating right candidate is being proctored.
        </CardText>
       
      </CardBody>
    </Col>
  </Row>
  
</Card>
<Card className="mb-3 container-fluid card1" style={{ maxWidth: '420px' }} color="light">
  <Row className="g-0">
    <Col sm={4}>
      <CardImg src={icon3} />
    </Col>
    <Col sm={8}>
      <CardBody>
        <CardTitle className="cardT" style={{color:"red",fontWeight:"bolder"}}> MULTI FACE DETECTION</CardTitle>
        <CardText className="cardP">
        Seamlessly recognizes presence of others around, ensuring candidate was alone during the assessment.
        </CardText>
    
      </CardBody>
    </Col>
  </Row>
  
</Card>
<Card className="mb-3 container-fluid card1" style={{ maxWidth: '420px' }} color="light">
  <Row className="g-0">
    <Col sm={4}>
      <CardImg src={icon4} />
    </Col>
    <Col sm={8}>
      <CardBody>
        <CardTitle className="cardT" style={{color:"red",fontWeight:"bolder"}}>
VOICE DETECTION</CardTitle>
        <CardText className="cardP">
        Correctly analyzes and detects audio-nodes, validating identity during the authentication process.
        </CardText>
    
      </CardBody>
    </Col>
  </Row>
  
</Card>
<Card className="mb-3 container-fluid card1" style={{ maxWidth: '420px' }} color="light">
  <Row className="g-0">
    <Col sm={4}>
      <CardImg src={icon5} />
    </Col>
    <Col sm={8}>
      <CardBody>
        <CardTitle className="cardT" style={{color:"red",fontWeight:"bolder"}}>
EYES TRACKING</CardTitle>
        <CardText className="cardP">
        Consistently monitors and records candidate’s eye-lids, restricting redundant eye-movements.
        </CardText>
    
      </CardBody>
    </Col>
  </Row>
  
</Card>
<Card className="mb-3 container-fluid card1" style={{ maxWidth: '420px' }} color="light">
  <Row className="g-0">
    <Col sm={4}>
      <CardImg src={icon6} />
    </Col>
    <Col sm={8}>
      <CardBody>
        <CardTitle className="cardT" style={{color:"red",fontWeight:"bolder"}}>KEYSTROKE BIOMETRICS <sup style={{backgroundColor:"#03c03c",fontSize:"12px",color:"white"}}>New</sup></CardTitle>
    
        <CardText className="cardP">
        Accurately scans keyboard typing patterns, validating candidate’s identity during the assessment.
        </CardText>
    
      </CardBody>
    </Col>
  </Row>
  
</Card>
<Card className="mb-3 container-fluid card1" style={{ maxWidth: '420px' }} color="light">
  <Row className="g-0">
    <Col sm={4}>
      <CardImg src={icon7} />
    </Col>
    <Col sm={8}>
      <CardBody>
        <CardTitle className="cardT" style={{color:"red",fontWeight:"bolder"}}>BROWSER NAVIGATION</CardTitle>
        <CardText className="cardP">
        Intelligently monitors browser activities, ensuring candidate stayed on one browser throughout the test.
        </CardText>
    
      </CardBody>
    </Col>
  </Row>
  
</Card>
<Card className="mb-3 container-fluid card1" style={{ maxWidth: '420px' }} color="light">
  <Row className="g-0">
    <Col sm={4}>
      <CardImg src={icon8} />
    </Col>
    <Col sm={8}>
      <CardBody>
        <CardTitle className="cardT" style={{color:"red",fontWeight:"bolder"}}>VIDEO RECORDING</CardTitle>
        <CardText className="cardP">
        Constantly analyzes and records candidate’s actions, preventing any unfair deed during the test.
        </CardText>
    
      </CardBody>
    </Col>
  </Row>
  
</Card>
<Card className="mb-3 container-fluid card1" style={{ maxWidth: '420px' }} color="light">
  <Row className="g-0">
    <Col sm={4}>
      <CardImg src={icon9} />
    </Col>
    <Col sm={8}>
      <CardBody>
        <CardTitle className="cardT" style={{color:"red",fontWeight:"bolder"}}>SCREEN SHARING</CardTitle>
        <CardText className="cardP">
        Efficiently generates real-time screen sharing feeds, restricting candidate from browsing another website.
        </CardText>
    
      </CardBody>
    </Col>
  </Row>
  
</Card>
<Card className="mb-3 container-fluid card1" style={{ maxWidth: '420px' }} color="light">
  <Row className="g-0">
    <Col sm={4}>
      <CardImg src={icon10} />
    </Col>
    <Col sm={8}>
      <CardBody>
        <CardTitle className="cardT" style={{color:"red",fontWeight:"bolder"}}>IDLE SCREEN DETECTION</CardTitle>
        <CardText className="cardP">
        Effectively tracks screen movements, affirming webcam or wear cam were active during the assessment.
        </CardText>
    
      </CardBody>
    </Col>
  </Row>
  
</Card>
<Card className="mb-3 container-fluid card1" style={{ maxWidth: '420px' }} color="light">
  <Row className="g-0">
    <Col sm={4}>
      <CardImg src={icon11} />
    </Col>
    <Col sm={8}>
      <CardBody>
        <CardTitle className="cardT"  style={{color:"red",fontWeight:"bolder"}}>SHORT-KEYS DISABLED</CardTitle>
        <CardText className="cardP">
        Disables keyboard shortcuts (like CTRL+C/X/V), preventing copy and paste of text from other sources.
        </CardText>
    
      </CardBody>
    </Col>
  </Row>
  
</Card>
<Card className="mb-3 container-fluid card1" style={{ maxWidth: '420px' }} color="light">
  <Row className="g-0">
    <Col sm={4}>
      <CardImg src={icon12} />
    </Col>
    <Col sm={8}>
      <CardBody>
        <CardTitle className="cardT" style={{color:"red",fontWeight:"bolder"}}>SUSPICION ALARM</CardTitle>
        <CardText className="cardP">
        Automatically identifies suspicious activities, empowering proctors to raise flags and / or terminate the test.
        </CardText>
    
      </CardBody>
    </Col>
  </Row>
  
</Card>
<Row>
    <div className="group3a">
<h2>LEARN - PRACTICE - COMPETE</h2>
<h5>OUT-PERFORM</h5>
<p>Brainmeasures unleashes HackerHac, an Advanced Online Certification Program for<br/>
Individuals aspiring to enhance their CAREER-POTENTIAL, and GET NOTICED by the LEADING Employers World-Wide!</p>
</div>
</Row>

<Card className="mb-0 container-fluid Cardd" style={{ maxWidth: '320px',borderRadius:"45px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }} color="light">
  <Row className="g-0">
    <Col sm={4}>
      <CardImg src={top1}  />
      
    </Col>
    
    <Col sm={8}>
      <CardBody>
        <CardTitle className="cardT"><h1>3000+</h1>
        <h5 style={{color:"rgb(55, 6, 105)",padding:"-2px",fontWeight:"bolder"}}>CERTIFICATION COURSES</h5>
        </CardTitle>
        <CardText className="cardP"><p>
        HackerHac’ Online Certifications
are Recognized by Global Employers</p>
        </CardText>
    
      </CardBody>
    </Col>
    
  </Row>
  
</Card>
<Card className="mb-0 container-fluid card2" style={{ maxWidth: '320px',borderRadius:"45px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }} color="light">
  <Row className="g-0">
    <Col sm={4}>
      <CardImg src={top2}  />
      
    </Col>
    
    <Col sm={8}>
      <CardBody>
        <CardTitle className="cardT"><h1>5000+</h1>
        <h5 style={{color:"rgb(55, 6, 105)",padding:"-2px",fontWeight:"bolder"}}>SKILL ASSESSMENTS</h5>
        </CardTitle>
        <CardText className="cardP"><p>
        Propel your Career Potential with
HackerHac’ Skill Testing Solutions</p>
        </CardText>
    
      </CardBody>
    </Col>
    
  </Row>
  
</Card>
<Card className="mb-0 container-fluid card2" style={{ maxWidth: '320px',borderRadius:"45px" ,boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }} color="light">
  <Row className="g-0">
    <Col sm={4}>
      <CardImg src={top3}  />
      
    </Col>
    
    <Col sm={8}>
      <CardBody>
        <CardTitle className="cardT"><h1>142K+</h1>
        <h5 style={{color:"rgb(55, 6, 105)",padding:"-2px",fontWeight:"bolder"}}>CODING CHALLENGES</h5>
        </CardTitle>
        <CardText className="cardP"><p>
        Our Online Coding Challenges let
You Compete with Coders Worldwide.</p>
        </CardText>
    
      </CardBody>
    </Col>
    
  </Row>
  
</Card>
<Card className="mb-0 container-fluid card2" style={{ maxWidth: '320px',borderRadius:"45px" ,boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} color="light">
  <Row className="g-0">
    <Col sm={4}>
      <CardImg src={top4}  />
      
    </Col>
    
    <Col sm={8}>
      <CardBody>
        <CardTitle className="cardT"><h1>2600+</h1>
        <h5 style={{color:"rgb(55, 6, 105)",padding:"-2px",fontWeight:"bolder"}}>PRACTICE INTERVIEWS</h5>
        </CardTitle>
        <CardText className="cardP"><p>
        Automatically identifies suspicious activities, empowering proctors to raise flags and / or terminate the test.</p>
        </CardText>
    
      </CardBody>
    </Col>
    
  </Row>
  
</Card>
  <div className="border">
 
   <h2>Interviews and Group Discussions</h2>
  
  </div>
  <Col sm>
        <h6>RIGHT WAY TO PREPARE FOR INTERVIEWS</h6>
<br/>
<img src={gif1} width="100%"></img>
        </Col>
        <Col sm>
        <h6>INTERVIEW FUNDAMENTALS</h6>
<br/>
<img src={gif1} width="100%"></img>
        </Col>
        <Col sm>
        <h6>FUNDAMENTALS OF GROUP DISCUSSION</h6>
<br/>
<img src={gif1} width="100%"></img>
        </Col>
        <hr></hr>
       
        <Col sm>
        <h6>RIGHT WAY TO PREPARE FOR GROUP DISCUSSION</h6>
<br/>
<img src={gif1} width="100%"></img>
        </Col>
        <Col sm>
        <h6>MAKING MEANINGFUL IMPACT</h6>
<br/>
<img src={gif1} width="100%"></img>
        </Col>
        <Col sm>
        <h6>IMPORTANT POINTS</h6>
<br/>
<img src={gif1} width="100%"></img>
        </Col>
       <Row>
       <Col  >
<h2 className="group3b">WHY HACKERHAC AT <span className="circle">#1</span></h2>
<Card className="mb-0 container-fluid card3"  p-0 style={{ maxWidth: '560px' ,margin:"20px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }} color="light">
  <Row className="g-0">
    <Col md={4}>
      <CardImg src={icon15} />
    </Col>
    <Col md={8}>
      <CardBody>
        <CardTitle className="cardT1"><h6>HackerHac is an advanced online certification and a skill-testing mechanism</h6></CardTitle>
        <CardText className="cardP1">
        <p>enabling students and professionals from across multiple disciplines to enhance their skills.</p>
        </CardText>
        
      </CardBody>
    </Col>
  </Row>
  </Card>

 <Card className="mb-0 container-fluid card3"  p-0  style={{ maxWidth: '560px' ,margin:"20px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} color="light">
  <Row className="g-0">
    <Col md={4}>
      <CardImg src={icon14} />
    </Col>
    <Col md={8}>
      <CardBody>
        <CardTitle className="cardT1"><h6>HackerHac provides a Global Coding Arena</h6></CardTitle>
        <CardText className="cardP1">
        <p>for amateur and qualified coders to compete and prove their coding caliber to the programmers from across the globe.</p>
        </CardText>
        
      </CardBody>
    </Col>
  </Row>
  </Card>
  <Card className="mb-0 container-fluid card3"  p-0  style={{ maxWidth: '590px' ,margin:"20px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} color="light">
  <Row className="g-0">
    <Col md={4}>
      <CardImg src={icon16} />
    </Col>
    <Col md={8}>
      <CardBody>
        <CardTitle className="cardT1"><h6>HackerHac is a future-ready online certification and training</h6></CardTitle>
        <CardText className="cardP1">
        <p>platform with high-quality course content, trusted by the Global enterprises for all their workforce and talent requirements.</p>
        </CardText>
        
      </CardBody>
    </Col>
  </Row>
  </Card>
  <Card className="mb-0  container-fluid card3"  p-0  style={{ maxWidth: '590px' ,margin:"20px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }} color="light">
  <Row className="g-0">
    <Col md={4}>
      <CardImg src={icon13} />
    </Col>
    <Col md={8}>
      <CardBody>
        <CardTitle className="cardT1"><h6>HackerHac’ knowledge sharing platform</h6></CardTitle>
        <CardText className="cardP1">
        <p> enables students and professionals from across the globe to connect in a community arrangement that is managed by the domain experts.</p>
        </CardText>
        
      </CardBody>
    </Col>
  </Row>
  </Card>

     </Col>
     <Col xs lg="7" >
<div>
<img src={screen} width="90%" ></img>
<img src={screen} width="90%"   className="overl"></img>
</div>
     </Col>
     <div class="jumbotron">
  <h2 class="display-5" style={{fontSize:"27px" ,padding:"20px"}}>CERTIFICATION <span>course🇸</span></h2>
  <Tabled/>

</div>
<Col>
<div className="tab2 container-fluid">
        <Tab1/>
       </div>
       </Col>
       
       </Row>
       <div>
       <Row className="container-fluid lg-12" >
        
        <div class="jumbotron">
            <Row>
        <Col  sm={6}>
  <h2 class="display-5" style={{fontSize:"27px" ,padding:"20px"}}>ONLINE  <span>CHALLENGES</span></h2>
  <p  className='tabsd'>
  <span style={{marginRight:"1px", fontSize:"14px"}}><i class="fas fa-trophy mr-5" style={{color:"red" }}></i> 50 LAKHS WORTH PRIZES</span><span style={{marginRight:"1px" , fontSize:"14px"}}><i class="fas fa-user-tie mr-5" style={{color:"red"}}></i>152K+ Hired</span><span  style={{marginRight:"-2px"}}>
                            <i class="fas fa-star" style={{color:"#f2e016"}}></i><i class="fas fa-star" style={{color:"#f2e016"}}></i><i class="fas fa-star" style={{color:"#f2e016"}}></i><i class="fas fa-star" style={{color:"#f2e016"}}></i><i class="fas fa-star-half-alt" style={{color:"#f2e016"}}></i>
                            4.93 Overall Ratings
                        </span>
                    </p>

          <RecipeReviewCard/> 
</Col>
                    <Col sm={6} >
                    <h2 class="display-5" style={{fontSize:"27px" ,padding:"20px"}}>INTERVIEW   <span>PREPARATION PRACTICE TESTS</span></h2>
                    <p  className='tabsd'>
<span style={{marginRight:"1px" , fontSize:"14px"}}><i class="fas fa-user-tie mr-5" style={{color:"red"}}></i>942K+ PRACTICED </span><span  style={{marginRight:"-2px"}}>
                            <i class="fas fa-star" style={{color:"#f2e016"}}></i><i class="fas fa-star" style={{color:"#f2e016"}}></i><i class="fas fa-star" style={{color:"#f2e016"}}></i><i class="fas fa-star" style={{color:"#f2e016"}}></i><i class="fas fa-star-half-alt" style={{color:"#f2e016"}}></i>
                            4.11 Overall Ratings
                        </span>
                    </p>
                    <Card className="mb-0  container-fluid card3"  p-0  style={{ maxWidth: '590px' ,margin:"20px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }} color="light">
  <Row className="g-0">
    <Col md={7}>


    <sup className="sups" >New</sup>
      <CardBody>
        <CardTitle className="cardT5"><h6>Algorithms</h6></CardTitle>
        <CardText className="cardP5">
        <p> Total Participants 25,638 <br/> 35 Tests available</p>
        </CardText>
        
      </CardBody>
    </Col>
    <Col md={4}>
    <CardImg className="img" src={icon17}  />
    </Col>
  </Row>
  </Card>
  <Card className="mb-0  container-fluid card3"  p-0  style={{ maxWidth: '590px' ,margin:"20px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }} color="light">
  <Row className="g-0">
    <Col md={7}>

    <sup className="sups" >New</sup>

      <CardBody>
        <CardTitle className="cardT5"><h6>Coding Fundamentals</h6></CardTitle>
        <CardText className="cardP5">
        <p> Total Participants 25,638 <br/> 35 Tests available</p>
        </CardText>
        
      </CardBody>
    </Col>
    <Col md={4}>
    <CardImg className="img" src={icon17} />
    </Col>
  </Row>
  </Card>

  <Card className="mb-0  container-fluid card3"  p-0  style={{ maxWidth: '590px' ,margin:"20px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }} color="light">

  <Row className="g-0">
    <Col md={7}>

    <sup className="sups" >New</sup>
      <CardBody>
        <CardTitle className="cardT5"><h6>Practice Series</h6></CardTitle>
        <CardText className="cardP5">
        <p> Total Participants 25,638 <br/> 35 Tests available</p>
        </CardText>
      
      </CardBody>
    </Col>
    <Col md={4}>
    <CardImg className="img" src={icon17} />
    </Col>
  </Row>
  </Card>
  
                        </Col>
                        <Row>
<Col>
      <div className='viewbtn'> 
      <Button variant="outline" style={{color:"whitesmoke"}} color="error">
Browse All> 
</Button>
</div>
</Col>
<Row>
 <Row className="fotb">
    <h4>HackerHac for Enterprises</h4>
    <h2>Ultra-Modern Solutions for<br/>
Modern Businesses</h2>
 </Row>
 <Footb/>
</Row>
</Row>
                        
                        </Row>
</div>
        

       
  

   
   
<Row className="group2 container-fluid">

</Row>
</Row>
       </div>
    <SimpleSlider/>
</Row>  


</div>

<footer className="footer container-fluid">
    <Row>
        <Col sm={2}>
<h5>RESOURCES</h5>
<p>OurStory</p>
  <p>Blogs</p>
  <p>Case Studies</p>
  <p>Featured In News</p>
 
</Col>
<Col sm={2}>
<h5>SUPPORT</h5>
<p>Contact Us</p>
  <p>Help & Support</p>
  <p>Privacy Policy</p>
  <p>Terms of Use</p>
</Col>
<Col sm={2}>
<h5>SOLUTION</h5>
<p>Brand Inventory</p>
  <p>Digital Assets</p>
  <p>Tool Evangelism</p>
  <p>Online Interviews</p>
</Col>
<Col sm={4} >
<h5>NEWLY UPLOADED BLOGS</h5>
<p>skill Testing and Talent Search</p>
<p>The Future of eLearning is Online proctoring!</p>
<p>Five ways to Upscale the Talent Quality</p>
<p>A-Lot is Happening in Pre-Employment Assessment</p>
</Col>
<Col>
<h5>NEWLY UPLOADED BLOGS</h5>
</Col>
</Row>
<Row>
    <br/>
    <hr style={{marginTop:"12px"}}/>
    <Row>

    <blockquote  style={{textAlign:"center", fontSize:"12px",color:"#5A4F6F"}}>Hackerhac is NOT an accredited university or a placement agency, and does NOT award any qualification degree or guarantee any job placement.<br/> Hackerhac is a unique online skill-testing, education, practice, and coding-challenge platform, and is NOT affiliated with any association,<br/> university, or sanctioned by the University Grants Commission.
<br/>© Copyright Hackerhac 2007 to 2022</blockquote>
    </Row>

</Row>
</footer>

    </Row>



  
        </Container>
      </>
  
    )
}
export default HackerHac;