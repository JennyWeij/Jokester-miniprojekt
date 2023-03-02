import styled from "styled-components";

function BackToMenuButton() {
    return(

        <MenuButton>Back to menu</MenuButton>

    );
}

const MenuButton = styled.button`
  position: absolute;
  top: 30%;
  left: 30%;
  border-radius: 4%;
  height: 4.5rem;
  width: 13rem;
  color: white;
  background-color: #6b0848;
  font-family: PoppinsRegular;
  font-size: 2rem;
`;

export default BackToMenuButton;