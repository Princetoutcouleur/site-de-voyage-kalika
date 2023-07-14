import './navbar.css'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {MdOutlineTravelExplore} from 'react-icons/md'
import Button from "react-bootstrap/Button";

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container>
        <Navbar.Brand
          href="#home"
          className="logo fw-bold"
          data-aos="fade-right"
        >
          <MdOutlineTravelExplore className="icone" />
          Travel.
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" data-aos="fade-down">
              Home
            </Nav.Link>
            <Nav.Link href="#link" data-aos="fade-down">
              Package
            </Nav.Link>
            <Nav.Link href="#home" data-aos="fade-down">
              Shop
            </Nav.Link>
            <Nav.Link href="#link" data-aos="fade-down">
              About
            </Nav.Link>
            <Nav.Link href="#home" data-aos="fade-down">
              Pages
            </Nav.Link>
            <Nav.Link href="#link" data-aos="fade-down">
              News
            </Nav.Link>
            <Nav.Link href="#link" data-aos="fade-down">
              Contact
            </Nav.Link>
          </Nav>
          <Button className="bouton" data-aos="fade-down">
            BOOK NOW
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
