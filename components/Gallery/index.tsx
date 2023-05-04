import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

const ImagesSection = styled.section`
  display: flex;
  flex-direction: row;
  margin: 0 -10px;
`;

const ImageContainer = styled.div`
  width: 50%;
  padding: 0;
  display: flex;
  margin-bottom:15%;
`;

const Image = styled.img`
  margin: 0;
  padding: 0;
  max-width: 100%;
  height: 130%;
`;

const Paragraph = styled.p`
  text-align: center;
  background-color: white;
  font-size: 30px;
  margin-bottom:7%;
  font-family: 'Montserrat';
`;

const Container = styled.div`
  background-color: white;
`;
const StyledSpan = styled.span`
  color: #bf806b;
`;
const StyledImg = styled.img`
  width: 100vw;
  margin: 0;
`;
interface Gallery{
  images:string[];
}
interface Props{
  images:string[];
  paragraph:string;
  paragraph2:string;
  styledspan1:string;
  styledspan2:string;
}
const ImageGallery = ({ images }:Gallery) => {
  return (
    <ImagesSection>
      {images.map((image, index) => (
        <ImageContainer key={index}>
          <Image src={image} alt={`Image ${index + 1}`} />
        </ImageContainer>
      ))}
    </ImagesSection>
  );
};
/*

*/
const index = ({images, paragraph, paragraph2, styledspan1, styledspan2 }:Props) => {
  
  return (
    <>
      <Container>
      <ImageGallery images={images} />   
        <Paragraph>
            {paragraph}

            <StyledSpan>{styledspan1}</StyledSpan>   <br/>{paragraph2} <StyledSpan>{styledspan2}</StyledSpan>
</Paragraph>
      </Container>
    </>
  );
};

export default index;
