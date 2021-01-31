import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import './style.css'

function Navbars() {
  return (
    <>
    <Navbar bg="light" expand="lg" className="navbar--gradient">
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home" ><div className="navlink--style">HOME </div></Nav.Link>
          <Nav.Link href="#About us"><div className="navlink--style">SERVICES</div></Nav.Link>
          <NavDropdown  title="MIGRATION" id="basic-nav-dropdown">
            <NavDropdown.Item className="navlink--style-sub" href="#action/3.1">APPLY</NavDropdown.Item>
            <NavDropdown.Item className="navlink--style-sub" href="#action/3.2">VIEW FORM STATUS</NavDropdown.Item>
            <NavDropdown.Item className="navlink--style-sub" href="#action/3.3">REQUIREMENT DETAILS</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item className="navlink--style-sub" href="#action/3.4">COMPLAINT</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#About us"><div className="navlink--style">CONTACT US </div></Nav.Link>
          <Nav.Link href="#About us"><div className="navlink--style">ABOUT </div></Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Toggle className="toggler-design" aria-controls="basic-navbar-nav" />
    </Navbar>

    </>
  )
}

export default Navbars
