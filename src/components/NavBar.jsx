import React from "react";
import { Container, Navbar } from "react-bootstrap";
const NavBar = () => {
  return (
    <Navbar sticky="top" bg="warning" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Contact Form</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBar;
