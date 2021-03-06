import React from "react";
import logoImg from "../assets/img/LO(1).png";
import { Nav, Navbar, NavDropdown, Image } from "react-bootstrap";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import pdf from "../download/CV_LucasOlmos_DevSoftware.pdf";

function Header(props) {
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
      <Navbar.Brand onClick={refreshPage} className="navLinkPointer">
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
          <Navbar.Brand
            onClick={() => scroll.scrollToTop()}
            className="navLinkPointer"
          >
            Home
          </Navbar.Brand>
          <Link
            role="button"
            to="personalInfo"
            spy={true}
            smooth={true}
            duration={500}
            className="some-class nav-link navLinkPointer"
            activeClass="some-active-class"
          >
            Datos Personales
          </Link>
          <Link
            role="button"
            to="education"
            spy={true}
            smooth={true}
            duration={500}
            className="some-class nav-link navLinkPointer"
            activeClass="some-active-class"
          >
            Educación
          </Link>
          <Link
            role="button"
            to="workexperience"
            spy={true}
            smooth={true}
            duration={500}
            className="some-class nav-link navLinkPointer"
            activeClass="some-active-class"
          >
            Experiencia Laboral
          </Link>
          <Link
            role="button"
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
            className="some-class nav-link navLinkPointer"
            activeClass="some-active-class"
          >
            Skills
          </Link>
        </Nav>
        <NavDropdown
          className="navbar-nav drop1"
          title="Descargar"
          id="basic-nav-dropdown"
        >
          <NavDropdown.Item href={pdf} download target="_blank">
            CV.pdf
          </NavDropdown.Item>
        </NavDropdown>
        {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> */}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
