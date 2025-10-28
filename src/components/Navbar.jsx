import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar as BsNavbar, Container, Nav } from "react-bootstrap";

const Navbar = () => {
  const location = useLocation();

  return (
    <BsNavbar expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <BsNavbar.Brand as={Link} to="/">
          <strong>Udeshya Kumar</strong>
        </BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BsNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              active={location.pathname === "/"}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/about" 
              active={location.pathname === "/about"}
            >
              About
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/projects" 
              active={location.pathname === "/projects"}
            >
              Projects
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/contact" 
              active={location.pathname === "/contact"}
            >
              Contact
            </Nav.Link>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
};

export default Navbar;
