import React from "react";
import { ROUTER } from "../../utils/constants";
import { useHistory, useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {

  const history = useHistory();

  return (
    <Navbar className="header" expand="lg">
      <div className="header-container">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="#home">HOME</Nav.Link>
          <Nav.Link href="#link">ABOUT</Nav.Link>
          <NavDropdown title="DESIGNS" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">DESIGNS</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#link">CONTACT</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}

export default Header;