import { Container, Row, Col, Image } from 'react-bootstrap';

interface SegundaparteProps {
  title: string;
  description: {
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
  };
  imageSrc: string;
}

function Segundaparte({ title, description, imageSrc }: SegundaparteProps) {
  return (
    <Container fluid>
      <Row className="align-items-center">
        <Col md={6} className="p-3">
          <div className="p-4">
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="text-lg mb-4">{description.paragraph1}</p>
            <p className="text-lg mb-4">{description.paragraph2}</p>
            <p className="text-lg mb-4">{description.paragraph3}</p>
          </div>
          <div style={{ marginLeft: '10%', marginTop: '2rem' }}>
            <Image src="/assets/exp.png" />
          </div>
        </Col>

        <Col md={6}>
          <Image src={imageSrc} alt="Imagen" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
}

export default Segundaparte;
