import React from "react";
import { Button, Nav, Navbar, NavDropdown } from "react-bootstrap";

function Menu(props) {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Home</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Datos Personales</Nav.Link>
        <Nav.Link href="#education">Educacion</Nav.Link>
        <Nav.Link href="#workexperience">Experiencia Laboral</Nav.Link>
        <Nav.Link href="#qualifications">Cualificaciones</Nav.Link>
        <NavDropdown title="Descargar" id="basic-nav-dropdown">
          <NavDropdown.Item href="#download">cuurriculum.pdf</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
}

export default Menu;
