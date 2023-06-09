import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

export default function index() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', backgroundColor: 'black' }}>
      <Navbar variant="white" fixed="top" style={{ backgroundColor: 'rgba(191, 128, 107, 0.8)', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }} expand='lg'>
        <div className="d-flex justify-content-start align-items-center">
          <Navbar.Brand href="/" >
            <img
              alt=""
              src="/assets/logo04_11.jpg"
              width="139px"
              height="47px"
              className="d-inline-block align-top"
              style={{
                marginLeft:'5rem'
              }}
            />
          </Navbar.Brand>
        </div>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className="mr-auto"></Nav>
          <Nav className="justify-content-end" style={{marginRight:'5rem'}}>
            <Nav.Link href="/servicios" className="text-white font-weight-bold "style={{fontFamily:'Montserrat',fontWeight:1000}}>Servicios</Nav.Link>
            <Nav.Link href="/preventa" className="text-white "style={{fontFamily:'Montserrat',fontWeight:1000}}>Preventa</Nav.Link>
            <Nav.Link href="/interiorismo" className="text-white "style={{fontFamily:'Montserrat',fontWeight:1000}}>Interiorismo</Nav.Link>
            <Nav.Link href="/disenio" className="text-white "style={{fontFamily:'Montserrat',fontWeight:1000}}>Arquitectura</Nav.Link>
            <Button variant='secondary' className='px-5 mx-4 text-dark'style={{ backgroundColor: '#EADC8C',fontWeight:1000, outlineColor: '#EADC8C',fontFamily:'Montserrat' }}>Contacto</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
