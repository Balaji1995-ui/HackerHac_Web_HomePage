import React from 'react'
import  Accordion from "react-bootstrap/Accordion"
import 'bootstrap/dist/css/bootstrap.css';
import"../src/Component/Image/Home.css";
import {Row,Col} from "reactstrap";
import { Button } from 'react-bootstrap';
export default function Accor() {
  return (
  <div>
    <Accordion defaultActuveKey="0">
        <Accordion.Item eventKey="0">
<Accordion.Header className='container-fluid group4'>
ASCEND YOUR  <br/>  <span  style={{fontSize:"18px" ,fontWeight:"bold" ,color:"#3f0066" ,marginLeft:"3px"}}>DOMAIN EXPERTISE</span>
</Accordion.Header>
<Accordion.Body>
Be ready to make a mark with our in-depth training programs that are devised collaboratively with the world's most progressive organizations, including Microsoft, Infosys, and more. Develop and enhance practical skills by working on real-world projects on universal challenges faced by the industry leaders.
</Accordion.Body>

        </Accordion.Item>
        <Accordion.Item eventKey="1">
<Accordion.Header className='container-fluid group4'>

EXPERIENCE  <br/>  <span  style={{fontSize:"18px" ,fontWeight:"bold" ,color:"#3f0066",marginLeft:"3px"}}> COMMUNITY LEARNING</span>
</Accordion.Header>
<Accordion.Body>
Be a part of a unique way of learning with our Student Communities, Groups, and Knowledge Sharing Platforms. Collaborate with fellow students from global destinations and get ever-ready support from experienced mentors at HackerHac.
</Accordion.Body>

        </Accordion.Item>
        <Accordion.Item eventKey="2">
<Accordion.Header className='container-fluid group4'>

PROPEL  <br/>  <span  style={{fontSize:"18px" ,fontWeight:"bold" ,color:"#3f0066",marginLeft:"3px"}}> YOUR CAREER PORTFOLIO</span>
</Accordion.Header>
<Accordion.Body>
Outshine in your aspired career by getting job ready with HackerHac’ professional career guidance. Learn to make resumes that get noticed and shortlisted fast and understand how to crack interviews. Also, get access to the large network of our Hiring partners.
</Accordion.Body>

        </Accordion.Item>
        

    </Accordion>
    <Row >
        <Col style={{margin:"35px"}}>
        <Button color='danger'>
Register Now >>>
        </Button>
        </Col>
    </Row>
    </div>
   
  )
}
