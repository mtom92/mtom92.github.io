import React , {Component} from 'react';
import { FaGithubAlt , FaLinkedin, FaRegEnvelope, FaTwitter } from "react-icons/fa";
import { Container, Row, Col } from 'reactstrap';
import Particles from 'react-particles-js';
import '../App.css';

class Contact extends Component {
  render(){
     return (
   <div>
     <Particles
       height="210px"
       canvasClassName="contactdiv"
       params={{
         "particles": {
           "number": {
             "value": 156,
             "density": {
               "enable": true,
               "value_area": 700.0624057955
             }
           },
           "color": {
             "value": "#d9faff"
           },
           "shape": {
             "type": "circle",
             "stroke": {
               "width": 0,
               "color": "#000000"
             },
             "polygon": {
               "nb_sides": 5
             },
             "image": {
               "src": "img/github.svg",
               "width": 100,
               "height": 100
             }
           },
           "opacity": {
             "value": 0.5,
             "random": false,
             "anim": {
               "enable": false,
               "speed": 1,
               "opacity_min": 0.1,
               "sync": false
             }
           },
           "size": {
             "value": 3.945738208161363,
             "random": true,
             "anim": {
               "enable": false,
               "speed": 40,
               "size_min": 0.1,
               "sync": false
             }
           },
           "line_linked": {
             "enable": true,
             "distance": 150,
             "color": "#ffffff",
             "opacity": 0.4,
             "width": 1
           },
           "move": {
             "enable": true,
             "speed": 6,
             "direction": "none",
             "random": false,
             "straight": false,
             "out_mode": "out",
             "bounce": false,
             "attract": {
               "enable": false,
               "rotateX": 600,
               "rotateY": 1200
             }
           }
         },
         "interactivity": {
           "detect_on": "canvas",
           "events": {
             "onhover": {
               "enable": true,
               "mode": "repulse"
             },
             "onclick": {
               "enable": true,
               "mode": "push"
             },
             "resize": true
           },
           "modes": {
             "grab": {
               "distance": 400,
               "line_linked": {
                 "opacity": 1
               }
             },
             "bubble": {
               "distance": 400,
               "size": 40,
               "duration": 2,
               "opacity": 8,
               "speed": 3
             },
             "repulse": {
               "distance": 200,
               "duration": 0.4
             },
             "push": {
               "particles_nb": 4
             },
             "remove": {
               "particles_nb": 2
             }
           }
         },
         "retina_detect": true,

       }}/>

     <Container id="contact">
       <Row>
         <Col>
           <div class="sections_header">
             <h1 id="title">Contact Me</h1>
             <h6>Let's develop together !!</h6>
           </div>
           <span className="animate-border ml-auto mr-auto"></span>
         </Col>
       </Row>
       <Row>
         <Col className="icons_contact">
           <a href="https://github.com/mtom92"><FaGithubAlt size={42} color='#2eabb2' id="icon"/></a>
           <a href="https://www.linkedin.com/in/gerardo-miguel-torres-moran/"><FaLinkedin size={42} color='#2eabb2' id="icon"/></a>
           <a href="mailto:torresmoranm@gmail.com"><FaRegEnvelope  size={42} color='#2eabb2' id="icon"/></a>
           <a href="https://twitter.com/mtmakao"><FaTwitter  size={42} color='#2eabb2' id="icon"/></a>
         </Col>
       </Row>
     </Container>
   </div>


    );
  }
}

export default Contact;
