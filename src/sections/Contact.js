import React , {Component} from 'react';
import { FaGithubAlt , FaLinkedin, FaRegEnvelope, FaTwitter,FaRegFilePdf } from "react-icons/fa";
import { Container, Row, Col } from 'reactstrap';
import Particles from 'react-particles-js';
import '../App.css';

class Contact extends Component {
  render(){
     return (
   <div>
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
           <a href="https://drive.google.com/file/d/11NUUhq0CY0UQ3SPSP5Im4mYGSch_ft6p/view?usp=sharing"><FaRegFilePdf  size={41} color='#2eabb2' id="icon"/></a>
         </Col>
       </Row>
     </Container>
   </div>


    );
  }
}

export default Contact;
