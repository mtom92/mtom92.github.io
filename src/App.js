import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './sections/Nav'
import Banner from './sections/Banner'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import {BrowserRouter as Router, Route , Link } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Nav />
        </div>
      </Router>
      <Banner />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
