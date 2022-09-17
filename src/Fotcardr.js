import React from 'react'
import { Row, Col,Button, CardTitle} from"reactstrap"
import "bootstrap/dist/css/bootstrap.css"
import  Card  from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  CardActionArea } from '@mui/material';
import comp from "./Component/Image/as/carosal/Company/01.jpg"
import comp1 from "./Component/Image/as/carosal/Company/01.png"
import comp2a from "./Component/Image/as/carosal/Company/02.jpg"
import comp2 from "./Component/Image/as/carosal/Company/02.png"
import comp3 from "./Component/Image/as/carosal/Company/03.jpg"
import comp3a from "./Component/Image/as/carosal/Company/03.png"
import comp4 from "./Component/Image/as/carosal/Company/04.jpg"
import comp4a from "./Component/Image/as/carosal/Company/04.png"
import comp7a from "./Component/Image/as/carosal/Company/05.jpg"
import comp7 from "./Component/Image/as/carosal/Company/07.png"
import comp8a from "./Component/Image/as/carosal/Company/06.jpg"
import comp8 from "./Component/Image/as/carosal/Company/06a.jpg"
export default function Fotcardr() {
  return (
    <div>
        <Row>
            <Col xs sm={4}>
        <Card xs={{ maxWidth: 20 ,maxHeight:50 }} style={{marginBottom:"9px", borderRadius:"12px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
      <CardActionArea>
        <CardMedia style={{borderRadius:"50%" ,width:"100px" ,marginLeft:"25%"  }}
          component="img"
          height="120"
      image={comp} 
       
        />
        <CardTitle >
            <h3 style={{textAlign:"center" ,fontWeight:"bold" ,color:"black" ,paddingBottom:"20%" ,fontFamily:"sans-serif" ,fontWeight:"bolder"}}>Shefali Jain</h3>
            </CardTitle>
    
        
       
            <img   style={{marginTop:"-62px" ,width:"70%" ,borderRadius:"5%" , padding:"12px", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }} src={comp1}></img>
      
      </CardActionArea>
    
    </Card>
    
    </Col>
    <Col xs sm={4}>
        <Card xs={{ maxWidth: 20 ,maxHeight:50 }} style={{ marginBottom:"9px",  borderRadius:"12px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
      <CardActionArea>
        <CardMedia style={{borderRadius:"50%" ,width:"100px" ,marginLeft:"25%"  }}
          component="img"
          height="120"
      image={comp3} 
       
        />
        <CardTitle >
            <h3 style={{textAlign:"center" ,fontWeight:"bold" ,color:"black" ,paddingBottom:"20%" ,fontFamily:"sans-serif" ,fontWeight:"bolder"}}>Akshay Seth</h3>
            </CardTitle>
    
        
       
            <img   style={{marginTop:"-62px" ,width:"70%" ,borderRadius:"5%" , padding:"12px", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }} src={comp3a}></img>
      
      </CardActionArea>
    
    </Card>
    
    </Col>
    <Col xs sm={4}>
        <Card xs={{ maxWidth: 20 ,maxHeight:50 }} style={{marginBottom:"9px",  borderRadius:"12px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
      <CardActionArea>
        <CardMedia style={{borderRadius:"50%" ,width:"100px" ,marginLeft:"25%"  }}
          component="img"
          height="120"
      image={comp2a} 
       
        />
        <CardTitle >
            <h3 style={{textAlign:"center" ,fontWeight:"bold" ,color:"black" ,paddingBottom:"20%" ,fontFamily:"sans-serif" ,fontWeight:"bolder"}}>Sagar Kothiya</h3>
            </CardTitle>
    
        
       
            <img   style={{marginTop:"-62px" ,width:"70%" ,borderRadius:"5%" , padding:"12px", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }} src={comp2}></img>
      
      </CardActionArea>
    
    </Card>
    
    </Col>
    <Col xs sm={4}>
        <Card xs={{ maxWidth: 20 ,maxHeight:50 }} style={{ borderRadius:"12px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
      <CardActionArea>
        <CardMedia style={{borderRadius:"50%" ,width:"100px" ,marginLeft:"25%"  }}
          component="img"
          height="120"
      image={comp4} 
       
        />
        <CardTitle >
            <h3 style={{textAlign:"center" ,fontWeight:"bold" ,color:"black" ,paddingBottom:"20%" ,fontFamily:"sans-serif" ,fontWeight:"bolder"}}>Shariya Shaikh</h3>
            </CardTitle>
    
        
       
            <img   style={{marginTop:"-62px" ,width:"70%" ,borderRadius:"5%" , padding:"12px", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }} src={comp4a}></img>
      
      </CardActionArea>
    
    </Card>
    
    </Col>
    <Col xs sm={4}>
        <Card xs={{ maxWidth: 20 ,maxHeight:50 }} style={{ borderRadius:"12px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
      <CardActionArea>
        <CardMedia style={{borderRadius:"50%" ,width:"100px" ,marginLeft:"25%"  }}
          component="img"
          height="120"
      image={comp7a} 
       
        />
        <CardTitle >
            <h3 style={{textAlign:"center" ,fontWeight:"bold" ,color:"black" ,paddingBottom:"20%" ,fontFamily:"sans-serif" ,fontWeight:"bolder"}}>Ronit Malhotra</h3>
            </CardTitle>
    
        
       
            <img   style={{marginTop:"-62px" ,width:"70%" ,borderRadius:"5%" , padding:"12px", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }} src={comp7}></img>
      
      </CardActionArea>
    
    </Card>
    
    </Col>
    <Col xs sm={4}>
        <Card xs={{ maxWidth: 20 ,maxHeight:50 }} style={{ borderRadius:"12px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
      <CardActionArea>
        <CardMedia style={{borderRadius:"50%" ,width:"100px" ,marginLeft:"25%"  }}
          component="img"
          height="120"
      image={comp8a} 
       
        />
        <CardTitle >
            <h3 style={{textAlign:"center" ,fontWeight:"bold" ,color:"black" ,paddingBottom:"20%" ,fontFamily:"sans-serif" ,fontWeight:"bolder"}}>Mitali Sinha</h3>
            </CardTitle>
    
        
       
            <img   style={{marginTop:"-62px" ,width:"70%" ,borderRadius:"5%" , padding:"12px", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }} src={comp8}></img>
      
      </CardActionArea>
    
    </Card>
    
    </Col>
    
   
        </Row>
      
    </div>
  )
}
