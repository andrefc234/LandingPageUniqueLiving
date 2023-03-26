import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

export default function index() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', backgroundColor: 'black' }}>
      <Navbar variant="white" fixed="top" style={{ backgroundColor: 'rgba(191, 128, 107, 0.8)', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
        <div className="d-flex justify-content-start align-items-center">
          <Navbar.Brand href="#" >
            <img
              alt=""
              src="/assets/logo04_11.jpg"
              width="139px"
              height="47px"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        </div>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className="mr-auto"></Nav>
          <Nav className="justify-content-end">
            <Nav.Link href="#about" className="text-white font-weight-bold">Servicios</Nav.Link>
            <Nav.Link href="#services" className="text-white">Preventa</Nav.Link>
            <Button variant='secondary' style={{ backgroundColor: '#EADC8C', outlineColor: '#EADC8C' }}>Contacto</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
