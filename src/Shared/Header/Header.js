import React from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Logo from '../../assest/logo/tutor-by-arsalart-dribbble.png'
import './Header.css'

const Header = () => {
    return (
        <Navbar  expand="lg" >
      <Container className='header'>
        <Image src={Logo} roundedCircle className='logo'></Image>
        <Navbar.Brand as={Link} to='/'><span className='title'>Learning Mate</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='text-primary fw-bolder' as={Link} to='/courses'>Courses</Nav.Link>
            <Nav.Link className='text-primary fw-bolder' href="#pricing">FAQ</Nav.Link>
            <Nav.Link className='text-primary fw-bolder' href="#pricing">Blog</Nav.Link>
            <Nav.Link className='text-primary fw-bolder' href="#pricing">toggle theme</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className='text-primary fw-bolder' href="#deets">More deets</Nav.Link>
            <Nav.Link className='text-primary fw-bolder' eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;