import React , {Component} from 'react';
import { Jumbotron , Container, Row, Col} from 'reactstrap';
import { FaGitSquare , FaJsSquare, FaHtml5, FaNodeJs, FaReact, FaPython } from "react-icons/fa";
import { DiPostgresql} from "react-icons/di";
import '../App.css';
import pic from '../imgs/miguel_pic.jpg';

class Banner extends Component {
  render(){
     return (

    <div >
      <section id="header">
                <div className="jumbotron ">
                    <div className="container">
                        <div className="col-12">
                            <div className="card bg-dark shadow-lg">
                            <div className="card-body bg-info about">
                                <div className="row">
                                <div className="col-md-3 col-xs-12 d-flex justify-content-center">
                                    <img  id="pic" src={pic}  className="shadow-lg p-2 photo" alt="Mahipat Jadav" />
                                </div>
                                <div className="col-md-9 col-xs-12 about-text">
                                    <h1 className="card-text text-black">Hi, I'm Miguel Torres</h1>
                                    <h4 className="card-text text-black">Full stack developer 👨🏾‍💻 </h4>
                                    <hr/>
                                    <h4>
                                    <div>
                                        <FaGitSquare size={42} color='#266063' id="icon"/>
                                        <FaJsSquare size={42} color='#266063' id="icon"/>
                                        <DiPostgresql size={42} color='#266063' id="icon"/>
                                        <FaHtml5 size={42} color='#266063' id="icon"/>
                                        <FaNodeJs size={42} color='#266063' id="icon"/>
                                        <FaReact  size={42} color='#266063' id="icon"/>
                                        <FaPython size={42} color='#266063' id="icon"/>
                                    </div>

                                    </h4>
                                </div>
                                </div>
                            </div>
                            <div className="card-body2 bg-dark shadow-lg">
                                <h5 className="card-title">My Toolbox</h5>
                                <h2 className="card-text">JavaScript   |   Node.js   |   React   |    Python   |   Django   |    PostgreSQL   |  Mongo  | HTML+CSS |  Git   |    Bootstrap     |    Materialize  |     Salesforces    |    Scrum  |  </h2>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
     </div>

    );
  }
}

export default Banner;
