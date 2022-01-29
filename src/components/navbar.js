import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../images/aslogo.WebP";
import MegaMenu from "./megaMenu";
import DarkTheme from "./darkMode";

function NavBar() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt="logo"
            src={logo}
            width="100"
            className="d-inline-block align-top"
          />{" "}
          Ahmed Saleh
        </Navbar.Brand>

        <Nav as="ul">
          <Nav.Item as="li">
            <Nav.Link href="#articles">Articles</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="#gallery">Gallery</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="#features">Features</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="#megamenu">Other Links</Nav.Link>
            <MegaMenu />
          </Nav.Item>
          <DarkTheme />
        </Nav>
      </Container>
    </Navbar>
  );
}
export default NavBar;
