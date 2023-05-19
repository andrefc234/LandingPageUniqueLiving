import React from 'react';
import styled from 'styled-components';
import Mosaico from '../../MainComponents/Mosaico';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 20px;
  margin-top: 7%;
  margin-bottom: 7%;
  margin-left: 4%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-left: 10%;
    margin-right: 10%;
  }
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-right: 10%;
    margin-bottom: 0;
    align-items: flex-start;
  }
`;
const Title = styled.h2`
  text-align: center;
  white-space: nowrap;
  margin-bottom: 20px;
  font-family: 'Montserrat';
  font-size: 1.2rem;
  line-height: 1.5;

  @media screen and (min-width: 768px) {
    text-align: left;
    margin-bottom: 30px;
    font-size: 1.5rem;
    line-height: 1.2;
  }
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  margin: 1% 0;
  width: 100%;
  max-width: 200px;
  font-size: 1.1rem;
  white-space: nowrap;
  font-family: 'Raleway';
  font-weight: bold;

  @media screen and (min-width: 768px) {
    width: 100%;
    max-width: 250px;
  }
`;

const Icon = styled.img`
  width: 60px;
  height: 60px;

  @media screen and (min-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

const Text = styled.p`
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

const Image = styled.img`
  margin-top: 5%;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 90%;
    height: 75%;
    margin-top: 0;
  }
`;

const StyledSpan = styled.span`
  color: #bf806b;
  font-family: 'Montserrat';
`;

const MyComponent = () => {
  return (
    <>
      <Mosaico
        paragraph={'Creamos juntos el '}
        paragraph2={
          <>
            que <br /> siempre
          </>
        }
        styledspan1="concepto"
        styledspan2="soñaste"
      />

      <Container>
        <LeftSide>
          <ListItem>
            <Icon src="assets/arq.png" alt="icono1" />
            <Text>Diseño arquitectónico</Text>
          </ListItem>
          <ListItem>
            <Icon src="assets/doc.png" alt="icono2" />
            <Text>Crédito y escrituración</Text>
          </ListItem>
          <ListItem>
            <Icon src="assets/hall.png" alt="icono3" />
            <Text>
              Trámites con municipio <br />y fraccionamiento
            </Text>
          </ListItem>
          <ListItem>
            <Icon src="assets/foundation.png" alt="icono4" />
            <Text>Construcción</Text>
          </ListItem>
          <ListItem>
            <Icon src="assets/hotel.png" alt="icono5" />
            <Text>Entrega y garantías</Text>
          </ListItem>
        </LeftSide>
        <RightSide>
          <Image src="assets/croquis.png" alt="imagen" />
        </RightSide>
      </Container>
    </>
  );
};

export default MyComponent;
