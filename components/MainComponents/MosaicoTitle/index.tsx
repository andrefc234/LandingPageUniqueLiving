import React from 'react'
import styled from 'styled-components';



interface Props{

title:string;
}

const Paragraph = styled.p`
  text-align: center;

  font-size: 30px;
  margin-bottom:5%;
  margin-top:5%;
  font-family: 'Montserrat';
`;
const StyledSpan = styled.span`
  color: #bf806b;
`;
export default function index({title}:Props):JSX.Element {
  return (
        <div>
    <div style={{backgroundImage:'url("/assets/mosaico1.jpg")'}} className='text-center p-5'>
 
      <h2 className='text-center' style={{fontFamily:'Montserrat'}}>{title}</h2>
    </div>
    </div>
  )
}
