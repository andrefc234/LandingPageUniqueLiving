import styled from 'styled-components';


const Container = styled.div`
  background-image: url('/assets/mosaico1.jpg');
  background-size: cover;
  background-position: center;
  text-align: center;
  padding: 5rem 0;

  @media (max-width: 960px) {
    padding: 2rem 0;
  }

  @media (max-width: 640px) {
    padding: 1rem 0;
  }
`;

const Col = styled.div`
  flex: 1;
  max-width: 33.3333%;
  padding: 0rem;

  @media (max-width: 960px) {
    max-width: 100%;
  }

  @media (max-width: 640px) {
    max-width: 50%;
  }
`;


const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 0;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -1rem -1rem;
`;



const Service = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.5;
  }
`;

const ServiceTitle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  opacity: 1;
  transition: opacity 0.3s ease;
  height: 100%;

  h3 {
    font-size: 3rem;
    font-weight: bold;
    margin: 0 0 1rem 0;
    line-height: 1.2;
    text-align: left;
    color: white;
    font-size: 2rem; 
    margin-bottom: 0.5rem; 
  }
  
  p {
    font-size: 1.6rem;
    margin: 0;
    text-align: left;
    color: white;
    font-size: 1.4rem; 
    margin-bottom: 0; 
  }

  @media (max-width: 640px) {
    padding: 1rem;
    h3 {
      font-size: 2rem;
    }
    p {
      font-size: 1.2rem;
    }
  }

  &:hover {
    opacity: 0.8;
  }
`;

function index() {
  return (
    <>
      <Container>
        <Title>Proyectos</Title>
      </Container>
      <Row>
        <Col>
          <Service>
            <img
              src="./assets/l1_Photo11.jpg"
              alt="Imagen 1"
            />
            <ServiceTitle>
              <h3>Arquitectura - Preventa</h3>
              <h3>Loft</h3>
              <p>Santiago de Querétaro, Qro.</p>
            </ServiceTitle>
          </Service>
        </Col>
        <Col>
          <Service>
            <ServiceImage
              src="./assets/_28012018_DSC036112.jpg"
              alt="Imagen 2"
            />
            <ServiceTitle>
              <h3>Interiorismo</h3>
              <h3>Casa Big Sur</h3>
              <p>Santiago de Querétaro, Qro.</p>
            </ServiceTitle>
          </Service>
        </Col>
        <Col>
          <Service>
            <ServiceImage
              src="./assets/iMG_20171108_09494912.jpg"
              alt="Imagen 3"
            />
            <ServiceTitle>
              <h3>Arquitectura</h3>
              <h3>Casa Alegre</h3>
              <p>Santiago de Querétaro, Qro.</p>
</ServiceTitle>
</Service>
</Col>
</Row>
</>
);
}

export default index