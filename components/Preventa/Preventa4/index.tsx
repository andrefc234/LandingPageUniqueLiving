import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding: 20px;
  
`;

const Title = styled.h1`
  margin-top: 20px;
  text-align: center;
`;

const Video = styled.video`
  width: 50%;
  margin-top: 100px;
`;

const MyComponent = () => {
  return (
    <Container>
      <Title>Recorrido Virtual</Title>
      <Video src="./assets/recorrido.mp4" controls />
    </Container>
  );
};

export default MyComponent;