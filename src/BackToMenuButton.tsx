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
  top: 2%;
  left: 1%;
  border-radius: 30px;
  border: none;
  height: 3rem;
  width: 12rem;
  color: white;
  background-color: #6b0848;
  font-family: Poppins-Regular;
  font-size: 1.5rem;

  @media screen and (max-width: 768px) {
    width: 11rem;
    font-size: 1.5rem;
    left: 12%;
    top: 4.5%;
    transform: translate(-50%, -50%);
  }
  @media screen and (max-width: 568px) {
    width: 9rem;
    font-size: 1.2rem;
    left: 14%;
    top: 5%;
    transform: translate(-50%, -50%);
  }
`;

export default BackToMenuButton;
