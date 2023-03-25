import { Row, Col, Image } from 'react-bootstrap';

interface Props {
  imageSrc: string;
  title: string;
  descriptionn: {
    paragraph4: string;
    paragraph5: string;
  };
}

function Index({ imageSrc, title, descriptionn }: Props) {
  return (
    <Row className="align-items-center">
      <Col md={6}>
        <Image src={imageSrc} alt="Imagen" fluid />
      </Col>
      <Col md={6} className="p-4 bg-white">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-lg">
          <p className="text-lg mb-4">{descriptionn.paragraph4}</p>
          <p className="text-lg mb-4">{descriptionn.paragraph5}</p>
        </p>
      </Col>
    </Row>
  );
}

export default Index;
