import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { Container, Carousel,Spinner } from "react-bootstrap";



const StyledCarouselItem = styled(Carousel.Item)`
  &&& {
    img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
    }
    .text-left {
      text-align: left;
    }
  }
`;
const Loader = styled.div`
  display: flex;

  height: 100vh;
`;
const StyledCarousel = styled(Carousel)`
  &&& {
    .carousel-indicators {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 3%;

    }
  }
`;



const MyCarousel = () => {
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const handleSelect = (selectedIndex: React.SetStateAction<number>, e: any) => {
    setIndex(selectedIndex);
  };
  const [ref, inView] = useInView({
    threshold: 0.5, // Trigger when 50% of the component is visible
    triggerOnce: false, // Only trigger once
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  useEffect(() => {
    // Set a timeout to pause the intro animation after 3 seconds
    setLoading(false);
 

  }, []);

  return (
    <>
    {loading ? (
      <Loader>
       <Spinner animation="grow" />
      </Loader>
    ) : (<>
    <animated.div ref={ref} style={props}>
      <StyledCarousel activeIndex={index} onSelect={handleSelect} fade className="intro">
      <StyledCarouselItem>
        <img src="/assets/fA_Photo11.jpg" alt="First slide" />
        <Carousel.Caption className='text-left mb-5'>
          <p className="text-white ml-3 h1 sm:text-4xl md:text-5xl" style={{fontFamily:'Montserrat',textShadow:'40px 40px 80px black',fontWeight:'bold'}}>Arquitectura</p>
          <p className="text-white ml-3 font-weight-bold leading-tight h3 sm:text-6xl md:text-7xl" style={{fontFamily:'Raleway',textShadow:'40px 40px 80px black'}}>Casa Cantera</p>
          <p className="text-white ml-3 h6 sm:text-2xl md:text-3xl"style={{fontFamily:'Raleway'}}>Santiago de Querétaro, Qro.</p>
        </Carousel.Caption>
      </StyledCarouselItem>
      <StyledCarouselItem>
        <img src="/assets/_28012018_DSC02202.jpg" alt="Second slide" />
        <Carousel.Caption className='text-left mb-5'>
          <p className="text-white ml-3 h1 sm:text-4xl md:text-5xl" style={{fontFamily:'Montserrat',textShadow:'40px 40px 80px black',fontWeight:'bold'}}>Interiorismo</p>
          <p className="text-white ml-3 h6 sm:text-2xl md:text-3xl" style={{fontFamily:'Raleway'}}>Santiago de Querétaro, Qro.</p>
        </Carousel.Caption>
      </StyledCarouselItem>
      <StyledCarouselItem>
        <img src="/assets/l1_Photo11.jpg " alt="Third slide" />
        <Carousel.Caption className='text-left mb-5'>
          <p className="text-white ml-3 h1 sm:text-4xl md:text-5xl " style={{fontFamily:'Montserrat',textShadow:'40px 40px 80px black',fontWeight:'bold'}}>Arquitectura - Preventa</p>
          <p className="text-white ml-3 font-weight-bold leading-tight h3 sm:text-6xl md:text-7xl" style={{fontFamily:'Raleway'}}>Loft</p>
          <p className="text-white ml-3 h6 sm:text-2xl md:text-3xl" style={{fontFamily:'Raleway'}}>Santiago de Querétaro, Qro.</p>
        </Carousel.Caption>
      </StyledCarouselItem>
    </StyledCarousel>
    </animated.div>
      </>)}
   </>
  );
};

export default MyCarousel;
