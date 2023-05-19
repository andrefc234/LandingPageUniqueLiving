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
  max-width: 100%;
  height: auto;
  @media (max-width: 768px) {
    height: auto;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
  @media (max-width: 768px) {
    height: 15vh;
    width: 100%;
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 768px) {
    margin-top: 1rem;
    margin-left: -1.3rem;
    width: 100%;
    height: auto;
    font-size: 1rem;
  }
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
  margin-top: 28%;
  box-shadow: 7px 7px 10px black;
  white-space: nowrap;

  @media (max-width: 768px) {
    margin: 0.5rem;
    width: 100%;
    height: auto;
    font-size: 1rem;
    margin-top: 0%;
    margin-bottom: 15%;
    margin-left: 15%;
  }
`;

const Button2 = styled.button`
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

  @media (max-width: 768px) {
    margin: 0.5rem;
    width: 100%;
    height: auto;
    font-size: 1rem;
    margin-top: 0%;
    margin-bottom: 15%;
    margin-left: 15%;
  }
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
    <Container className="my-4">
      <Title>
        <StyledSpan>{titlespan}</StyledSpan> {title}
      </Title>
      <Row>
        <Col>
          <ImageWrapper>
            <Image src={img} />
            <ButtonWrapper>
              <Button2>
                <a href="/mi_archivo.pdf" download="mi_archivo.pdf">
                  <HiOutlinePresentationChartLine
                    className="mx-1"
                    style={{ marginBottom: 4 }}
                  />
                  Presentación
                </a>
              </Button2>
              <a
                href="https://api.whatsapp.com/send?phone=4427492083"
                target="_blank"
              >
                {' '}
                <Button>
                  <BsWhatsapp className="mx-2" style={{ marginBottom: 4.5 }} />
                  Cotiza
                </Button>
              </a>
            </ButtonWrapper>
          </ImageWrapper>
        </Col>
      </Row>
    </Container>
  );
};

export default ImageContainer;
