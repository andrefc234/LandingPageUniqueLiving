import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  @media (max-width: 640px) {
    height: auto;
    padding-top: 100px;
    padding-bottom: 50px;
  }
`;

const Service = styled.div`
  position: relative;
  width: 100%;
  height: 33.33%;
  overflow: hidden;

  @media (max-width: 640px) {
    height: 300px;
  }
`;

const ServiceImage = styled(Image)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
 
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.5;
  }

  @media (max-width: 640px) {
    width: 100%;
    height: 100%;
  }
`;

const ServiceTitle = styled.h3`
  position: absolute;
  bottom: -1;
  left: 0;
  padding: 0;
  background-color: rgba(0, 0, 0, 0.8);
  font-size: 2rem;
  font-weight: bold;
  text-align: left;
  color: white;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0;
  }

  @media (max-width: 640px) {
    font-size: 1.5rem;
    bottom: -1;
  }
`;

function Terceraparte() {
  return (
    <div>
      <div style={{backgroundImage:' url("/assets/mosaico1.jpg'}} className='text-center p-5'>
        <h1 className="text-3xl font-bold mb-0">Nuestros Servicios</h1>
      </div>
      <ImageContainer>
        <Service>
          <ServiceImage src="/assets/sala.jpg" alt="Servicio 1" width={1444} height={800} />
          <ServiceTitle>Diseño de interiores</ServiceTitle>
        </Service>
        <Service>
          <ServiceImage src="/assets/fA_Photo41.jpg" alt="Servicio 2" width={1444} height={800} />
          <ServiceTitle>Arquitectura</ServiceTitle>
        </Service>
        <Service>
          <ServiceImage src="/assets/pJ_Photo21.jpg" alt="Servicio 3" width={1444} height={800} />
          <ServiceTitle>Remodelación y Ampliación</ServiceTitle>
        </Service>
      </ImageContainer>
    </div>
  );
}

export default Terceraparte;
