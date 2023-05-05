import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
interface DivC{
  marginB:string;
}
const ImagesSection = styled.section`
  display: flex;
  flex-direction: row;
  margin: 0 -10px;
  @media (max-width: 768px) {
    flex-direction: column;
    
  }
`;

const ImageContainer = styled.div<DivC>`
  width: 100%;
  padding: 0;
  display: flex;
  margin-bottom:${props => (props.marginB)};
  @media (max-width: 768px) {
    width: auto;
    
  }

`;

const Image = styled.img`
  margin: 0;
  padding: 0;
  max-width: 100%;
  height: ${props => (props.height)};
 
`;


const Container = styled.div`
  background-color: white;

`;

const StyledImg = styled.img`
  width: 100vw;
  margin: 0;
`;
interface Gallery{
  images:string[];
  height:string;
  marginB:string;
}
interface Props{
  images:string[];
  marginB:string;
  height:string;
}
const ImageGallery = ({ images ,height,marginB}:Gallery) => {
  return (
    <ImagesSection>
      {images.map((image, index) => (
        <ImageContainer key={index} marginB={marginB}>
          <Image src={image} alt={`Image ${index + 1}`}  height={height}/>
        </ImageContainer>
      ))}
    </ImagesSection>
  );
};
/*

*/
const index = ({images,height,marginB }:Props) => {
  
  return (
    <>
      <Container>
      <ImageGallery images={images} height={height} marginB={marginB}/>   
    
      </Container>
    </>
  );
};

export default index;
