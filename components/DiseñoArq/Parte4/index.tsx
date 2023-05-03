import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-items: flex-start;
`;

const Title = styled.h1`
  font-size: 42px;
  font-weight: bold;
  text-align: center;
  margin-top: 0;
`;

const Subtitle = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin-top: 20px;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 18px;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  font-size: 20px;
`;

const Button = styled.button`
  background-color: #bf806b;
  color: white;
  font-size: 24px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin-left: 20px;
  margin-top: 220px;
`;
const StyledSpan = styled.span`
  color: #bf806b;
`;

const Component = () => {
  return (
    <Container>
      <div>
        <br />
        <br />
        <Subtitle>
          Nuestros <StyledSpan>servicios</StyledSpan> incluyen:
        </Subtitle>
        <br />
        <br />
        <List>
          <ListItem>
            <b>Desarrollo</b> del concepto
          </ListItem>
          <br />
          <ListItem>
            <b>Gestión</b> del proyecto
          </ListItem>
          <br />
          <ListItem>
            <b>Construcción</b> de tu nueva casa
          </ListItem>
          <br />
          <ListItem>
            <b>Seguimiento</b> post-entrega
          </ListItem>
        </List>
      </div>
      <Title>¡Te ayudamos a construir tu casa soñada!</Title>
      <Button>Mayor información</Button>
    </Container>
  );
};

export default Component;
