import React , {Component} from 'react';
import { Jumbotron , Container, Row, Col} from 'reactstrap';
import { FaGitSquare , FaJsSquare, FaHtml5, FaNodeJs, FaReact, FaPython } from "react-icons/fa";
import { DiPostgresql} from "react-icons/di";
import TextLoop from "react-text-loop";
import '../App.css';
import pic from '../imgs/miguel_pic.jpg';

class Banner extends Component {
  render(){
     return (

    <div >
      <section id="header">

                    <Container>
                        <div className="col-12">
                            <div className="card shadow-lg">
                            <div className="card-body about">
                                <div className="row">
                                <div className="col-md-3 col-xs-12 ">
                                    <img  id="pic" src={pic}  className="shadow-lg p-2"  />
                                </div>
                                <div className="col-md-9 col-xs-12 about-text">
                                    <div>
                                      <h1 >Hi, I'm Miguel Torres</h1>
                                    </div>
                                    <hr/>
                                    <div>
                                      <h4>
                                        <FaGitSquare size={42} color='#266063' id="icon"/>
                                        <FaJsSquare size={42} color='#266063' id="icon"/>
                                        <DiPostgresql size={42} color='#266063' id="icon"/>
                                        <FaHtml5 size={42} color='#266063' id="icon"/>
                                        <FaNodeJs size={42} color='#266063' id="icon"/>
                                        <FaReact  size={42} color='#266063' id="icon"/>
                                        <FaPython size={42} color='#266063' id="icon"/>
                                      </h4>
                                    </div>
                                    <div>
                                      <Row>
                                        <Col lg="3"></Col>
                                        <Col lg="3">
                                          <h2 id="message">
                                            <TextLoop noWrap="false" springConfig={{ stiffness: 190, damping: 20 ,precision:0.1}}
                                              children={["I am Web Developer 👨🏾‍💻", "Engineer 👨🏾‍🔧🤖 ", "Scrum master 👨🏾‍💼🤜🏽🤛🏾 ","Mexican 🙎🏾‍♂️🇲🇽 ", "Human being  🤷🏾‍♂️ "]} />

                                          </h2>
                                        </Col>
                                        <Col lg="3"></Col>
                                      </Row>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div class="card-body bg-dark shadow-lg">
                              <h5 class="card-title">My Toolbox</h5>
                              <h2 class="card1-text">Javascript, HTML5, CSS3, ReactJS, NodeJS, Bootstrap, DB(Mongodb, Postgresql), Django, Python, Materialize, Salesforces.</h2>
                            </div>
                            </div>
                        </div>
                    </Container>

            </section>
     </div>

    );
  }
}

export default Banner;
