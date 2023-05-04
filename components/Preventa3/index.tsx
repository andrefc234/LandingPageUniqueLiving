import styled from 'styled-components';

const Container = styled.div`
  background-color: white;
  text-align: center;
`;

const Col = styled.div`
  flex: 1;
  padding: 0;
  margin: 0 -150px;
  height: 300px; /* establece una altura fija para las imágenes */
  max-width: 50%;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ServiceImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border: none;
`;

const Text = styled.p`
  font-size: 14px;
  margin-left: 10px;
  text-align: center;
`;

function index() {
  return (
    <Container>
      <br />
      <Text>
        *El precio final puede variar dependiendo la ubicación y los adicionales
        agregados
      </Text>
      <Row>
        <Col>
          <ServiceImage src="./assets/carroizq.png" alt="Imagen 1" />
        </Col>
        <Col>
          <ServiceImage src="./assets/casablanca.png" alt="Imagen 2" />
        </Col>
        <Col>
          <ServiceImage src="./assets/carrroder2.png" alt="Imagen 3" />
        </Col>
      </Row>
    </Container>
  );
}

export default index;
