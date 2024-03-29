import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">5 Jobs That Interest Me</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
          <Nav.Link as={Link} to={"/Nintendo"}>Nintendo</Nav.Link>
          <Nav.Link as={Link} to={"/Google"}>Google</Nav.Link>
          <Nav.Link as={Link} to={"/SpaceX"}>SpaceX</Nav.Link>
          <Nav.Link as={Link} to={"/Nvidia"}>Nvidia</Nav.Link>
          <Nav.Link as={Link} to={"/NASA"}>NASA</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavbarComponent