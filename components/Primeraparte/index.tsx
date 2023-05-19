import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { Container, Carousel, Spinner } from 'react-bootstrap';

const StyledCarouselItem = styled(Carousel.Item)`
  &&& {
    img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
    }
  }
`;
const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const MyCarousel = () => {
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const handleSelect = (
    selectedIndex: React.SetStateAction<number>,
    e: any
  ) => {
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
      ) : (
        <>
          <animated.div ref={ref} style={props}>
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              fade
              className="intro"
            >
              <StyledCarouselItem>
                <img src="/assets/cantera.png" alt="First slide" />
                <Carousel.Caption>
                  <p className="text-white ml-3 h1 sm:text-4xl md:text-5xl">
                    Arquitectura
                  </p>
                  <p className="text-white ml-3 font-weight-bold leading-tight h3 sm:text-6xl md:text-7xl">
                    Casa Cantera
                  </p>
                  <p className="text-white ml-3 h6 sm:text-2xl md:text-3xl">
                    Santiago de Querétaro, Qro.
                  </p>
                </Carousel.Caption>
              </StyledCarouselItem>
              <StyledCarouselItem>
                <img src="/assets/_28012018_DSC02202.jpg" alt="Second slide" />
                <Carousel.Caption>
                  <p className="text-white ml-3 h1 sm:text-4xl md:text-5xl">
                    Interiorismo
                  </p>
                  <p>Santiago de Querétaro, Qro.</p>
                </Carousel.Caption>
              </StyledCarouselItem>
              <StyledCarouselItem>
                <img src="/assets/l1_Photo11.jpg " alt="Third slide" />
                <Carousel.Caption>
                  <p className="text-white ml-3 h1 sm:text-4xl md:text-5xl">
                    Arquitectura - Preventa
                  </p>
                  <p className="text-white ml-3 font-weight-bold leading-tight h3 sm:text-6xl md:text-7xl">
                    Loft
                  </p>
                  <p className="text-white ml-3 h6 sm:text-2xl md:text-3xl">
                    Santiago de Querétaro, Qro.
                  </p>
                </Carousel.Caption>
              </StyledCarouselItem>
            </Carousel>
          </animated.div>
        </>
      )}
    </>
  );
};

export default MyCarousel;
