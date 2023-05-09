import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Container } from 'react-bootstrap';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link'
const ImageContainer = styled.div`

  display: flex;
  flex-direction: column;
 
  height: 110vh;

  @media (max-width: 640px) {
    height: auto;
    padding-top: 100px;
    padding-bottom: 50px;
  }
`;
const Service = styled.div`
  position: relative;
  width: 100%;
  height: 150%;
  overflow: hidden;

  @media (max-width: 640px) {
    height: 300px;
  }
`;

const ServiceImage = styled(Image)`
  position: absolute;
  top:20%;
  left: 15%;
  width:80%;
  margin-left:10%;
  object-fit: cover;
  height: 150%;
  
  @media (max-width: 640px) {
    width: 100%;
    height: 100%;
  }
`;


const ServiceTitle = styled.h3`
  position: absolute;

  top:50%;
  left: 10%;
  padding-top: 2%;

  background-color:white;
  font-family: 'Montserrat';
  font-size: 2rem;
  
  text-align: center;
  color: black;
  width: 30%;
  height: 100%;

  box-shadow: 5px 5px 10px  black;
  



  @media (max-width: 640px) {
    font-size: 1.5rem;
  }
`;
const Frame = styled.div`
background-color:white;

`
function Terceraparte() {
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
    <Container fluid className="bg-white my-5">
      <animated.div ref={ref} style={props}>
    <div>
      <div style={{backgroundImage:'url("/assets/mosaico1.jpg")'}} className='text-center p-5'>
        <h1 className="text-3xl font-bold mb-0" style={{fontFamily:'Montserrat'}}>Nuestros Servicios</h1>
      </div>
      <ImageContainer>
      
        <Service>
        <Link href='/interiorismo'>
          <ServiceImage src="/assets/sala.jpg" alt="Servicio 1" width={1444} height={900}/>
         
          <ServiceTitle>Diseño de interiores</ServiceTitle>
          
          </Link>
        </Service>
        
        <Service>
          <Link href='/arquitectura'>
          <ServiceImage src="/assets/fA_Photo41.jpg" alt="Servicio 2" width={1444} height={1000} />
          <ServiceTitle>Arquitectura</ServiceTitle>
          </Link>
        </Service>
        <Service>
          <Link href='/loft'>
          <ServiceImage src="/assets/pJ_Photo21.jpg" alt="Servicio 3" width={1444} height={1000} />
          <ServiceTitle>Loft</ServiceTitle>
          </Link>
        </Service>
      </ImageContainer>
    </div>
    </animated.div>
    </Container>
  );
}

export default Terceraparte;
