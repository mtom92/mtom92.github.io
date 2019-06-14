import React from 'react';
import {BrowserRouter as Router, Route , Link } from 'react-router-dom'
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Nav>
          <NavLink href="#about">About</NavLink> <NavLink href="#projects">Projects</NavLink> <NavLink href="#contact">Contact</NavLink>
        </Nav>
      </div>
    );
  }
}
