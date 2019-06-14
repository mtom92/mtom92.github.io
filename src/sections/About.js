import React , {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../App.css';

class About extends Component {
  render(){
     return (

    <div>
       <Container id="about">
         <h1 id="title" >About Me </h1>
         <span className="animate-border ml-auto mr-auto"></span>
         <div class="block_info">
           <p className="aboutme_info">I am a full stack web developer with knowledge in agile and waterfall methodologies
             for project management who loves to learn about new technologies and how
             to implement them. I truly enjoy solving problems and sharing my knowledge on a team to improve a product.</p>
           <p className="aboutme_info">Prior start learning Web Development, I worked as a Project Manager for a consulting
             company that develops projects using Salesforce. During my time there, I learned how
             to use Salesforce and developed an app, which sparked my interest in moving into app development full time.
           </p>
         </div>
       </Container>
    </div>

    );
  }
}

export default About;
