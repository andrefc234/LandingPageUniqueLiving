import React from 'react';
import styled from 'styled-components';

const ImageWithTitle = () => {
  return (
    <Container>
      <LeftTitleContainer>
        <TitleLeft1 color="#BF806B">loft</TitleLeft1>
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
          {' '}
          <b>80m de construcción</b>
        </TitleRight>
        <TitleRight>
          <b>112m de terreno</b>
        </TitleRight>
        <br />
        <RightTitleContainer2>
          <TitleRight>
            <b>Adicionales</b>
          </TitleRight>
          <br />
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
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  background-color: white;
`;

const LeftTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleLeft1 = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 6rem;
  color: ${props => props.color};
  margin-bottom: 35px;
`;
const TitleLeft = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
  color: ${props => props.color};
  margin-bottom: 10px;
`;

const Image = styled.img`
  width: 23%;
  margin-top: auto;
`;

const RightTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: right;
  text-align: right;
`;

const RightTitleContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TitleRight = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
  color: #000;
  margin-bottom: 10px;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  font-family: 'Raleway', sans-serif;
  font-size: 1.5rem;
  color: #000;
  margin-bottom: 10px;
`;
const ListItem2 = styled.li`
  font-family: 'Raleway', sans-serif;
  font-size: 1.5rem;
  color: #000;
  margin-bottom: 10px;
  text-align: right;
`;
export default ImageWithTitle;
