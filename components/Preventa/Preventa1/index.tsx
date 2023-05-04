import React from 'react';
import styled from 'styled-components';

const FullscreenImageSection = styled.section`
  background-image: url('./assets/_28012018_DSC02202.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  height: 100vh;
  opacity: 0.7;
`;

const Title = styled.h1`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  text-align: center;
  width: 100%;
  font-family: 'Montserrat';
  font-size: 160px;
`;

const IconContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 2rem;
`;

const Icon = styled.img`
  width: 4rem;
  height: 4rem;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  color: #ffffff;
  font-size: 1.5rem;
  text-align: center;
  margin: 0.5rem 0;
`;

const FullscreenImage = () => {
  return (
    <FullscreenImageSection>
      <Title>loft</Title>
      <IconContainer>
        <IconWrapper>
          <Icon src="./assets/instagram.jpg" alt="Icono 1" />
          <Description>1,2 o 3 recámaras</Description>
        </IconWrapper>
        <IconWrapper>
          <Icon src="./assets/instagram.jpg" alt="Icono 2" />
          <Description>1 o 2 baños</Description>
        </IconWrapper>
        <IconWrapper>
          <Icon src="./assets/instagram.jpg" alt="Icono 3" />
          <Description>Con o sin terraza</Description>
        </IconWrapper>
      </IconContainer>
    </FullscreenImageSection>
  );
};

export default FullscreenImage;
