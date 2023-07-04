import React from 'react';
import { Container, Row, Col,Card  } from 'react-bootstrap';
// Update the import path


import styled from 'styled-components';
import Link from 'next/link';

const StyledCard = styled(Card)`
  cursor: pointer;
  margin-top: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

interface Project {
  id: number;
  title: string;
  image: string;

}

interface ProjectCardProps {
  project?: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  if (!project) {
    // Handle the case when project prop is undefined or null
    return null;
  }

  const { id, title, image,  } = project;

  return (
  <Link href={'/proyectos'}>
      <StyledCard>
        <Card.Img variant="top" src={image} alt={title}  style={{ height: '300px', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title style={{fontFamily:'Raleway'}}>{title}</Card.Title>
        
        </Card.Body>
      </StyledCard>
      </Link>
  );
};
const projects = [
  {
    id: 1,
    title: 'Casa Querétaro, QRO',
    image: '/assets/qro1.jpg',
   
  },
  {
    id: 2,
    title: 'Proyecto OMEKUA',
    image: '/assets/arq.jpg',
  
  },
  {
    id: 3,
    title: 'Ampliación Juriquilla, Qro',
    image: '/assets/jur1.jpg',
  
  },
  {
    id: 4,
    title: 'Loft',
    image: '/assets/loft.png',
  
  },
  {
    id: 5,
    title: 'Proyecto Casa Blanca',
    image: '/assets/casablanca.jpg',
  
  },
  {
    id: 6,
    title: 'Proyecto Casa Mallorca',
    image: '/assets/mallorca.jpeg',
  
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <Container className='my-4'>
      <Row>
        {projects.map((project) => (
          <Col key={project.id} md={4}>
            <ProjectCard project={project} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
