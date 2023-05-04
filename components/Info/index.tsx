
import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import styled from 'styled-components';
import { FaWhatsapp, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';

const ContactListWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
interface ContactProp{
  instagram:string;
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
}
const Horario: React.FC = () => {
  return (
    <HorarioWrapper>
      Horario:
      <br />
      <HorarioText>Lunes-Viernes: 9:00hrs-19:00hrs</HorarioText>
      <br />
      <HorarioText>Sabado: 10:00hrs-14:00hrs</HorarioText>
    </HorarioWrapper>
  );
}
const ContactList = ({instagram}:ContactProp) => {
  return (
    <ContactListWrapper>
      <ContactItemWrapper>
        <ContactIcon><FaWhatsapp color='#BF806B' /></ContactIcon>
        
        <ContactLink href="https://www.whatsapp.com/"> +1-555-123-4567</ContactLink>
      </ContactItemWrapper>
      <ContactItemWrapper>
        <ContactIcon><FaFacebook color='#BF806B'/></ContactIcon>
     
        <ContactLink href="https://www.facebook.com/"> Unique Living</ContactLink>
      </ContactItemWrapper>
      <ContactItemWrapper>
        <ContactIcon><FaInstagram color='#BF806B'/></ContactIcon>
       
        <ContactLink href="https://www.instagram.com/"> {instagram}</ContactLink>
      </ContactItemWrapper>
      <ContactItemWrapper>
        <ContactIcon><FaEnvelope color='#BF806B'/></ContactIcon>
     
        <ContactLink href="mailto:example@mail.com"> example@mail.com</ContactLink>
      </ContactItemWrapper>
    </ContactListWrapper>
  );
};
export default function index() {
  return (
    <>
    <Container style={{marginLeft:'15%', padding:'2%'}} fluid>
      <Row>
        <Col>
        <ContactList instagram={'test'}/>
        </Col>
        <Col>
        <Row style={{marginTop:'-1%'}}>
        <Horario/>
        </Row>
        <Row className='my-3'>
    <Address/>
        </Row>
        </Col>
      </Row>
      
    </Container>
    
    </>
  )
}
