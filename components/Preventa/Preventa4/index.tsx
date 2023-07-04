import React from 'react';
import styled from 'styled-components';
import YouTube from 'react-youtube';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding: 20px;
  
`;

const Title = styled.h1`
  margin-top: 20px;
  text-align: center;
`;

const Video = styled.video`
  width: 50%;
  margin-top: 100px;
`;

const MyComponent = () => {
  const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
  return (
    <Container>
      <Title>Recorrido Virtual</Title>
   <div className='my-2'>
       <YouTube videoId="gJHzVZCgznA" opts={opts} />
   </div>
    </Container>
  );
};

export default MyComponent;
