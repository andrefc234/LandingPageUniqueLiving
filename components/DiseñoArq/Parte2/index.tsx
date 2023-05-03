import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: white;
`;

const IconSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 40px;
`;

const Icon = styled.img`
  width: 100px;
  height: 100px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  text-align: center;
`;

const Paragraph = styled.p`
  text-align: center;
  margin-top: 10px;
  font-size: 30px;
`;
const Icon2 = styled.img`
  width: 100px;
  height: 100px;
  margin-top: 26px;
`;

const MyComponent = () => {
  return (
    <Container>
      <IconSection>
        <IconWrapper>
          <Icon2 src="./assets/instagram.jpg" alt="icon1" />
          <Title>
            Diseño <br /> Arquitectonico
          </Title>
        </IconWrapper>
        <IconWrapper>
          <Icon src="./assets/instagram.jpg" alt="icon2" />
          <Title>Remodelación</Title>
        </IconWrapper>
        <IconWrapper>
          <Icon src="./assets/instagram.jpg" alt="icon3" />
          <Title>Ampliación</Title>
        </IconWrapper>
      </IconSection>
      <br />
      <br />
      <br />
      <br />
      <Paragraph>
        Te ayudamos a conseguir el diseño personalizado que tanto buscas. <br />
        Además, si ya cuentas con un terreno, nosotros nos encargamos de <br />
        edificar el espacio en el que te vas a sentir único.
      </Paragraph>
    </Container>
  );
};

export default MyComponent;
