import React from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Logo from "../../assest/logo/tutor-by-arsalart-dribbble.png";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import "./Header.css";
import { useState } from "react";

const Header = () => {

  const [theme,setTheme] =useState('')

  const handleLightTheme = () =>{
    setTheme('Light')
  }
  const handleDarkTheme = () =>{
    setTheme('Dark')
  }
  return (
    <Navbar expand="lg">
      <Container className="header mb-3">
        <Image src={Logo} roundedCircle className="logo"></Image>
        <Navbar.Brand as={Link} to="/">
          <span className="title">Learning Mate</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              className="text-primary fw-bolder"
              as={Link}
              to="/courses"
            >
              Courses
            </Nav.Link>
            <Nav.Link className="text-primary fw-bolder" as={Link} to="/faq">
            FAQ
            </Nav.Link>
            <Nav.Link className="text-primary fw-bolder" as={Link} to="blog">
              Blog
            </Nav.Link>
            </Nav>
            <div className="d-flex align-items-center justify-content-center">
            <p className="theme text-primary">{theme}</p>
              <div>
                <BsFillSunFill className="toggle" onClick={handleLightTheme} ></BsFillSunFill>
                <BsFillMoonFill className="toggle" onClick={handleDarkTheme} ></BsFillMoonFill>
              </div>
            </div>
          <Nav>
            <Nav.Link as={Link} to='/signup' className="text-primary fw-bolder" >
              Signup
            </Nav.Link>
            <Nav.Link as={Link} to='/signIn' className="text-primary fw-bolder" >
              Login
            </Nav.Link>
            <Nav.Link
              className="text-primary fw-bolder"
              eventKey={2}
              href="#memes"
            >
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
