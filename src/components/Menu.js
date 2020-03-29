import React from "react";
import logoImg from "../assets/img/LO(1).png";
import {
  Button,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Image
} from "react-bootstrap";

function Menu(props) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">
        <Image
          src={logoImg}
          width="35"
          height="30"
          className="d-inline-block align-top"
          alt=""
          roundedCircle
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav.Link href="#home">Datos Personales</Nav.Link>
          <Nav.Link href="#education">Educacion</Nav.Link>
          <Nav.Link href="#workexperience">Experiencia Laboral</Nav.Link>
          <Nav.Link href="#qualifications">Skills</Nav.Link>
        </Nav>
        <NavDropdown
          className="navbar-nav drop1"
          title="Descargar"
          id="basic-nav-dropdown"
        >
          <NavDropdown.Item href="#action/3.1">CV.pdf</NavDropdown.Item>
        </NavDropdown>
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form> */}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;
