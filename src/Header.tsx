import styled from "styled-components";

function Header() {
  return (
    <LogoDiv>Jokester</LogoDiv>
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

export default Header