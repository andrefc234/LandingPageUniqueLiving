import styled,  { ThemedStyledProps }  from 'styled-components';

import Image from 'next/image';

interface FullscreenImageProps {
  backgroundUrl: any;
  title: any;
}

const Title = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  text-align: center;
  width: 100%;
  font-size: 7rem;
  font-family: 'Montserrat';
  font-weight: bold;
  text-shadow: 10px 10px 20px black;
  
  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;

const FullscreenImageSection = styled.section`
  position: relative;
  height: 100vh;
`;

const FullscreenImageContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const FullscreenImage = (props: FullscreenImageProps) => {
  console.log(props.backgroundUrl)
  return (
    <FullscreenImageSection>
      <FullscreenImageContainer>
        <Image src={props.backgroundUrl} alt={''}    width={0}
      
  height={0}
  sizes="100vw"
  fill
  priority
  style={{ objectFit: 'cover',}} />
        <Title>
          {props.title}
        </Title>
      </FullscreenImageContainer>
    </FullscreenImageSection>
  );
};

export default FullscreenImage;
