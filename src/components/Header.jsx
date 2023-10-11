import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, animateScroll as scroll } from 'react-scroll';

import './Header.css';
import img3 from '../img/logo.jpg';

export default function Header() {
  return (
    <div className="head">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <div className="logo-container mx-auto text-center">
            {/* Correct the typo from "herf" to "href" here */}
            <Nav.Link href="">
              <img
                alt=""
                src={img3}
                width="80"
                height="80"
                className="d-inline-block align-top logo-image"
              />
            </Nav.Link>
          </div>
          <Navbar.Collapse id="navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link>
                <Link to="home" spy={true} smooth={true} offset={-70} duration={500}>
                  Home
                </Link>
              </Nav.Link>
              
              <Nav.Link>
                <Link to="services" spy={true} smooth={true} offset={-70} duration={500}>
                  Services
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
                  About
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
                  Contact
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
