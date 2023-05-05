import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
`;

const Title = styled.h2`
  margin-right: 10px;
  margin-left: 30px;
  margin-top: 110px;
  color: #bf806b;
  font-family: 'Montserrat';
  padding: 30px;
`;

const Subtitle = styled.h4`
  margin-left: auto;
  margin-right: 30px;
  margin-top: 100px;
  color: #bf806b;
  font-family: 'Montserrat';
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 0px;
  background-color: white;
`;

const ImageGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Image = styled.img`
  margin-left: 60px;
  width: 30%;
  height: auto;
  object-fit: cover;
`;
const Image2 = styled.img`
  margin-right: 60px;
  width: 60%;
  height: auto;
  object-fit: cover;
`;
const Image3 = styled.img`
  margin-left: 60px;
  margin-top: 30px;
  width: 35%;
  height: auto;
  object-fit: cover;
`;
const Image4 = styled.img`
  margin-right: 60px;
  margin-top: 30px;
  width: 55%;
  height: auto;
  object-fit: cover;
`;
const Image5 = styled.img`
  margin-left: 60px;
  margin-top: 30px;
  width: 55%;
  height: auto;
  object-fit: cover;
`;
const Image6 = styled.img`
  margin-right: 60px;
  margin-top: 30px;
  width: 35%;
  height: auto;
  object-fit: cover;
`;
const Image7 = styled.img`
  margin-left: 60px;
  margin-top: 30px;
  width: 17.5%;
  height: auto;
  object-fit: cover;
`;
const Image8 = styled.img`
  margin-top: 30px;
  width: 17.5%;
  height: auto;
  object-fit: cover;
`;
const Image9 = styled.img`
  margin-right: 60px;
  margin-top: 30px;
  width: 50%;
  height: auto;
  object-fit: cover;
`;
const Image10 = styled.img`
  margin-right: 60px;
  width: 50%;
  height: auto;
  object-fit: cover;
`;
const Image11 = styled.img`
  margin-left: 60px;
  width: 38%;
  height: auto;
  object-fit: cover;
`;
const Image12 = styled.img`
  margin-left: 60px;
  margin-top: 30px;
  width: 55%;
  height: auto;
  object-fit: cover;
  margin-bottom: 15px;
`;
const Image13 = styled.img`
  margin-right: 60px;
  margin-top: 30px;
  width: 35%;
  height: auto;
  object-fit: cover;
  margin-bottom: 15px;
`;
const index = () => {
  return (
    <div>
      <Container>
        <Title>Querétaro, Qro.</Title>
        <Subtitle>Diseño arquitectónico e Interiorismo</Subtitle>
      </Container>
      <ImageContainer>
        <ImageGroup>
          <Image src="./assets/qro2.jpg" alt="Imagen 1" />
          <Image2 src="./assets/qro1.jpg" alt="Imagen 2" />
        </ImageGroup>
        <ImageGroup>
          <Image3 src="./assets/qro3.jpg" alt="Imagen 3" />
          <Image4 src="./assets/qro4.jpg" alt="Imagen 4" />
        </ImageGroup>
      </ImageContainer>
      <Container>
        <Title>Juriquilla, Qro.</Title>
        <Subtitle>Ampliación y Diseño de Interiores</Subtitle>
      </Container>
      <ImageContainer>
        <ImageGroup>
          <Image5 src="./assets/jur1.jpg" alt="Imagen 1" />
          <Image6 src="./assets/jur2.jpg" alt="Imagen 2" />
        </ImageGroup>
        <ImageGroup>
          <Image7 src="./assets/jur3.jpg" alt="Imagen 3" />
          <Image8 src="./assets/jur4.jpg" alt="Imagen 4" />
          <Image9 src="./assets/jur5.jpg" alt="Imagen 4" />
        </ImageGroup>
      </ImageContainer>
      <Container>
        <Title>Querétaro, Qro.</Title>
        <Subtitle>Diseño Arquitectónico e Interiorismo</Subtitle>
      </Container>
      <ImageContainer>
        <ImageGroup>
          <Image11 src="./assets/ro1.jpg" alt="Imagen 2" />
          <Image10 src="./assets/ro2.jpg" alt="Imagen 1" />
        </ImageGroup>
        <ImageGroup>
          <Image12 src="./assets/ro3.jpg" alt="Imagen 4" />
          <Image13 src="./assets/ro4.jpg" alt="Imagen 3" />
        </ImageGroup>
      </ImageContainer>
    </div>
  );
};

export default index;