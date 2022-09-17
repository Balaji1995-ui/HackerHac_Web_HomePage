import React, { Component } from 'react'
import "slick-carousel/slick/slick.css"
import pc1 from "./Image/as/carosal/c1.png"
import pc2 from "./Image/as/carosal/c2.png"
import pc3 from "./Image/as/carosal/c3.png"
import pc4 from "./Image/as/carosal/c4.png"
import pc5 from "./Image/as/carosal/c5.png"
import pc6 from "./Image/as/carosal/c6.png"
import pc8 from "./Image/as/carosal/c8.png"
import pc9 from "./Image/as/carosal/c9.png"
import pc10 from "./Image/as/carosal/c10.png"
import pc11 from "./Image/as/carosal/c11.png"
import pc12 from "./Image/as/carosal/c12.png"
import pc13 from "./Image/as/carosal/c13.png"
import pc15 from "./Image/as/carosal/c15.png"
import pc16 from "./Image/as/carosal/c16.png"
import pc17 from "./Image/as/carosal/c17.png"
import pc18 from "./Image/as/carosal/c18.png"
import Slider from 'react-slick';
import "bootstrap/dist/css/bootstrap.css"

export default class SimpleSlider extends Component{

  
      render() {
        const settings = {
          dots: true,
          infinite: true,
          speed: 600,
          slidesToShow: 4,
          slidesToScroll: 5,
        };
        return (
          <div>
      
           
            <div
            className=' group4 container-fluid '
             
            >
              <Slider {...settings} className="carous">
           
                <div >
                <img src={pc1} ></img>
          </div>
          <div>
          <img src={pc2}  ></img>
          </div>
          <div>
          <img src={pc3}></img>
          </div>
          <div>
          <img src={pc4}></img>
          </div>
          <div>
          <img src={pc5}></img>
          </div>
          <div>
          <img src={pc6}></img>
          </div>
          <div>
          <img src={pc8}></img>
          </div>
          <div>
          <img src={pc9}></img>
          </div>
          <div>
          <img src={pc10}></img>
          </div>
          <div>
          <img src={pc11}></img>
          </div>
          <div>
          <img src={pc12}></img>
          </div>
          <div>
          <img src={pc13}></img>
          </div>
          <div>
          <img src={pc15}></img>
          </div>
          <div>
          <img src={pc16}></img>
          </div>
          <div>
          <img src={pc17}></img>
          </div>
          <div>
          <img src={pc18}></img>
          </div>
       
              </Slider>
            </div>
          </div>
         
      
        );
      }
    }

    

