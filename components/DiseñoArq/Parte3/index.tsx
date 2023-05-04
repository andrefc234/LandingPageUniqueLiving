import React from 'react';
import styled from 'styled-components';

const ImagesSection = styled.section`
  display: flex;
  flex-direction: row;
  margin: 0 -10px;
`;

const ImageContainer = styled.div`
  width: 50%;
  padding: 0;
  display: flex;
`;

const Image = styled.img`
  margin: 0;
  padding: 0;
  max-width: 100%;
  height: auto;
`;

const Paragraph = styled.p`
  text-align: center;
  background-color: white;
  font-size: 30px;
`;

const Container = styled.div`
  background-color: white;
`;
const StyledSpan = styled.span`
  color: #bf806b;
`;
const StyledImg = styled.img`
  width: 100vw;
  margin: 0;
`;

const TwoImages = () => {
  return (
    <>
      <Container>
        <ImagesSection>
          <ImageContainer>
            <Image src="./assets/dibujo.png" alt="Image 1" />
          </ImageContainer>
          <ImageContainer>
            <Image src="./assets/nodibujo.png" alt="Image 2" />
          </ImageContainer>
        </ImagesSection>
        <br />

        <Paragraph>
          ¡Construyendo con estructura metálica te aseguramos mayor <br />
          <StyledSpan>seguridad estructural</StyledSpan> y
          <StyledSpan> reducción de costos!</StyledSpan>
        </Paragraph>
        <br />
        <br />
        <StyledImg src="./assets/construccion1.png" alt="My Image" />
      </Container>
    </>
  );
};

export default TwoImages;
