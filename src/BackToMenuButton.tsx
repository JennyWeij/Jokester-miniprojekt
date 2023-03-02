import { useState } from "react";
import styled from "styled-components";
import MenuPage from "./MenuPage";


function BackToMenuButton() {
  const [isButtonClicked, setIsButtonClicked]= useState(false);

  function handleButtonClick() {
    setIsButtonClicked(true);
  }

  return(
        <div>
          <MenuButton onClick={handleButtonClick}>Back to menu</MenuButton>
          {isButtonClicked && <MenuPage />}
        </div>
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
