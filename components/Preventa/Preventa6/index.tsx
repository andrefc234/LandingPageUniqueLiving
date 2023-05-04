import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: row;
`;

const Button = styled.button`
  background-color: #bf806b;
  color: white;
  font-size: 24px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin-left: 250px;
  margin-right: 250px;

  cursor: pointer;
  width: 200px;
`;

const Icon = styled.i`
  margin-right: 10px;
`;

const ImageContainer = () => {
  return (
    <Container>
      <ImageWrapper>
        <Image src="./assets/salacortada.png" />
        <ButtonWrapper>
          <Button>
            <Icon className="fa fa-info-circle" />
            Presentación
          </Button>
          <Button>
            <Icon className="fa fa-shopping-cart" />
            Cotiza
          </Button>
        </ButtonWrapper>
      </ImageWrapper>
    </Container>
  );
};

export default ImageContainer;
