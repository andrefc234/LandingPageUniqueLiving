import styled from 'styled-components';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%;
  background-color: rgba(0, 0, 0, 0.5); /* opacidad del 50% */
`;

const Container = styled.div`
  
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)),
    url('/assets/persianas41.jpg');
  background-size: cover;
  background-position: center;
  text-align: center;
  padding: 5rem 0;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 -10px;
  margin-top:3rem;
  
`;

const Column = styled.div`
  flex: 1;
  padding: 0 10px;
  margin: 0 -10px;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%;
  object-fit: cover;
`;

const TitleContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
`;
const TitleContainer1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  text-align: right;
`;
const TitleContainer3 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  text-align: left;
`;
const Title = styled.h3`
  margin: 0;
  font-family:  'Roboto', sans-serif;
  font-weight: 900;
  color: white;
`;

const Description = styled.p`
margin-top:5rem;
  font-size: 1.3rem;
  line-height: 1.1;
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;

`;

function Index() {
  const [ref, inView] = useInView({
    threshold: 0.2, // Trigger when 50% of the component is visible
    triggerOnce: false, // Only trigger once
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });
  
  return (
    <Container>
       <animated.div ref={ref} style={props}>
      <div >
      <Row>
        <Column>
          <ImageWrapper>
            <ImageContainer>
              <Image src="/assets/casacarro.jpg" alt="Image 1" />
              <ImageOverlay />
            </ImageContainer>
            <TitleContainer>
              <Title className='mx-5 mt-3'>Preventa</Title>
            </TitleContainer>
          </ImageWrapper>
          <Description>
            <br />
            <br />
            Te ofrecemos modelos de casa personalizables garantizando la entrega
            más rápida.
            <br />
            <br />
            Dichos proyectos pueden construirse en cualquier ubicación.
          </Description>
          
        </Column>
        <Column>
          <ImageWrapper>
            <ImageContainer>
              <Image src="/assets/casablanca.jpg" alt="Image 2" />
              <ImageOverlay />
            </ImageContainer>
            <TitleContainer>
              <Title className=' mt-3'>Arquitectura</Title>
            </TitleContainer>
          </ImageWrapper>
          <br />
          <br />
          <Description>Diseñamos tu nueva casa desde cero.
          <br/>
           <br/>
          Generamos planos técnicos y renders.
          <br/>
           <br/>
          Gestionamos la construcción.
          </Description>
        
        </Column>
        <Column>
          <ImageWrapper>
            <ImageContainer>
              <Image src="/assets/sala2.jpg" alt="Image 3" />
              <ImageOverlay />
            </ImageContainer>
            <TitleContainer>
              <Title className=' mt-3'>Interiorismo</Title>
            </TitleContainer>
          </ImageWrapper>
          <br />
          <br />
          <Description>
            Creamos espacios únicos, cómodos y funcionales. 3
            <br />
          <br />
            Ambientamos tus habitaciones.
       
          </Description>
          
        </Column>
      </Row>
      </div>
      </animated.div>
    </Container>
  );
}

export default Index;
