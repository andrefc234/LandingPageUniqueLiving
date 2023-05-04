import React from 'react';
import styled from 'styled-components';

const ImageWithTitle = () => {
  return (
    <>
    <Container>
      <LeftTitleContainer>
       
        <TitleLeft color="#000">
          <b>Personalizable</b>
        </TitleLeft>
        <List>
          <ListItem>1,2 o 3 habitaciones</ListItem>
          <ListItem>1 o 2 baños</ListItem>
          <ListItem>Terraza</ListItem>
          <ListItem>Fachada</ListItem>
          <ListItem>Piso</ListItem>
          <ListItem>Jardin interior</ListItem>
          <ListItem>Jardin trasero</ListItem>
          <ListItem>Sala</ListItem>
          <ListItem>Comedor</ListItem>
        </List>
      </LeftTitleContainer>
      <Image src="./assets/jARDIN1.jpg" alt="Imagen" />
      <RightTitleContainer>
        <TitleRight>
         
          <b>80m de construcción</b>
        </TitleRight>
        <TitleRight>
          <b>112m de terreno</b>
        </TitleRight>
      
        <RightTitleContainer2>
          <TitleRight2>
            <b>Adicionales</b>
          </TitleRight2>
        
        </RightTitleContainer2>

        <List>
          <ListItem2>Acabados</ListItem2>
          <ListItem2>Instalación de persianas</ListItem2>
          <ListItem2>Amueblado</ListItem2>
          <ListItem2>Calentador solar</ListItem2>
          <ListItem2>Muros texturizados</ListItem2>
          <ListItem2>Techado de terraza</ListItem2>
          <ListItem2>Diseño de jardin</ListItem2>
          <ListItem2>Closets</ListItem2>
          <ListItem2>Cocina</ListItem2>
        </List>
      </RightTitleContainer>
    </Container>
    <Text>
          *El precio final puede variar dependiendo la ubicación y los
          adicionales agregados
        </Text>
   </>
  );
};


const Text = styled.p`
  font-size: 14px;
  margin-top:3rem;
  margin-left: 30rem;
  margin-right:auto;
  text-align: left;
`;


const Container = styled.div`
margin-top: 5rem;
display: flex;
justify-content: space-between;
align-items: flex-start;
position: relative;
background-color: white;
`;
const LeftTitleContainer = styled.div`
margin-top:7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 10%;

`;


const TitleLeft = styled.h2`
  font-family: 'Montserrat';
  font-size: 1.6rem;

  color: ${props => props.color};
  margin-bottom: 2rem;
`;

const Image = styled.img`
  width: 30%;
  margin-top: auto;
  margin-left: 5%

`;

const RightTitleContainer = styled.div`
margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 5%;
`;

const RightTitleContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TitleRight = styled.h2`
  font-family: 'Montserrat';
  font-size: 2rem;
  color: #000;
  margin-bottom: 0rem;
  margin-left -5rem;
`;
const TitleRight2 = styled.h2`
  font-family: 'Raleway';
  font-size: 1.4rem;
  color: #000;
  margin-bottom: 2rem;
  margin-top: 2rem;
  margin-left: 15rem
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  font-family: 'Raleway';
  font-size: 1rem;
  color: #000;
  margin-bottom: 10px;
`;
const ListItem2 = styled.li`
  font-family: 'Raleway';
  font-size: 1rem;
  color: #000;
  margin-left:10rem;
  margin-bottom: 10px;
  text-align: right;
`;
export default ImageWithTitle;
