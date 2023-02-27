import styled from "styled-components";
import BackgroundImage from "./BackgroundImage";
import Header from "./Header";

function JokePage () {
  return (
   <div> <Header />
    <BackgroundImage />
</div>
  )
}
const LogoDiv = styled.div`
position: absolute;
top: 0;
left: 40%;
color: white;
display: flex;
flex-direction: column;
justify-content: left;
align-items: left;
text-align: left;
font-size: 6rem;
font-family: MysteryQuest; 
`;

export default JokePage