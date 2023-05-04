import React from 'react';
import styled from 'styled-components';
const Title = styled.h1`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  text-align: center;
  width: 100%;
  font-size: 160px;
  font-weight: 200;
`;

const FullscreenImageSection = styled.section`
  position: relative;
  height: 100vh;
`;
const FullscreenImageContainer = styled.div`
  background-image: url('./assets/inicio.png');
  background-size: cover;
  background-position: center;
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FullscreenImage = () => {
  return (
    <FullscreenImageSection>
      <FullscreenImageContainer></FullscreenImageContainer>
      <Title>
        Diseño <br />
        Arquitectonico
      </Title>
    </FullscreenImageSection>
  );
};

export default FullscreenImage;
