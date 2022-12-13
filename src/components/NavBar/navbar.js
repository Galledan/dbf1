import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function navbar() {
  return (
    <div>
       <Navbar collapseOnSelect={true} expand="lg" bg="black" variant="dark">
      <Container>
        <Navbar.Brand href="/">
            <img 
            src={require("../../assets/images/logo.png")}
            width="60"
            height="60"
            alt="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
          <Nav className="me-auto" style={{ fontFamily: 'F1'}}>
            <Nav.Link href="pilotlar">Pilotlar</Nav.Link>
            <Nav.Link href="kurallar">Kurallar</Nav.Link>
            <Nav.Link href="sezonlar">Geçmiş Sezonlar</Nav.Link>
            <Nav.Link href="admin">Admin</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default navbar;
