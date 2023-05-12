import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './Header.css'

function Header() {
  return (
    <Navbar>
      <Container>
        <Navbar href="/"><span>Ray-Ban</span></Navbar>
        <Navbar id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/Profile">Profile</Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </Navbar>
  );
}

export default Header;