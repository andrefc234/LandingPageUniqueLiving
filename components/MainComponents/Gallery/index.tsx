import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
interface DivC{
  marginB:string;
}
const ImagesSection = styled.section`
  display: flex;
  flex-direction: row;
  margin: 0 -10px;
`;

const ImageContainer = styled.div<DivC>`
  width: 50%;
  padding: 0;
  display: flex;
  margin-bottom:${props => (props.marginB)};
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
