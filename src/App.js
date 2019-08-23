import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './sections/Nav'
import Banner from './sections/Banner'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import {BrowserRouter as Router, Route , Link } from 'react-router-dom'
import Particles from 'react-particles-js';


function App() {
  return (
    <div className="App">
       <Particles
         height="520px"
         params={{
           "particles": {
             "number": {
               "value": 200,
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

      <Banner/>

      <About />

      <Projects />
      <Contact />
    </div>
  );
}

export default App;
