import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';
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
  width: 15rem;
  cursor: pointer;
  margin-top: 14%;
  box-shadow: 7px 7px 10px black;
  white-space: nowrap;
`;
const Button1 = styled.button`
  background-color: #bf806b;
  color: white;
  font-size: 24px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin: 245px;
  width: 15rem;
  cursor: pointer;
  margin-top: 29%;
  box-shadow: 7px 7px 10px black;
  white-space: nowrap;
`;
import { HiOutlinePresentationChartLine } from 'react-icons/hi';
import { BsWhatsapp } from 'react-icons/bs';
const Icon = styled.i`
  margin-right: 10px;
`;
const StyledSpan = styled.span`
  color: #bf806b;
`;
interface Props {
  titlespan: string;
  title: string;
  img: string;
}
const ImageContainer = ({ titlespan, title, img }: Props) => {
  return (
    <Container>
      <Title>
        <StyledSpan>{titlespan}</StyledSpan> {title}
      </Title>
      <ImageWrapper>
        <Image src={img} />
        <ButtonWrapper>
          <Button>
            <HiOutlinePresentationChartLine
              className="mx-3"
              style={{ marginBottom: 4 }}
            />
            Presentación
          </Button>
          <a href="https://api.whatsapp.com/send?phone=1234567890">
            <Button1>
              <BsWhatsapp className="mx-3 " style={{ marginBottom: 4.5 }} />
              Cotiza
            </Button1>
          </a>
        </ButtonWrapper>
      </ImageWrapper>
    </Container>
  );
};

export default ImageContainer;
