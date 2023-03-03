import styled from "styled-components";
import ShareButton from "./ShareButton";
import ThumbDownButton from "./ThumbDownButton";
import ThumbUpButton from "./ThumbUpButton";

function JokePageButtons () {
return (
  <DivContainer>
<ShareButton />
      <ThumbDownButton />
      <ThumbUpButton />
  </DivContainer>
)
}

const DivContainer = styled.div`
 display: flex; 
 justify-content: center;

 align-items: center;
 height: 50rem; 
 width: 40rem;
 top: 40%;

 @media (max-width: 768px) {
    height: 2rem;
    padding: 0.5rem;

    @media (max-width: 375px) {
    height: 1rem;
    width: 100%;
    padding: 0.5rem;
    }
  }
`;

export default JokePageButtons