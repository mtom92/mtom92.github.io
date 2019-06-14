import React , {Component} from 'react';
import { Container, Row, Col,Card, Button, CardTitle, CardTextCard, CardImg, CardText, CardBody, CardLink,
   CardSubtitle  } from 'reactstrap';
import { FaGithub , FaGlobeAmericas, FaRegEnvelope, FaTwitter } from "react-icons/fa";
import '../App.css';
import {BrowserRouter as Link } from 'react-router-dom'
import project1 from '../imgs/project1.gif';
import project2 from '../imgs/project2.gif';
import project3 from '../imgs/project3.gif';
import project4 from '../imgs/project4.gif';

class Projects extends Component {
  render(){
     return (

    <div>
    <Container id="projects">
      <Row>
        <Col>
          <h1 id="title">Projects</h1>
          <h6>Pieces of my work</h6>
          <span className="animate-border ml-auto mr-auto"></span>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row className="row_cards">
            <Col lg="6" className="col_cards">
              <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                <CardBody>
                  <CardTitle id="titlecard">Mercadito</CardTitle>
                </CardBody>
                <img height="400px"  src={project4} alt="Card image cap" />
                <CardBody>
                  <CardText id="block_info" >Mercadito is Hispanic-owned business directory website. Business owners can
                    register their business and users can search the directory, and save their favorites to their profile. </CardText>
                    <Row>
                      <a href="https://github.com/mtom92/mercadito" ><FaGithub size={28} color='#2eabb2' id="oneicon"/></a>
                      <a href="https://django-mercadito.herokuapp.com/" class="active"><FaGlobeAmericas size={28} color='#2eabb2' id="twoicon"/></a>
                    </Row>
                </CardBody>
                </Card>
            </Col>

            <Col lg="6" className="col_cards" >
              <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                <CardBody>
                  <CardTitle id="titlecard">JobDev</CardTitle>
                </CardBody>
                <img height="400px"src={project2} alt="Card image cap" />
                <CardBody>
                  <CardText id="block_info">This app helps people search for jobs, determine how well their skillset
                     matches those required for the job, and create a track record of job applications.</CardText>
                    <Row>
                      <a href="https://github.com/mtom92/Project2"><FaGithub size={28} color='#2eabb2' id="oneicon"/></a>
                      <a href="https://jobdev.herokuapp.com/"><FaGlobeAmericas size={28} color='#2eabb2' id="twoicon"/></a>
                    </Row>
                </CardBody>
                </Card>
            </Col>

          </Row>
          <Row className="row_cards">
            <Col lg="6" className="col_cards">
              <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                <CardBody>
                  <CardTitle id="titlecard">Space Adventure </CardTitle>
                </CardBody>
                <img height="400px" src={project1} alt="Card image cap" />
                <CardBody>
                  <CardText id="block_info">The goal of this platforms game is to avoid obstacles and enemies to get
                    a key that opens a box. I used Phaser3
                    gaming library to work with gaming physics like collision and gravity.</CardText>
                    <Row>
                      <a href="https://github.com/mtom92/Project-1"><FaGithub size={28} color='#2eabb2' id="oneicon"/></a>
                      <a href="https://mtom92.github.io/Project-1/"><FaGlobeAmericas size={28} color='#2eabb2' id="twoicon"/></a>
                    </Row>
                </CardBody>
                </Card>
            </Col>

            <Col lg="6" className="col_cards" >
              <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                <CardBody>
                  <CardTitle id="titlecard">Kero</CardTitle>
                </CardBody>
                <img height="400px" src={project3} alt="Card image cap" />
                <CardBody>
                  <CardText id="block_info">Kero is an app that enables IT teams to manage their sprints, visualize the goals of the sprint, and
                    track the team´s progress toward achieving project goals.</CardText>
                    <Row>
                      <a href="https://github.com/mtom92/kero"><FaGithub size={28} color='#2eabb2' id="oneicon"/></a>
                      <a href="http://kerokero.herokuapp.com/"><FaGlobeAmericas size={28} color='#2eabb2' id="twoicon"/></a>
                    </Row>
                </CardBody>
                </Card>
            </Col>


          </Row>
        </Col>
      </Row>

    </Container>


     </div>

    );
  }
}

export default Projects;
