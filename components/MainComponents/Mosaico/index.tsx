import React from 'react'
import styled from 'styled-components';



interface Props{

paragraph:any;
styledspan1:string;
paragraph2:any;
styledspan2:string;
}

const Paragraph = styled.p`
  text-align: center;

  font-size: 4rem;
  margin-bottom:5%;
  margin-top:5%;
  font-family: 'Montserrat';
`;
const StyledSpan = styled.span`
  color: #bf806b;
`;
export default function index({paragraph,paragraph2,styledspan1,styledspan2}:Props):JSX.Element {
  return (
        <div>
    <div style={{backgroundImage:'url("/assets/mosaico1.jpg")'}} className='text-center p-5'>
 
      <Paragraph>
            {paragraph}

            <StyledSpan>{styledspan1}</StyledSpan>   {paragraph2} <StyledSpan>{styledspan2}</StyledSpan>
</Paragraph>
    </div>
    </div>
  )
}
