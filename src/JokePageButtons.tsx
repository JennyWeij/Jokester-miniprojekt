import styled from "styled-components";
import ShareButton from "./ShareButton";
import ThumbDownButton from "./ThumbDownButton";
import ThumbUpButton from "./ThumbUpButton";

function JokePageButtons () {
return (
  <DivContainer>
      <ThumbDownButton />
      <ThumbUpButton />
      <ShareButton />
  </DivContainer>
)
}

const DivContainer = styled.div`
 display: flex; 
 justify-content: center; 
 align-items: center;
 height: 100%; 

 @media (max-width: 768px) {
    height: auto;
    padding: 0.5rem;

    @media (max-width: 365px) {
    height: auto;
    width: 60%;
    padding: 0.5rem;
    }
  }
`;

export default JokePageButtons