import React from "react";
import { Button, Image, Tooltip } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Logo from "../../assest/logo/tutor-by-arsalart-dribbble.png";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import "./Header.css";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { FaUser } from "react-icons/fa";
import ReactTooltip from 'react-tooltip';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .then((error) => console.error(error));
  };

  const [theme, setTheme] = useState("");

  const handleLightTheme = () => {
    setTheme("Light");
  };
  const handleDarkTheme = () => {
    setTheme("Dark");
  };
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
              <BsFillSunFill
                className="toggle"
                onClick={handleLightTheme}
              ></BsFillSunFill>
              <BsFillMoonFill
                className="toggle"
                onClick={handleDarkTheme}
              ></BsFillMoonFill>
            </div>
          </div>
          <Nav>
            <Nav.Link>
              {user?.uid ? (
                <>
                  <div>
                    {/* <span>{user.displayName}</span> */}
                    <Button variant="outline-info mx-2" onClick={handleLogOut}>
                      Log out
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <Button as={Link} to="/signIn" variant="outline-info mx-2">
                      Sign in
                    </Button>
                    <Button
                      as={Link}
                      to="/signup"
                      variant="outline-danger mx-2"
                    >
                      Sign up
                    </Button>
                  </div>
                </>
              )}
            </Nav.Link>
            <Nav.Link className="text-primary fw-bolder">
              {user?.photoURL ? (
                <div>
                  <Image
                      data-tip={user?.displayName}
                      roundedCircle
                      style={{ height: "30px" }}
                      src={user?.photoURL}
                    ></Image>
                    
                </div>
              ) : (
                <div>
                  <FaUser
                  data-tip={user?.displayName ? user.displayName : 'No UserName'}
                  ></FaUser>
                </div>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <ReactTooltip />
      </Container>
    </Navbar>
  );
};

export default Header;
