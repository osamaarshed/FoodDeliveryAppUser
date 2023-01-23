import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const Header = () => {
  const removeJwt = () => {
    localStorage.removeItem("userJwtToken");
  };
  const jwttoken = localStorage.getItem("userJwtToken");

  return (
    <>
      {jwttoken ? (
        <>
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="#home">Food Delivery App</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link>
                    <NavLink
                      to="/menu"
                      className="text-secondary text-decoration-none"
                    >
                      Menu
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink
                      to="/myorders"
                      className="text-secondary text-decoration-none"
                    >
                      My Orders
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink
                      to="/about"
                      className="text-secondary text-decoration-none"
                    >
                      About
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink
                      to="/contact"
                      className="text-secondary text-decoration-none"
                    >
                      Contact
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink
                      to="/cart"
                      className="text-secondary text-decoration-none"
                    >
                      Cart
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink
                      to="/login"
                      className="text-secondary text-decoration-none"
                      onClick={removeJwt}
                    >
                      Logout
                    </NavLink>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
      ) : (
        <>
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="#home">Food Delivery App</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link>
                    <NavLink
                      to="/menu"
                      className="text-secondary text-decoration-none"
                    >
                      Menu
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink
                      to="/about"
                      className="text-secondary text-decoration-none"
                    >
                      About
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink
                      to="/contact"
                      className="text-secondary text-decoration-none"
                    >
                      Contact
                    </NavLink>
                  </Nav.Link>

                  <Nav.Link>
                    <NavLink
                      to="/login"
                      className="text-secondary text-decoration-none"
                    >
                      Login
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink
                      to="/signup"
                      className="text-secondary text-decoration-none"
                    >
                      Signup
                    </NavLink>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
      )}
    </>
  );
};

export default Header;
