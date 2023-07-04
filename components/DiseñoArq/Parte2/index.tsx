import React from 'react';
import styled from 'styled-components';
import Mosaico from '@/components/MainComponents/Mosaico';
const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: white;
  margin-bottom:10%;
`;

const IconSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top:10%;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const IconWrapper = styled.div`
  display: grid;
  place-items: center;
`;

const Icon = styled.img`
  width: 100px;
  height: 100px;
`;

const Title = styled.h2`
text-align: center;
margin-top: 10%;
font-family: 'Montserrat';
font-size: 30px;
`;

const Paragraph = styled.p`
  text-align: center;
  margin-top: 10%;
  font-family: 'Montserrat';
  font-size: 30px;
`;

const Icon2 = styled.img`
  width: 100px;
  height: 100px;
`;


const MyComponent = () => {
  return (
    <Container>
    <Mosaico title='Servicios'/>
      <IconSection >
        <IconWrapper >
          <Icon2 src="./assets/arq.png" alt="icon1" />
          <Title>
            Diseño Arquitectonico
          </Title>
        </IconWrapper>
        <IconWrapper>
          <Icon src="./assets/rem.png" alt="icon2" />
          <Title>Remodelación</Title>
        </IconWrapper>
        <IconWrapper>
          <Icon src="./assets/amp.png" alt="icon3" />
          <Title>Ampliación</Title>
        </IconWrapper>
      </IconSection>
      <br />
      <br />
      <br />
      <br />
   
    </Container>
  );
};

export default MyComponent;
