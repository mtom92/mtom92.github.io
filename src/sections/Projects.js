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
import Particles from 'react-particles-js';

class Projects extends Component {
  render(){
     return (

    <div>
    <Container id="projects">
      <Row>
        <Col>
          <div class="sections_header">
            <h1 id="title">Projects</h1>
            <h6>Pieces of my work</h6>
          </div>
          <span className="animate-border ml-auto mr-auto"></span>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row className="row_cards">
            <Col lg="6" className="col_cards">
              <Card body  style={{ backgroundColor: '#333', borderColor: '#333' }}>
                <CardBody>
                  <CardTitle id="titlecard">Mercadito</CardTitle>
                </CardBody>
                <img className="project_img"  src={project4} alt="Card image cap" />
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
              <Card body  style={{ backgroundColor: '#333', borderColor: '#333' }}>
                <CardBody>
                  <CardTitle id="titlecard">JobDev</CardTitle>
                </CardBody>
                <img className="project_img" src={project2} alt="Card image cap" />
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
        </Col>
      </Row>
    </Container>
    <Particles
      height="800px"
      params={{
        "particles": {
          "number": {
            "value": 156,
            "density": {
              "enable": true,
              "value_area": 1000.0624057955
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
        "retina_detect": true
      }}>
    </Particles>
     <Container>
      <Row>
        <Col>
          <Row className="row_cards">
            <Col lg="6" className="col_cards">
              <Card body style={{ backgroundColor: '#333', borderColor: '#333' }}>
                <CardBody>
                  <CardTitle id="titlecard">Space Adventure </CardTitle>
                </CardBody>
                      <img className="project_img"  src={project1} alt="Card image cap" />
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
              <Card body  style={{ backgroundColor: '#333', borderColor: '#333' }}>
                <CardBody>
                  <CardTitle id="titlecard">Kero</CardTitle>
                </CardBody>
                <img className="project_img" src={project3} alt="Card image cap" />
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
