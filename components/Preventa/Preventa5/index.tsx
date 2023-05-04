import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 20px;
  margin-top:7%;
  margin-bottom:7%;
  margin-left:4%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-right: 20px;
    margin-bottom: 0;
  }
`;

const Title = styled.h2`
  text-align: center;
  white-space: nowrap;
  margin-bottom: 20px;
  font-family: 'Montserrat';
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  margin: 1% 0;
  width: 200px;
  font-size:1.1rem;
  white-space: nowrap;
  font-family: 'Raleway';
  font-weight:bold;
`;

const Icon = styled.img`
  margin-right: 20px;
  width: 60px;
  height: 60px;
`;

const Text = styled.p`
  text-align: center;
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width:100%;
  height:100%;
  
`;

const Image = styled.img`
  margin-top: 5%;
  

  @media screen and (min-width: 768px) {
    width: 90%;
    height: 75%;
  }
`;

const Caption = styled.p`
  font-size: 12px;
  text-align: right;
  margin-left: 340px;
  margin-top: 10px;

  @media screen and (min-width: 768px) {
    text-align: right;
    margin-top: 0;
  }
`;

const StyledSpan = styled.span`
  color: #bf806b;
  font-family: 'Montserrat';
`;

const MyComponent = () => {
  return (
    <Container>
      <LeftSide>
        <Title>
          Creamos juntos el <StyledSpan>concepto</StyledSpan> que <br /> siempre
          <StyledSpan> soñaste</StyledSpan>
        </Title>
        <ListItem>
          <Icon src="./assets/instagram.jpg" alt="icono" />
          <Text>Diseño arquitectónico</Text>
        </ListItem>
        <ListItem>
          <Icon src="./assets/instagram.jpg" alt="icono" />
          <Text>Crédito y escrituración</Text>
        </ListItem>
        <ListItem>
          <Icon src="./assets/instagram.jpg" alt="icono" />
          <Text>
            Trámites con municipio <br />y fraccionamiento
          </Text>
        </ListItem>
        <ListItem>
          <Icon src="./assets/instagram.jpg" alt="icono" />
          <Text>Construcción</Text>
        </ListItem>
        <ListItem>
          <Icon src="./assets/instagram.jpg" alt="icono" />
          <Text>Entrega y garantías</Text>
        </ListItem>
      </LeftSide>
      <RightSide>
        <Image src="./assets/croquis.png" alt="imagen" />
       
      </RightSide>
    </Container>
  );
};

export default MyComponent;