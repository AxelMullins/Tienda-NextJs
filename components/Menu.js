import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Menu = () => {
  return (
    <header>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Link href="/">
            <a>
              <Image
                src="http://localhost:3000/img/logoAxel.png"
                alt="Logo Axel"
                width={40}
                height={40}
              />
            </a>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto gap-3 ms-3 text-white">
              <Link href="/">
                <a>Home</a>
              </Link>
              <Link href="/store">
                <a>Tienda</a>
              </Link>
              <Link href="/contacto">
                <a>Contacto</a>
              </Link>
            </Nav>
          </Navbar.Collapse>
          <a href="#" className="text-white">
            Cart (0)
          </a>
        </Container>
      </Navbar>
    </header>
  );
};

export default Menu;
