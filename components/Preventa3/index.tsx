import styled from 'styled-components';

const Container = styled.div`
  background-color: white;

  text-align: center;

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
    max-width: 33.3333%;
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -1rem;
`;

const Service = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Text = styled.p`
  font-size: 14px;
  margin-left: 10px;
  text-align: left;
`;
function index() {
  return (
    <>
      <Container>
        <Text>
          *El precio final puede variar dependiendo la ubicación y los
          adicionales agregados
        </Text>
        <Row>
          <Col>
            <Service>
              <img src="./assets/l1_Photo11.jpg" alt="Imagen 1" />
            </Service>
          </Col>
          <Col>
            <Service>
              <ServiceImage
                src="./assets/_28012018_DSC036112.jpg"
                alt="Imagen 2"
              />
            </Service>
          </Col>
          <Col>
            <Service>
              <ServiceImage
                src="./assets/iMG_20171108_09494912.jpg"
                alt="Imagen 3"
              />
            </Service>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default index;
