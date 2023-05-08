import React from 'react';
import styled from 'styled-components';
import {Container,Row,Col} from 'react-bootstrap'


const Title = styled.h1`
  font-size: 42px;
  font-family: 'Montserrat';
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
  
  
  
  
`;

const Subtitle = styled.h2`
  font-size: 28px;
  font-family: 'Raleway';
  font-weight: bold;
  margin-top: 25%;
  text-align: center; 
  
`;

const List = styled.ul`
  
  margin-bottom: 10%;
 
 
 
`;

const ListItem = styled.li`
  margin-bottom: 10%;
  font-size: 1.3rem;
  list-style-position: inside; 
  text-indent: -1rem; 
 
  font-family: 'Raleway';
`;

const Button = styled.button`
  background-color: #bf806b;
  color: white;
  font-size: 1.7rem;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-family: 'Montserrat';
  white-space: nowrap;
`;
const StyledSpan = styled.span`
  color: #bf806b;
  
`;
const StyledImg = styled.img`
  width: 100%;
  margin: 0;
  heigth: 20%;
`;

const Component = (props: any) => {
  const containerStyle = {
    backgroundColor: 'white'
  };
  return (
    <>
    <StyledImg src={props.img} alt="My Image" />
    <Container style={containerStyle} className='my-5'>
      <Row className='align-items-center'>
       
        <Title>{props.title}</Title>
       
       
        
      </Row>
      <Row className="align-items-center">
        
        <Col md="auto" >    
       <div className='mb-4'>
       <Subtitle>
          {props.subtitle1} <StyledSpan>{props.spansubtitle}</StyledSpan> {props.subtitle2}:
        </Subtitle>
       </div>
          <List>
          <ListItem>
          {props.item1}
          </ListItem>
        
          <ListItem>
          {props.item2}
          </ListItem>
          
          <ListItem>
          {props.item3}
          </ListItem>
         
          <ListItem>
           {props.item4}
          </ListItem>
        </List></Col>
        <Col className='d-flex justify-content-center mb-3'>
          <a
              href="https://api.whatsapp.com/send?phone=4427492083"
              target="_blank"
            >
              {' '}
              <Button>Mayor información</Button>
            </a>
        </Col>
      </Row>
    </Container>
     
  
    </>
  );
};

export default Component;
