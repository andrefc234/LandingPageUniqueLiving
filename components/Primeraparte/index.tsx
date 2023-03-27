import React, { useState } from "react";
import styled from "styled-components";
import { Container, Carousel } from "react-bootstrap";

const StyledCarouselItem = styled(Carousel.Item)`
  &&& {
    img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
    }
  }
`;




export default function MyCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: React.SetStateAction<number>, e: any) => {
    setIndex(selectedIndex);
  };
  

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} fade>
      <StyledCarouselItem>
        <img src="/assets/fA_Photo11.jpg" alt="First slide" />
        <Carousel.Caption>
        <p className="text-white ml-3  h1 sm:text-4xl md:text-5xl">Arquitectura</p>
        <p className="text-white ml-3 font-weight-bold leading-tight  h3 sm:text-6xl md:text-7xl">
          Casa Cantera
        </p>
        <p className="text-white  ml-3  h6 sm:text-2xl md:text-3xl">Santiago de Querétaro, Qro.</p>
      </Carousel.Caption>
      </StyledCarouselItem>
      <StyledCarouselItem>
        <img src="/assets/_28012018_DSC02202.jpg" alt="Second slide" />
        <Carousel.Caption>
       
        <p  className="text-white ml-3  h1 sm:text-4xl md:text-5xl">Interiorismo</p >
        <p>Santiago de Querétaro, Qro.</p>
      </Carousel.Caption>
      </StyledCarouselItem>
      <StyledCarouselItem>
        <img src="/assets/l1_Photo11.jpg " alt="Third slide" />
        <Carousel.Caption>
        <p className="text-white ml-3  h1 sm:text-4xl md:text-5xl">Arquitectura - Preventa</p>
        <p className="text-white ml-3 font-weight-bold leading-tight  h3 sm:text-6xl md:text-7xl">
        Loft
        </p>
        <p className="text-white  ml-3  h6 sm:text-2xl md:text-3xl">Santiago de Querétaro, Qro.</p>
      </Carousel.Caption>
      </StyledCarouselItem>
    </Carousel>
  );
}
