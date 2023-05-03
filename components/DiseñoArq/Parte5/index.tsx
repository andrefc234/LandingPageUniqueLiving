import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin: 20px 0;
  text-align: left;
  align-self: flex-start;
  padding-left: 50px;
`;
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
`;

const Button = styled.button`
  background-color: #bf806b;
  color: white;
  font-size: 24px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin: 245px;
  cursor: pointer;
  width: 200px;
`;

const Icon = styled.i`
  margin-right: 10px;
`;
const StyledSpan = styled.span`
  color: #bf806b;
`;
const ImageContainer = () => {
  return (
    <Container>
      <Title>
        <StyledSpan>¡Ahorra y construye</StyledSpan> con nosotros!
      </Title>
      <ImageWrapper>
        <Image src="./assets/casacortada.png" />
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
