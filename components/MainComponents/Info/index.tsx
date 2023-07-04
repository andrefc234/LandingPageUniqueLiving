import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
} from 'react-icons/fa';
import Image from 'next/image';

const ContactListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
  }
`;

const ContactItemWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const ContactIcon = styled.div`
  margin-right: 8px;
  font-size: 24px;
  color: #333;
`;

const ContactTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

const ContactLink = styled.a`
  font-size: 16px;
  color: #333;
  transition: color 0.2s ease-in-out;
  font-family: 'Montserrat';
  &:hover {
    color: #00bcd4;
  }
`;

interface ContactProp {
  instagram: string;
}

const HorarioWrapper = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const HorarioText = styled.span`
  font-weight: normal;
  font-family: 'Raleway';
`;

const AddressWrapper = styled.div`
  font-size: 16px;
  margin-bottom: 8px;
  font-weight: bold;
`;

const AddressText = styled.span`
  font-weight: normal;
  font-family: 'Raleway';
`;

const Address: React.FC = () => {
  return (
    <AddressWrapper>
      Dirección:
      <br />
      <AddressText>Blvd. Bernardo Quintana 9691,Local 9 y 10</AddressText>
      <br />
      <AddressText>Centro Sur</AddressText>
      <br />
      <AddressText>76090</AddressText>
      <br />
      <AddressText>Santiago de Querétaro, Qro, México</AddressText>
    </AddressWrapper>
  );
};
const Horario: React.FC = () => {
  return (
    <HorarioWrapper>
      Horario:
      <br />
      <HorarioText>Lunes-Viernes: 9:00hrs-19:00hrs</HorarioText>
      <br />
      
    </HorarioWrapper>
  );
};
const ContactList = ({ instagram }: ContactProp) => {
  return (
    <ContactListWrapper>
      <ContactItemWrapper>
        <ContactIcon>
          <FaWhatsapp color="#BF806B" />
        </ContactIcon>

        <ContactLink
          href="https://api.whatsapp.com/send?phone=4427492083"
          target="_blank"
        >
          {' '}
          442 749 2083
        </ContactLink>
      </ContactItemWrapper>
      <ContactItemWrapper>
        <ContactIcon>
          <FaFacebook color="#BF806B" />
        </ContactIcon>

        <ContactLink
          href="https://www.facebook.com/uniquelivingqro"
          target="_blank"
        >
          {' '}
          Unique Living
        </ContactLink>
      </ContactItemWrapper>
      <ContactItemWrapper>
        <ContactIcon>
          <FaInstagram color="#BF806B" />
        </ContactIcon>

        <ContactLink
          href="https://www.instagram.com/uniqueliving_qro/"
          target="_blank"
        >
          {' '}
          uniqueliving_qro
        </ContactLink>
      </ContactItemWrapper>
      <ContactItemWrapper>
        <ContactIcon>
          <FaEnvelope color="#BF806B" />
        </ContactIcon>

        <ContactLink href="mailto:example@mail.com" target="_blank">
          {' '}
           ventas@unique-living.com.mx
        </ContactLink>
      </ContactItemWrapper>
    </ContactListWrapper>
  );
};
export default function index() {
  return (
    <>
      <Container style={{ marginLeft: '', padding: '5%' }} fluid> 

        <hr style={{ height: '5px',
 
 
  backgroundColor: 'black',
  border: 'none'}}/>
        <div className='d-flex align-items-center justify-content-center my-5'><Image src='/assets/logo6.png' alt='' width={300} height={100}/></div>
        <div className=' align-items-center justify-content-center'>
        <Row>
          <Col className=' align-items-center justify-content-center text-center' >
            <ContactList instagram={'test'} />
          </Col>
          <Col >
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14942.508440802196!2d-100.356531!3d20.5624325!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x72582271fbbad697!2sUnique%20Living%20-%20Arquitectura%20e%20Interiorismo!5e0!3m2!1ses!2smx!4v1672865353461!5m2!1ses!2smx"   loading="lazy"  width="500" height="300"></iframe>
            </Col>
          <Col >
            <Row style={{ marginTop: '-1%' }}>
              <Horario />
            </Row>
            
            <Row className="my-3">
              <Address />
            </Row>
          </Col>
        </Row>
        
        </div>
        <hr/>
      <div className='d-flex align-items-center justify-content-center'>
      <p style={{fontFamily:'Raleway'}}>© 2023 Unique Living || Todos los derechos reservados || Aviso de privacidad</p>
      </div>
      </Container>
    </>
  );
}
