import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin: 20px 0;
`;

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin: 0 -20px;
  .image-wrapper {
    background-color: white;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  width: 100%;
  height: 80px;
  background-color: rgba(0, 0, 0, 0);
  transition: opacity 0.3s ease;
`;

const Button = styled.button`
  background-color: #bf806b;
  color: white;
  font-size: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin: 0 10px;
  cursor: pointer;
`;

const Icon = styled.i`
  margin-right: 10px;
`;

const ImageContainer = ({ src }) => {
  return (
    <Container>
      <Title>Hola</Title>
      <ImageWrapper>
        <Image src={src} />
        <ButtonWrapper>
          <Button>
            <Icon className="fa fa-info-circle" />
            Más información
          </Button>
          <Button>
            <Icon className="fa fa-shopping-cart" />
            Comprar
          </Button>
        </ButtonWrapper>
      </ImageWrapper>
    </Container>
  );
};

export default ImageContainer;
