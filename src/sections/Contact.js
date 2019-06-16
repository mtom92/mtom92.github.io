import React , {Component} from 'react';
import { FaGithubAlt , FaLinkedin, FaRegEnvelope, FaTwitter } from "react-icons/fa";
import { Container, Row, Col } from 'reactstrap';
import '../App.css';

class Contact extends Component {
  render(){
     return (

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


    );
  }
}

export default Contact;
