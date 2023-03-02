import styled from "styled-components";

function Header() {
  return (
    <LogoDiv> 
      <p>
      Jokester
      </p>
    </LogoDiv>
  )
}

const LogoDiv = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  text-align: left;
  font-family: MysteryQuest;
  font-size: clamp(3.5rem, 8vw, 6rem);
`;

export default Header


