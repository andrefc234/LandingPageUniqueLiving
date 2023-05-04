import styled,  { ThemedStyledProps }  from 'styled-components';
interface FullscreenImageProps {
    backgroundUrl: string;
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
`;

const FullscreenImageSection = styled.section`
  position: relative;
  height: 120vh;
`;
const FullscreenImageContainer = styled.div<ThemedStyledProps<FullscreenImageProps,{}>>`
  background-image: url(${props => props.backgroundUrl});
  background-size: cover;
  background-position: center;
  position: relative;
  height: 120vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FullscreenImage = (props: any) => {
  return (
    <FullscreenImageSection>
      <FullscreenImageContainer  backgroundUrl={props.img}></FullscreenImageContainer>
      <Title>
       {props.title}
      </Title>
    </FullscreenImageSection>
  );
};

export default FullscreenImage;