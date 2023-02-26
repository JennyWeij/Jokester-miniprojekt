import styled from 'styled-components';
import backgroundImage from "./assets/backgroundimg.jpg";

function BackgroundImage() {
  return (
    <StyledImageDiv></StyledImageDiv>
  )
}

const StyledImageDiv = styled.div`
  background-Image: URL(${backgroundImage});
  background-size: cover;
  height: 100vh;
  width: 100vw;

`;

export default BackgroundImage;