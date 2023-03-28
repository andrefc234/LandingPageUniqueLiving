import styled from 'styled-components';

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* opacidad del 50% */
`;

const Container = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
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
  height: 100%;
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
  color: white;
`;

const Description = styled.p`
  font-size: 1.3rem;
  line-height: 1.1;
  color: white;
`;

function Index() {
  return (
    <Container>
      <Row>
        <Column>
          <ImageWrapper>
            <ImageContainer>
              <Image src="/assets/casacarro.jpg" alt="Image 1" />
              <ImageOverlay />
            </ImageContainer>
            <TitleContainer1>
              <Title>Preventa</Title>
            </TitleContainer1>
          </ImageWrapper>
          <Description>
            <br />
            <br />
            Te ofrecemos modelos de casa personalizables garantizando la entrega
            más rápida.
          </Description>
          <Description>
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
              <Title>Arquitectura</Title>
            </TitleContainer>
          </ImageWrapper>
          <br />
          <br />
          <Description>Diseñamos tu nueva casa desde cero.</Description>
          <Description>Generamos planos técnicos y renders.</Description>
          <Description>Gestionamos la construcción.</Description>
        </Column>
        <Column>
          <ImageWrapper>
            <ImageContainer>
              <Image src="/assets/sala2.jpg" alt="Image 3" />
              <ImageOverlay />
            </ImageContainer>
            <TitleContainer3>
              <Title>Interiorismo</Title>
            </TitleContainer3>
          </ImageWrapper>
          <br />
          <br />
          <Description>
            Creamos espacios únicos, cómodos y funcionales. 3
          </Description>
          <Description>Ambientamos tus habitaciones.</Description>
          <Description>Diseños especiales para espacios especiales</Description>
        </Column>
      </Row>
    </Container>
  );
}

export default Index;
