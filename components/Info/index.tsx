import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: white;
`;

const Description = styled.p`
  font-size: 1.3rem;
  text-align: center;
  margin: 1rem 0;
 
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 2rem;
`;

const MapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 2rem;
`;

const MapImage = styled.img`
  width: 100%;
  max-width: 300px;
  margin-bottom: 1rem;
`;

const Address = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const HoursWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const HoursTitle = styled.i`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const HoursText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const ContactWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
  @media only screen and (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;

const ContactIcon = styled.img`
  width: 2rem;
  margin-right: 1rem;
`;

const ContactText = styled.p`
  font-size: 1.2rem;
`;

function Info() {
  return (
    <Container>
      <Description className='px-5 py-2'>
        Unique Living es más que un estudio arquitectónico y diseño de
        interiores, somos amantes de los procesos creativos. Buscamos que las
        emociones se queden proyectadas dentro de cada diseño creado.
      </Description>
      <Description className='px-5 py-2'>
        A través de un proceso simple queremos captar la esencia de nuestros
        clientes y así crear un reflejo arquitectónico en el cual puedas sentir
        un espacio único y quedar enamorado.
      </Description>
      <InfoWrapper>
        <MapWrapper>
          <MapImage src="/assets/mapsicleMap.jpg" alt="Map" />
          <Address>
            Blvd. Bernardo Quintana 9691, Local 9 y 10, Centro Sur, 76090
            Santiago de Querétaro, Qro.
          </Address>
        </MapWrapper>
        <HoursWrapper>
          <HoursTitle>Horarios</HoursTitle>
          <HoursText>
            <i>Lunes-Viernes</i>
            <br />
            9:00am-15:00pm
          </HoursText>
          <HoursText>
            <i>Sábado</i>
            <br />
            10:00am-14:00pm
          </HoursText>
        </HoursWrapper>
      </InfoWrapper>
      <ContactWrapper>
        <ContactItem>
          <ContactIcon src="/assets/whatsApp.jpg" alt="Phone" />
          <ContactText>4427492083</ContactText>
        </ContactItem>
        <ContactItem>
          <ContactIcon src="/assets/facebook.jpg" alt="Email" />
          <ContactText>Unique Living</ContactText>
        </ContactItem>
        <ContactItem>
          <ContactIcon src="/assets/instagram.jpg" alt="Twitter" />
          <ContactText>@uniqueliving_qro</ContactText>
        </ContactItem>
        <ContactItem>
          <ContactIcon src="/assets/mail.jpg" alt="Facebook" />
          <ContactText>ventas@unique-living.mx</ContactText>
        </ContactItem>
      </ContactWrapper>
    </Container>
  );
}

export default Info;